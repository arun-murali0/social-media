import { EmailTemplateProp } from '../../types';

export const emailTemplates = [
	{
		welcome: (name: string): EmailTemplateProp => ({
			subject: 'Welcome to Our Platform!',
			text: `Hello ${name},\n\nWelcome to our platform! We're glad to have you onboard.`,
			html: `<p>Hello <strong>${name}</strong>,</p><p>Welcome to our platform! We're glad to have you onboard.</p>`,
		}),
	},
	{
		otp: (otpCode: string): EmailTemplateProp => ({
			subject: 'Your OTP Code',
			text: `Your OTP code is: ${otpCode}. It is valid for 10 minutes.`,
			html: `<p>Your OTP code is: <strong>${otpCode}</strong>.</p><p>It is valid for 10 minutes.</p>`,
		}),
	},
	{
		resetPassword: (resetLink: string): EmailTemplateProp => ({
			subject: 'Reset Your Password',
			text: `Click the link below to reset your password:\n${resetLink}`,
			html: `<p>Click the link below to reset your password:</p><p><a href="${resetLink}">Reset Password</a></p>`,
		}),
	},
];
