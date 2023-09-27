import mongoose, { Schema } from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
export interface UserDocument extends Document {
  id: string;
  name: string;
  lastName: string;
  email: string;
  createdAt: Date;
  weight: number;
  length: number;
  instagram: string;
  password: string | undefined;
  passwordConfirm: string | undefined;
  googleId?: string;
  bio: string;
  position: string;
  method: "password" | "google";
  skills: string[];
  teamMember: boolean;
  image: string;
  correctPassword(
    candidatePassword: string,
    userPassword: string
  ): Promise<boolean>;
}

const userSchema = new Schema<UserDocument>(
  {
    name: {
      type: String,
      required: [true, "Please tell us your name!"],
    },
    image: String,

    lastName: {
      type: String,
      required: [true, "Please tell us your last name!"],
    },
    skills: {
      type: [String],
      required: [true, "Please tell us your skills!"],
    },
    teamMember: {
      type: Boolean,
      default: false,
    },
    bio: {
      type: String,
      required: [
        true,
        "Please tell us your bio!, at least a few things about you",
      ],
    },
    position: {
      type: String,
      required: [true, "Please tell us your position!"],
    },
    email: {
      type: String,
      required: [true, "Please provide your email"],
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, "Please provide a valid email"],
    },
    method: {
      type: String,
      default: "password",
    },
    googleId: String,
    password: {
      type: String,
      minlength: [8, "Password must be at least 8 characters"],
      select: false,
    },
    passwordConfirm: {
      type: String,
      minLength: [8, "Passwords must have at least 8 characters"],
      select: false,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    weight: {
      type: Number,
    },
    length: {
      type: Number,
    },
    instagram: {
      type: String,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password!, 12);

  this.passwordConfirm = undefined;

  next();
});
userSchema.methods.correctPassword = async function (
  candidatePassword: string,
  userPassword: string
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const User = mongoose.model<UserDocument>("User", userSchema);
export default User;