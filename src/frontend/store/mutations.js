export default {
  setLogin(state, { username, email }) {
    state.loggedIn = true;
    state.username = username;
    state.email = email;
  },
  addMessage(state, message) {
    state.messages = [...state.messages, message]
  },
  addWebsocket(state, ws) {
    state.ws = ws;
  }
}
