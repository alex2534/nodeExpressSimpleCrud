import { v4 as uuidv4 } from "uuid";

let users = [];

export const getUser = (req, res) => {
	res.send(users);
};

export const userCreate = (req, res) => {
	console.log("Post route reached");
	const user = req.body;

	const userWithId = { ...user, id: uuidv4() };

	users.push(userWithId);
	res.send(`User with the name ${user.firstName} added to the database!`);
};

export const getUserById = (req, res) => {
	//contains the user id
	const { id } = req.params;

	const foundUser = users.find((user) => user.id === id);
	res.send(foundUser);
};

export const updateUserById = (req, res) => {
	const { id } = req.params;
	const { firstName, lastName, age } = req.body;

	const user = users.find((user) => user.id === id);

	if (firstName) {
		user.firstName = firstName;
	}
	if (lastName) {
		user.lastName = lastName;
	}
	if (age) {
		user.age = age;
	}

	res.send(`User with the id ${id} has been updateted`);
};

export const deleteUser = (req, res) => {
	const { id } = req.params;

	users = users.filter((user) => user.id !== id);

	res.send(`User with the id ${id} has been deleted`);
};
