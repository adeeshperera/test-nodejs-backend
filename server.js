const express = require('express');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// In memory storage (Task 3)
let todos = [
    { id: 1, task: "Task 1" }
];
let nextId = 2;

// Task 4- Async function (2 sec)
async function getUserById(id) {
    return new Promise(resolve => {
        setTimeout(() => resolve({ id, name: `User ${id}` }), 2000);
    });
}

// Task 1- Hello route
app.get('/hello', (req, res) => {
    res.json({ message: "Hello, World!" });
});

// Task 2- User route with parameter
app.get('/user/:name', (req, res) => {
    const name = req.params.name;
    res.json({ greeting: `Hello, ${name}` });
});

// Task 2- Search route with query
app.get('/search', (req, res) => {
    const keyword = req.query.keyword;
    res.json({ result: `You searched for ${keyword}` });
});

// Task 3- Get all todos
app.get('/todos', (req, res) => {
    res.json(todos);
});

// Task 3- Add new todo
app.post('/todos', (req, res) => {
    const newTodo = {
        id: nextId++,
        task: req.body.task
    };
    todos.push(newTodo);
    res.json(newTodo);
});

// Task 3- Delete todo
app.delete('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    todos = todos.filter(todo => todo.id !== id);
    res.json({ message: `Todo ${id} deleted` });
});

// Task 4- Async user route
app.get('/async-user/:id', async (req, res) => {
    const id = req.params.id;
    const user = await getUserById(id);
    res.json(user);
});

// For local testing
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}

// For Vercel
module.exports = app;
