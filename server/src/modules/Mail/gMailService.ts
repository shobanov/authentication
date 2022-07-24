import nodemailer from 'nodemailer';
import { google } from 'googleapis';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

exports.sandActivationMail = async (to: string, link: string) => {
	const oAuth2Client = new google.auth.OAuth2(
		process.env.OAUTH2_CLIENT_ID,
		process.env.OAUTH2_CLIENT_SECRET,
		process.env.GMAIL_REDIRECT_URI
	);
	oAuth2Client.setCredentials({
		refresh_token: process.env.OAUTH2_REFRESH_TOKEN,
	});
	const accessToken = await oAuth2Client.getAccessToken();
	const transporter = nodemailer.createTransport({
		service: process.env.GMAIL_SMTP_SERVICE,
		auth: {
			type: 'OAuth2',
			user: process.env.GMAIL_SMTP_USER,
			clientId: process.env.OAUTH2_CLIENT_ID,
			clientSecret: process.env.OAUTH2_CLIENT_SECRET,
			refreshToken: process.env.OAUTH2_REFRESH_TOKEN,
			accessToken: accessToken,
		},
	} as SMTPTransport.Options);

	const mailOptions = {
		from: process.env.GMAIL_SMTP_USER,
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
