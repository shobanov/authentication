require('dotenv').config();
const cookieParser = require('cookie-parser');
const express = require('express');
const cors = require('cors');

const ErrorMiddleware = require('./modules/middlewares/error-middleware');
const RegistrationRoutes = require('./modules/Registration/routes');
const loginRoutes = require('./modules/Login/routes');
const UserRoutes = require('./modules/Users/routes');

export const app = express();
const PORT = process.env.PORT || 5000;

app.use(
	cors({
		origin: 'http://localhost:3000',
	})
);
app.use(express.json());
app.use(cookieParser());
app.use('/', RegistrationRoutes, loginRoutes, UserRoutes);
app.use(ErrorMiddleware);

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
