import {
  GoogleCallbackParameters,
  Strategy as GoogleStrategy,
  StrategyOptionsWithRequest,
  VerifyCallback,
} from "passport-google-oauth20";
import dotenv from "dotenv";

import User from "../models/userModel";
import passport, { Profile } from "passport";
import { Request } from "express";

dotenv.config({ path: "config.env" });

const AUTH_OPTIONS: StrategyOptionsWithRequest = {
  clientID: process.env.CLIENT_ID!,
  clientSecret: process.env.CLIENT_SECRET!,
  // FIXME:  PROD
  callbackURL: "http://localhost:4000/auth/google/callback",
  passReqToCallback: true,
};

const createNewUserInfo = (profile: Profile) => {
  return {
    method: "google",
    googleId: profile.id,
    name: profile.displayName,
    email: profile.emails?.[0].value,
    lastName: profile.name?.familyName || "",
  };
};

const getOrCreateUser = async (profile: Profile, done: VerifyCallback) => {
  let existingUser = await User.findOne({ googleId: profile.id });

  if (existingUser) {
    return done(null, existingUser);
  }

  const newUserInfo = createNewUserInfo(profile);
  const newUser = await User.create(newUserInfo);
  // await newUser.save();
  return done(null, newUser);
};

const verifyCallback = async (
  request: Request,
  accessToken: string,
  refreshToken: string,
  params: GoogleCallbackParameters,
  profile: Profile,
  done: VerifyCallback
): Promise<void> => {
  try {
    getOrCreateUser(profile, done);
  } catch (error: any) {
    return done(error, false);
  }
};

export const passportConfig = (passport: passport.PassportStatic) => {
  passport.use(new GoogleStrategy(AUTH_OPTIONS, verifyCallback));

  passport.serializeUser((user: any, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id: string, done) => {
    try {
      const user = await User.findById(id);
      done(null, user);
    } catch (error) {
      done(error, null);
    }
  });
};

export const setupPassport = (app: any) => {
  app.use(passport.initialize());
  app.use(passport.session());
  passportConfig(passport);
};
