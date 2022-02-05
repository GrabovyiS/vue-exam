export const state = () => ({
  sales: [],
  home: [],
  about: [],
  widget: [],
  form: [],
  salesAreLoaded: false,
  homeIsLoaded: false,
  aboutIsLoaded: false,
  widgetIsLoaded: false,
  formIsLoaded: false,
});

export const mutations = {
  ADD_SALES(state, payload) {
    state.sales = payload;
    state.salesAreLoaded = true;
  },
  ADD_HOME(state, payload) {
    state.home = payload;
    state.homeIsLoaded = true;
  },
  ADD_ABOUT(state, payload) {
    state.about = payload;
    state.aboutIsLoaded = true;
  },
  ADD_WIDGET(state, payload) {
    state.widget = payload;
    state.widgetIsLoaded = true;
  },
  ADD_FORM(state, payload) {
    state.form = payload;
    state.formIsLoaded = true;
  },
};

export const actions = {
  fetchSales({ commit }) {
    fetch("https://demo-api.vsdev.space/api/brom/sales")
      .then((response) => response.json())
      .then((sales) => commit("ADD_SALES", sales));
  },
  fetchHome({ commit }) {
    fetch("https://demo-api.vsdev.space/api/brom/home_page")
      .then((response) => response.json())
      .then((home) => commit("ADD_HOME", home));
  },
  fetchAbout({ commit }) {
    fetch("https://demo-api.vsdev.space/api/brom/about_page")
      .then((response) => response.json())
      .then((about) => commit("ADD_ABOUT", about));
  },
  fetchWidget({ commit }) {
    fetch("https://demo-api.vsdev.space/api/brom/left_widget")
      .then((response) => response.json())
      .then((widget) => commit("ADD_WIDGET", widget));
  },
  fetchForm({ commit }) {
    fetch("https://demo-api.vsdev.space/api/brom/sales/form")
      .then((response) => response.json())
      .then((form) => commit("ADD_FORM", form));
  },
  updateSales({ commit }) {
    fetch("https://demo-api.vsdev.space/api/brom/sales")
      .then((response) => response.json())
      .then((sales) => commit("ADD_SALES", sales));
  },
};

export const getters = {
  sales(state) {
    return state.sales;
  },
  home(state) {
    return state.home;
  },
  about(state) {
    return state.about;
  },
  widget(state) {
    console.log(state.widget);
    return state.widget;
  },
  form(state) {
    return state.form;
  },
  formIsLoaded(state) {
    return state.formIsLoaded;
  },
};
