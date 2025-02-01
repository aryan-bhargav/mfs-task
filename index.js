const express = require("express");
const app = express();
const PORT = 8000;

let users = [
  { id: 1, name: "Priyanshu", email: "priyanshu@gmail.com" },
  { id: 2, name: "Aryan Bhargav", email: "aryan@gmail.com" },
  { id: 3, name: "Sarif", email: "sarif@gmail.com" }
];

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app
  .get("/users", (req, res) => {
    res.json(users);
  })
  .post("/users", (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({ error: "No name or email provided" });
    }

    const newUser = { id: users.length + 1, name, email };
    users.push(newUser);

    res.status(201).json(newUser);
  });

app.delete("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  users = users.filter((user) => user.id !== userId)
  res.json({
    message: `User with id:${userId} is deleted`
  })
})

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
