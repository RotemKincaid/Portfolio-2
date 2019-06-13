const axios = require("axios");

module.exports = {
  addMessage(db, newMessage) {
    return db.query(
      "INSERT INTO messages(name, email, message) VALUES (${name}, ${email}, ${message}) RETURNING *",
      {
        name: newMessage.name,
        email: newMessage.email,
        message: newMessage.message
      }
    );
  },
  getMessages(db) {
    return db.query("SELECT * FROM messages");
  },

  unitTestAddMessages: (name, email, password) => {
    axios.post("/api/messages", { name, email, password });
  },
  unitTestLogin: (adminEmail, password) => {
    axios.post("/auth/login", { adminEmail, password });
  }
};
