const { initDb } = require("../../../server/test/init");
const sinon = require("sinon");
const FuncsCt = require("./FunctionsContact");
const axios = require("axios");

describe("integration test", () => {
  let db;
  beforeAll(() => {
    return initDb().then(theDb => {
      return (db = theDb);
    });
  });
  describe("addMessage function", () => {
    it("should check that values are an object", () => {
      expect(
        FuncsCt.addMessage(db, {
          name: "name",
          email: "email",
          message: "New Message"
        })
      ).toEqual(expect.any(Object));
    });
    it("should send new values to the database", () => {
      FuncsCt.addMessage(db, {
        name: "rotem",
        email: "rotemkincaid@yahoo.com",
        message: "some message"
      }).then(createdMessage => {
        expect(createdMessage).toHaveLength(1);
        expect(createdMessage[0].name).toEqual("rotem");
        expect(createdMessage[0].email).toEqual("rotemkincaid@yahoo.com");
        expect(createdMessage[0].message).toEqual("some message");
      });
    });
  });
  describe("getMessages function", () => {
    it("should get messages from db", () => {
      FuncsCt.getMessages(db).then(messages => {
        expect(messages).toEqual(expect.any(Array));
        //   it("should return an array", () => {
        //     expect(FuncsCt.getMessages()).toEqual(expect.any(Array));
        //   });
      });
    });
  });

  describe("add message axios call", () => {
    it("should send a name, email, and message", () => {
      sinon.stub(axios, "post").withArgs(
        sinon.match({
          name: expect.any(String),
          email: expect.any(String),
          message: expect.any(String)
        })
      );
      return FuncsCt.unitTestAddMessages(
        "Rotem Kincaid",
        "rotem@rotem.com",
        "some interesting message"
      );
    });
    afterEach(() => {
      axios.post.restore();
    });
  });

  describe("login function", () => {
    it("should send an email and a password", () => {
      sinon.stub(axios, "post").withArgs(
        sinon.match({
          adminEmail: expect.any(String),
          password: expect.any(String)
        })
      );
      return FuncsCt.unitTestLogin("rotemkincaid@yahoo.com", "123467");
    });
    afterEach(() => {
      axios.post.restore();
    });
  });
});
