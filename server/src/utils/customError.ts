export class customError extends Error {
	errorMessage: string;
	errorCode: number;

	constructor(errorCode: number, errorMessage: string) {
		super(errorMessage);

		this.errorCode = errorCode;
		this.errorMessage = errorMessage;
		this.name = 'Error';

		Object.setPrototypeOf(this, customError.prototype);
	}
}
