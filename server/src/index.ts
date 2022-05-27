require('dotenv').config();
const cookieParser = require('cookie-parser');
const express = require('express');
const cors = require('cors');

const userRoutes = require('./modules/Users/router');

export const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use('/', userRoutes);

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
