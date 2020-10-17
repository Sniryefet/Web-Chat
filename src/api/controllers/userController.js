// import schema and passport
import User from "../../config/userSchema.js";
import passport from "passport";

passport.use(User.createStrategy());
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

export const loginController = async (req, res) => {
  res.render("login");
};

export const registerController = async (req, res) => {
  res.render("register");
};

export const postLoginController = async (req, res) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
  });

  req.logIn(user, function (err) {
    if (err) {
      console.log(err);
    } else {
      passport.authenticate("local")(req, res, function () {
        res.redirect("/");
      });
    }
  });
};

export const postRegisterController = async (req, res) => {
  User.register({ username: req.body.username }, req.body.password, function (
    err,
    user
  ) {
    if (err) {
      console.log(err);
      res.redirect("register");
    } else {
      passport.authenticate("local")(req, res, function () {
        res.redirect("/");
      });
    }
  });
};

export const logoutController = async (req, res) => {
  req.logOut();
  res.redirect("/");
};
