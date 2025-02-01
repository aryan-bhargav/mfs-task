# Task: Create a Basic API Using Node.js & Express

Build a simple REST API using Node.js and Express.js to manage a list of users.

## Setup Instructions

### 1. Clone the Repository
```sh
git clone https://github.com/aryan-bhargav/mfs-task.git
cd mfs-task
```

### 2. Install Dependencies
```sh
npm install
npm install express
npm install cors
```

### 3. Run the Server
```sh
node index.js
```

The server will start on `http://localhost:8000`.

---

## API Endpoints test via POSTMAN

### 1. Get All Users
**Endpoint:** `GET /users`

**Request Example:**
```sh
GET METHOD http://localhost:8000/users
```

**Response Example:**
```json
[
  { "id": 1, "name": "Priyanshu", "email": "priyanshu@gmail.com" },
  { "id": 2, "name": "Aryan Bhargav", "email": "aryan@gmail.com" },
  { "id": 3, "name": "Sarif", "email": "sarif@gmail.com" }
]
```

### 2. Add a New User
**Endpoint:** `POST /users`

**Request Example:**
```sh
POST METHOD http://localhost:8000/users 
  Body -> x-www-form-urlencoded
```
| Key       | Value           | Description                |
| :-------- | :-------------- | :------------------------- |
| `name`    | `abc`           |                            |
| `email`   | `abc@gmail.com` |                            |
```http
```
**Response Example:**
```json
{
  "id": 4,
  "name": "abc",
  "email": "abc@gmail.com"
}
```

### 3. Delete a User by ID
**Endpoint:** `DELETE /users/:id`

**Request Example:**
```sh
DELETE METHOD http://localhost:8000/users/4
```

**Response Example:**
```json
{
  "message": "User with id:4 is deleted"
}
```

---


