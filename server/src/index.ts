const express = require('express');
const cors = require('cors');

// const userRoutes = require('./modules/User/user.routes');

const PORT = 5000;

export const app = express();

app.use(cors());
app.use(express.json());
// app.use('/', userRoutes);

const start = () => {
	try {
		app.listen({ port: PORT }, () => {
			console.log(`SERVER RUNNING ON PORT ${PORT}`);
		});
	} catch (e) {
		console.log(e);
	}
};

start();
