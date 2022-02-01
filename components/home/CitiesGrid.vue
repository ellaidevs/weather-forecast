<template>
  <div>
    <div
      v-if="getDisplayAllCity"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-10 xl-grid-cols-4 gap-y-10 gap-x-6 cursor-pointer"
    >
      <SortBy />
      <div
        @click="getCityWeather(city)"
        v-for="city in cities"
        v-bind:key="city"
        class="container mx-auto shadow-lg rounded-lg max-w-md hover:shadow-2xl transition duration-300"
      >
        <nuxt-link to="/cities">
          <img
            :src="randomImgUrl + city"
            :alt="city"
            class="rounded-t-lg w-full"
          />
          <div class="p-6">
            <h1
              class="md:text-1xl text-xl hover:text-indigo-600 transition duration-200 font-bold text-gray-900"
            >
              {{ city }}
            </h1>
            <p class="text-gray-700 my-2 hover-text-900">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium quis.
            </p>
          </div>
        </nuxt-link>
      </div>
    </div>
    <div v-else class="cursor-pointer">
      <div
        @click="getCityWeather(city)"
        class="container mx-auto shadow-lg rounded-lg max-w-md hover:shadow-2xl transition duration-300"
      >
        <nuxt-link to="/cities">
          <img :src="randomImgUrl" alt="city" class="rounded-t-lg w-full" />
          <div class="p-6">
            <h1
              class="single-card-title md:text-1xl text-xl hover:text-indigo-600 transition duration-200 font-bold text-gray-900"
            >
              {{ getCityName }}
            </h1>

            <p class="city-desc text-gray-700 my-2 hover-text-900">
              {{ getWeather }}
            </p>
            <img :src="getWeatherIcon" :alt="getWeather" class="weather-icon" />
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "CitiesComponent",
  props: ["cities"],
  computed: {
    getCityName() {
      return this.$store.state.selectedCity;
    },
    getWeather() {
      return this.$store.state.weather;
    },
    getWeatherIcon() {
      const code = this.$store.state.weatherIcon;
      return `https://openweathermap.org/img/w/${code}.png`;
    },
    getDisplayAllCity() {
      return this.$store.state.displayAllCity;
    },
  },

  data() {
    return {
      randomImgUrl: "https://source.unsplash.com/random/",

      // weather: this.$store.state.weather,

      listAllCities: false,
    };
  },
};
</script>

<style></style>
