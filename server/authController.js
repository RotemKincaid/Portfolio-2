// const bcrypt = require("bcryptjs");
module.exports = {
  login: (req, res) => {
    // const { session } = req;
    const db = req.app.get("db");
    const { adminEmail, password } = req.body;

    db.check_user_exists(adminEmail).then(admin => {
      console.log(admin, "<-- admin");

      if (admin[0]) {
        if (password === admin[0].password) {
          req.session.admin = {
            adminEmail: admin[0].email,
            username: admin[0].username
          };
          res.status(200).send(req.session.admin);
        } else {
          res.status(401).send("password does not match!");
        }
      } else {
        res.status(404).send("Does not exist");
      }
    });

    // if (!userFound) {
    //   res.status(200).send("Incorrect email, please try again");
    // }
    // let result = bcrypt.compare(password, userFound[0].password);
    // if (result) {
    //   session.user = {
    //     user_id: userFound.user_id,
    //     username: userFound.username,
    //     email: userFound.email
    //   };
    //   res.status(200).send(req.session.user);
    // } else {
    //   res.status(200).send("incorrect email/password");
    // }
  },
  logout: (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
  },
  getSession: (req, res) => {
    if (req.session.user) {
      res.status(200).send(req.session.user);
    } else {
      res.status(401).send("Please Log in");
    }
  }
};
