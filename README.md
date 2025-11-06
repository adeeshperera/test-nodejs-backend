## Install dependencies:
   npm install

## Running the Project
node server.js / npm start

## Hosted URL:
https://test-nodejs-backend.vercel.app/

## Task 1: Hello Route
- GET: http://localhost:3000/hello or https://test-nodejs-backend.vercel.app/hello
- Expected: { "message": "Hello, World!" }

## Task 2: Parameters & Query
- GET: http://localhost:3000/user/adeesh
- Expected: { "greeting": "Hello, adeesh" }

- GET: http://localhost:3000/search?keyword=adeesh
- Expected: { "result": "You searched for adeesh" }

## Task 3: Todos API
- GET: http://localhost:3000/todos = Get all todos
- POST: http://localhost:3000/todos + Body: { "task": "Test Task" } = Add todo
- DELETE: http://localhost:3000/todos/1 = Delete todo

## Task 4: Async Route
- GET: http://localhost:3000/async-user/2 = Wait 2 sec
- Expected: { "id": "2", "name": "User 2" }

