export default {
  namespaced: true,
  state: () => ({
    msg: 'Misson4 Submit'
  }),
  getters: {
    insertedName() {
      return 'Parkchangeon';
    }
  },
  mutations: {
    updateMsg(state, newMsg) {
      state.msg = newMsg;
    }
  },
  actions: {
    insertName({ commit}) {
      const newMsg = 'ParkChangeon Misson4';
      commit('updateMsg', newMsg);
    }
  }
}