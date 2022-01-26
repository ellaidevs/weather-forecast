<template>
  <div class="container mx-auto">
    <div class="flex justify-center px-6 my-12">
      <div class="tailwindccsok w-full lg:w-7/12 p-5 bg-blue-100 rounded-lg">
        <h3 class="pt-4 text-2xl text-center italic">
          Find out weather for any city!
        </h3>
        <h1>{{ this.$store.state.counter }}</h1>
        <form class="px-8 pt-6 pb-8 mb-4 rounded">
          <div class="mb-4">
            <label
              class="block mb-2 text-sm font-bold text-gray-700"
              for="email"
            >
              Search
            </label>
            <select
              v-model="currCity"
              class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="selectCity"
              type="text"
            >
              <option v-for="city in cities" v-bind:key="city">
                {{ city }}
              </option>
            </select>
          </div>

          <div class="mb-6 text-center">
            <button
              @click="getCityWeather"
              class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
              type="button"
            >
              Abracadabra!
            </button>
          </div>
          <hr class="mb-6 border-t" />
          <p class="mb-6 text-center">or</p>
          <!-- you need to request and get info for all cities, but please be aware of overloading, throttle -->
          <div class="mb-6 text-center">
            <button
              @click="getAllCityWeather"
              class="w-full px-4 py-2 font-bold text-blue-500 hover:text-blue-800 focus:outline-none focus:shadow-outline"
              type="button"
            >
              Get forecast for all cities!
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
export default {
  props: ["cities"],
  data() {
    return {
      currCity: this.$store.state.selectedCity,
      currCityData: [],
      viewAllCities: false,
    };
  },
  async created() {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${this.$store.state.selectedCity}&appid=a14513b77e2e28faa7e6f69c22f74bcb`
      );

      const weather = res.data.weather[0].description;
      const weatherIcon = res.data.weather[0].icon;

      this.$store.commit("SET_WEATHER", weather);
      this.$store.commit("SET_WEATHER_ICON", weatherIcon);
    } catch (err) {
      console.log(err);
    }
  },
  computed: {
    ...mapState(["categories"]),
  },
  methods: {
    async getCityWeather() {
      try {
        this.$store.commit("SET_DISPLAY_ALL_CITY", false);
        this.$store.commit("SET_CURRENT_CITY", this.currCity);

        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${this.$store.state.selectedCity}&appid=a14513b77e2e28faa7e6f69c22f74bcb`
        );

        const weather = res.data.weather[0].description;
        const weatherIcon = res.data.weather[0].icon;

        this.$store.commit("SET_WEATHER", weather);
        this.$store.commit("SET_WEATHER_ICON", weatherIcon);
      } catch (err) {
        console.log(err);
      }
    },
    getAllCityWeather() {
      this.$store.commit("SET_DISPLAY_ALL_CITY", true);
    },
  },
};
</script>

<style>
.tailwindccsok {
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
