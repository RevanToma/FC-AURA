export default class AppError extends Error {
  status: string;
  isOperational: boolean;

  constructor(public message: string, public statusCode: number) {
    super(message);
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    this.isOperational = true;
    // to get the original stack trace
    Error.captureStackTrace(this, this.constructor);
  }
}
