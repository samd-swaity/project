export class AppError extends Error {
    httpCode;
    isOperational;
    constructor(description, httpCode, isOperational) {
        super(description);
        Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain
        this.httpCode = httpCode;
        this.isOperational = isOperational;
        Error.captureStackTrace(this);
    }
}
