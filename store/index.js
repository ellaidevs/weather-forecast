export const state = () => ({
  selectedCity: "kedah",
  weather: "",
  weatherIcon: "",
});

export const mutations = {
  SET_WEATHER(state, value) {
    state.weather = value;
  },
  SET_WEATHER_ICON(state, value) {
    state.weatherIcon = value;
  },
};
