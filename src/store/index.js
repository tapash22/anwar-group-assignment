import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userDetailis: [
      {
        id: 1,
        title: "This is title one",
        details:
          "Lorem ipsum dolor sit amet consectetur ",
        designation: "",
        images: [
          "https://i.ibb.co/h8R1J8r/testi-2.jpg",
          "https://i.ibb.co/h8R1J8r/testi-2.jpg",
          "https://i.ibb.co/h8R1J8r/testi-2.jpg",
        ],
        date: "2022-01-15",
      },
      {
        id: 2,
        title: "This is title two",
        details:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex commodi at quod rem ipsum fuga sunt,  elit. Ex commodi at quod rem ipsum fuga sunt",
        date: "2022-01-15",
      },
      {
        id: 2,
        title: "This is title three",
        details:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex commodi at quod rem ipsum fuga sunt,  elit. Ex commodi at quod rem ipsum fuga sunt",
        date: "2022-01-15",
      },
      {
        id: 4,
        title1: "This is title four",
        name: "name",
        designation: "designation",
        image: "https://i.ibb.co/h8R1J8r/testi-2.jpg",
        date: "2022-01-15",
      },
    ],
  },
  getters: {
    getUserDetails: (state) => state.userDetailis,
  },
  mutations: {
    ADD_USER_DETAIL(state, userDetail) {
      state.userDetailis.unshift(userDetail);
    },
  },
  actions: {
    addUserDetail({ commit }, userDetail) {
      commit('ADD_USER_DETAIL', userDetail);
    },
  },
})
