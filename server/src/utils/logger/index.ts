import { createLogger, format, transports } from 'winston';
const { combine, timestamp, json, colorize } = format;

import morgan from 'morgan';

const morganFormat = ':url :status :response-time ms';

// Custom format for console logging with colors
const consoleLogFormat = format.combine(
	format.colorize(),
	format.printf(({ message, timestamp }) => {
		return `${message}: ${timestamp}`;
	})
);

// Create a Winston logger
const logger = createLogger({
	// level: 'info',
	format: combine(colorize(), timestamp(), json()),
	transports: [
		new transports.Console({
			format: consoleLogFormat,
		}),
		new transports.File({ filename: 'app.log' }),
	],
});

export const morganLogger = morgan(morganFormat, {
	stream: {
		write: (message) => {
			const logObject = {
				url: message.split(' ')[1],
				status: message.split(' ')[2],
				responseTime: message.split(' ')[3],
			};
			logger.info(JSON.stringify(logObject));
		},
	},
});
