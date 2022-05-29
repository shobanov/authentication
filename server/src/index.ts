require('dotenv').config();
const cookieParser = require('cookie-parser');
const express = require('express');
const cors = require('cors');

const RegistrationRoutes = require('./modules/Registration/routes');
const loginRoutes = require('./modules/Login/routes');

export const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use('/', RegistrationRoutes, loginRoutes);
// app.use('/', loginRoutes);

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
