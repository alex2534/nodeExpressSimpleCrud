import express from "express";
import bodyParser from "body-parser";
import usersRoutes from "./routes/users.js";
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use("/users", usersRoutes);

app.get("/", (req, res) => {
	res.send("Hello World");
});

app.post("/", (req, res) => {
	req.send("hello");
	console.log(req.hostname);
});

app.put("/user", function (req, res) {
	res.send("Got a PUT request at /user");
});

app.delete("/user", function (req, res) {
	res.send("Got a DELETE request at /user");
});

app.listen(PORT, () => {
	console.log(`Example app listening on port ${PORT}`);
});
