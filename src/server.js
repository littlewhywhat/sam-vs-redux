const express = require("express");
const bodyParser = require("body-parser");

const PORT = 3001;
const todos = [
    { id: 1, name: "buy milk" },
    { id: 2, name: "buy bread" },
];

const app = express();
app.use(bodyParser.json());

app.get("/todos", (req, res) => res.json(todos));

app.post("/todos", (req, res) => {
    const { name } = req.body;
    const user = {
        id: todos.length + 1,
        name,
    };

    todos.push(user);
    res.json(user);
});

app.listen(PORT, () => console.log(`The server is running on port ${PORT}!`));
