import express from "express";
import bodyParser from 'body-parser'
import session from 'express-session'
import User from '../../config/userSchema.js'
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const initMiddlewares = (app,passport) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const viewsPath = path.join(__dirname, "../views");
  const publicPath = path.join(__dirname, "../public");

  app.set("views", viewsPath);
  app.set("view engine", "ejs");
  app.use(express.static(publicPath));
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(
    session({
      secret: "keyboard cat",
      resave: false,
      saveUninitialized: true,
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());

  passport.use(User.createStrategy());
  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
      done(err, user);
    });
  });
  
};

export default initMiddlewares;
