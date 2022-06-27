import nodemailer from 'nodemailer';
import { google } from 'googleapis';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

exports.sandActivationMail = async (to: string, link: string) => {
	const oAuth2Client = new google.auth.OAuth2(
		process.env.CLIENT_ID,
		process.env.CLIENT_SECRET,
		process.env.REDIRECT_URI
	);
	oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });
	const accessToken = await oAuth2Client.getAccessToken();
	const transporter = nodemailer.createTransport({
		service: process.env.SMTP_SERVICE,
		auth: {
			type: 'OAuth2',
			user: process.env.SMTP_USER,
			clientId: process.env.CLIENT_ID,
			clientSecret: process.env.CLIENT_SECRET,
			refreshToken: process.env.REFRESH_TOKEN,
			accessToken: accessToken,
		},
	} as SMTPTransport.Options);

	const mailOptions = {
		from: process.env.SMTP_USER,
		to,
		subject: `Account activation for ${to}`,
		text: '',
		html: `
        <div>
          <h1>link to confirm registration</h1>
          <a href="${link}">${link}</a>
        </div>
      `,
	};

	await transporter.sendMail(mailOptions);
};
