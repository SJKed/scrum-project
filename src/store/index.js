import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posters: [],
    search: null,
  },
  actions: {
    fetchData(context) {
      fetch("/posters.json")
        .then((res) => res.json())
        .then((data) => {
          context.commit("setPosters", data);
        });
    },
    setSearch(context, word) {
      context.commit("setSearch", word);
    },
  },
  mutations: {
    setPosters(state, posters) {
      state.posters = posters;
    },
    setSearch(state, word) {
      state.search = word;
      console.log("mutating search", word);
    },
  },
  getters: {
    posters(state) {
      const smallPosters = state.posters.slice(0, state.posters.length - 2);
      if (state.search === null || state.search === "") {
        return smallPosters;
      } else {
        return smallPosters.filter((pos) =>
          pos.name.toLowerCase().includes(state.search)
        );
      }
    },
    bigPosters(state) {
      return state.posters.slice(state.posters.length - 2, state.length);
    },
  },
});
