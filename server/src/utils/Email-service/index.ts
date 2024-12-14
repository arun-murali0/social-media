import nodeMailer from 'nodemailer';
import { config } from '../../config';

// email config
export const transporter = nodeMailer.createTransport({
	host: config.SMTP_USER,
	port: config.SMTP_PORT,
	auth: {
		user: config.SMTP_USER,
		pass: config.SMTP_SECRET,
	},
} as nodeMailer.TransportOptions);

// send email
// export const sendMail = async ({ to, params, type }: EmailOptionProp) => {
// 	const template = emailTemplates.filter((emailTemplate) => {
// 		() => {
// 			const keys = Object.keys(emailTemplate);
// 			console.log(keys);
// 		};
// 	});

// 	try {
// 		await transporter.sendMail({
// 			from: config.SENDER_EMAIL,
// 			to,
// 			html: template.,
// 		});
// 		console.info('email send successfully');
// 	} catch (error) {
// 		console.error(error);
// 		throw new customError(400, error.message);
// 	}
// };
