module.exports = {
  addMessage: (req, res) => {
    console.log(req.body);
    const { name, email, message } = req.body;
    const db = req.app.get("db");

    db.add_message([name, email, message]).then(messages => {
      res.status(200).send(messages);
    });
  },

  getMessages: (req, res) => {
    const db = req.app.get("db");

    db.get_messages().then(messages => {
      res.status(200).send(messages);
    });
  },
  editMessage: (req, res) => {
    const db = req.app.get("db");
    const { message } = req.query;
    const { message_id } = req.params;

    db.edit_message([message, message_id])
      .then(message => {
        console.log("message from editMessage ->", message);
        res.status(200).send(message[0]);
      })
      .catch(err => {
        console.log(err, "Something went wrong on the server");
      });
  }
};
