export const state = () => ({
  selectedCity: "Kuala Lumpur",
  categories: [
    "sustainability",
    "nature",
    "animal welfare",
    "housing",
    "education",
    "food",
    "community",
  ],
});

export const mutations = {
  increment(state) {
    state.counter++;
  },
};
