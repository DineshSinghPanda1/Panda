import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex, axios);
export default new Vuex.Store({
  state: {
    marks: [],
    //syllabus
    syllabus: []
  },
  actions: {
    //Marks
    loadMarks({ commit }) {
      axios
        .get("http://192.168.1.136:8000/api/class/1/A/marks")
        .then(data => {
          console.log(data.data);
          let marks = data.data;
          commit("SET_MARKS", marks);
        })
        .catch(error => {
          console.log(error);
        });
    },
    //syllabbus
    loadSyllabus({ commit }) {
      axios
        .get("http://192.168.1.136:8000/api/class")
        .then(data => {
          console.log(data.data);
          let syllabus = data.data;
          commit("SET_SYLLABUS", syllabus);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mutations: {
    //Marks
    SET_MARKS(state, marks) {
      state.marks = marks;
    },
    //Syllabus
    SET_SYLLABBUS(state, syllabus) {
      state.syllabus = syllabus;
    }
  },
  modules: {}
});
