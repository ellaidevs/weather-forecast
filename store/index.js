export const state = () => ({
  selectedCity: "kedah",
  weather: "",
  weatherIcon: "",
  counter: 1,
});

export const mutations = {
  SET_WEATHER(state, value) {
    state.weather = value;
  },
  SET_WEATHER_ICON(state, value) {
    state.weatherIcon = value;
  },
  INCREMENT_COUNTER(state, value) {
    state.counter += value;
  },
};
