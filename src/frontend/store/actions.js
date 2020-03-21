export default {
  login({ commit }, loginData) {
    commit('setLogin', loginData)
  },
  sendMessage({ commit }, message) {
    commit('addMessage', message)
  },
  initializeWebsocket({ commit }, ws) {
    commit('addWebsocket', ws)
  }
}
