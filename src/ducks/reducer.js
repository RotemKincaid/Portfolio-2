const initialState = {
  name: "",
  email: "",
  message: "",
  messages: []
};

const SET_NAME = "SET_NAME";
const SET_EMAIL = "SET_EMAIL";
const SET_MESSAGE = "SET_MESSAGE";

const SET_MESSAGES = "SET_MESSAGES";

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_NAME:
      return { ...state, name: payload };
    case SET_EMAIL:
      return { ...state, email: payload };
    case SET_MESSAGE:
      return { ...state, message: payload };
    case SET_MESSAGES:
      return { ...state, messages: payload };
    default:
      return state;
  }
}

export function setName(name) {
  return {
    type: SET_NAME,
    payload: name
  };
}

export function setEmail(email) {
  return {
    type: SET_EMAIL,
    payload: email
  };
}

export function setMessage(message) {
  return {
    type: SET_MESSAGE,
    payload: message
  };
}

export function setMessages(messages) {
  return {
    type: SET_MESSAGES,
    payload: messages
  };
}
