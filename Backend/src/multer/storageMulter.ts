// ... (other imports)
import multer from "multer";
import { CustomRequest } from "../utils/expressInterfaces";
import { INumberObject, IPostReqBody } from "../types";
import { catchAsync } from "../utils/catchAsync";
import { NextFunction } from "express";
import sharp from "sharp";

const storage = multer.memoryStorage();

// ... (your fileFilter and limits definition)

const fileFilter = (
  req: CustomRequest<IPostReqBody>,
  file: Express.Multer.File,
  cb: multer.FileFilterCallback
): void => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const limits: INumberObject = {
  fileSize: 4000000,
  files: 5,
  fields: 15,
  parts: 15,
  headerPairs: 100,
};
const upload = multer({
  storage,
  fileFilter,
  limits,
});

export const uploadPhoto = upload.single("photo");

export const resizePhoto = catchAsync(
  async (
    req: CustomRequest<IPostReqBody>,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    if (!req.file) return next();

    // set filename for next middleware if only in buffer
    const filename = `user-${req.user.id}-${Date.now()}.jpeg`;
    req.filename = filename; // Saving the filename to the request for use in subsequent middleware

    await sharp(req.file.buffer)
      .resize({ width: 1000 })
      .toFormat("jpeg")
      .jpeg({ quality: 80 })
      .toFile(`public/photos/users/${filename}`);

    next();
  }
);
