export const state = () => ({
  selectedCity: "Kuala Lumpur",
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
  SET_CURRENT_CITY(state, value) {
    state.selectedCity = value;
  },
};
