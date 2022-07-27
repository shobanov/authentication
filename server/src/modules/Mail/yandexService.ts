import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
const hbs = require('nodemailer-express-handlebars');
const path = require('path');

exports.sandActivationMail = async (to: string, link: string) => {
	const transporter = nodemailer.createTransport({
		host: process.env.YANDEX_SMTP_HOST,
		port: process.env.YANDEX_SMTP_PORT,
		secure: true,
		auth: {
			user: process.env.YANDEX_SMTP_USER,
			pass: process.env.YANDEX_SMTP_PASSWORD,
		},
	} as SMTPTransport.Options);

	const handlebarOptions = {
		viewEngine: {
			partialsDir: path.resolve('./views/'),
			defaultLayout: false,
		},
		viewPath: path.resolve('./views/'),
	};

	transporter.use('compile', hbs(handlebarOptions));

	const mailOptions = {
		from: process.env.YANDEX_SMTP_USER,
		to,
		subject: 'Account activation',
		template: 'email',
		context: {
			link,
		},
	};

	await transporter.sendMail(mailOptions);
};
