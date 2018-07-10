export const state = () => ({
  targetUser: {
    // NOTE: データ例
    // icon_path: "path_to_icon",
    // last_name: "村上",
    // first_name: "大和",
    // sex: 1
  }
});

export const actions = {
  setTargetUser({ commit }, user) {
    commit("setTargetUser", user);
  }
};

export const mutations = {
  setTargetUser(state, user) {
    state.targetUser = user;
  }
};
