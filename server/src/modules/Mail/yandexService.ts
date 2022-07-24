import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

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

	const mailOptions = {
		from: process.env.YANDEX_SMTP_USER,
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
