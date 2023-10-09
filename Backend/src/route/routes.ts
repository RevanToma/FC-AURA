import express from "express";
import path from "path";
import fs from "fs";
import passport from "passport";
import User from "../models/userModel";
import { setTokenInCookie, signToken } from "../utils/auth";

const router = express.Router();

const IMAGES_DIRECTORY = path.join(__dirname, "..", "..", "photos");

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.use("/photos", express.static(IMAGES_DIRECTORY));

router.get("/check-dir", (_req, res) => {
  fs.readdir(IMAGES_DIRECTORY, (err: any, files: any) => {
    if (err) {
      return res.send("Unable to read directory. Error: " + err.message);
    }
    res.send(files);
  });
});
router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  async function (req, res) {
    // Check if user with that Google ID exists
    const googleId = (req.user as any).googleId;
    let user = await User.findOne({ googleId: googleId });

    // If not, create user
    if (!user) {
      user = await User.create({ ...req.user, method: "google" });
    }

    // Generate JWT
    const token = signToken(user.id);
    setTokenInCookie(res, token);

    //Redirect back to frontend with JWT token
    res.redirect(process.env.CLIENT_REDIRECT!);
  }
);
export default router;
