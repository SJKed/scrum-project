import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posters: [],
  },
  actions: {
    fetchData(context) {
      fetch("/posters.json")
        .then((res) => res.json())
        .then((data) => {
          context.commit("setPosters", data);
        });
    },
  },
  mutations: {
    setPosters(state, posters) {
      state.posters = posters;
    },
  },
  getters: {
    posters(state) {
      return state.posters.slice(0, state.posters.length - 3);
    },
    bigPosters(state) {
      return state.posters.slice(state.posters.length - 2, state.length);
    },
  },
});
