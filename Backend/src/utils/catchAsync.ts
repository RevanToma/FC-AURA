import { Request, Response, NextFunction, RequestHandler } from "express";
import AppError from "./appError";

const handleDuplicateFieldsDB = (err: any) => {
  const value = err.errmsg.match(/(["'])(\\?.)*?\1/)[0];

  const message = `Duplicate field value: ${value}. Please use another value!`;
  return new AppError(message, 400);
};

export const catchAsync = (fn: Function): RequestHandler => {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch((err: any) => {
      if (err.code === 11000) {
        err = handleDuplicateFieldsDB(err);
        return res.status(400).json({
          status: "error",
          message: err.message,
        });
      } else {
        // Other error
        return res.status(500).json({
          status: "error",
          message: err.message,
        });
      }
    });
  };
};
export const catchAsyncResolver = (fn: Function) => {
  return async (...args: any[]) => {
    try {
      return await fn(...args);
    } catch (error: any) {
      if (error.code === 11000) {
        const newError = handleDuplicateFieldsDB(error);
        throw new Error(newError.message);
      } else {
        throw new Error(error.message);
      }
    }
  };
};
