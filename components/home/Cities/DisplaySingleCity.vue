<template>
  <div
    @click="getCityWeather(city)"
    class="container mx-auto shadow-lg rounded-lg max-w-md hover:shadow-2xl transition duration-300"
  >
    <nuxt-link to="/cities">
      <img
        :src="require(`~/assets/cities-img/${getCityName}.jpg`)"
        alt="city"
        class="rounded-t-lg w-full"
      />
      <div class="p-6">
        <h1
          class="single-card-title md:text-1xl text-xl transition duration-200 font-bold text-gray-900"
        >
          {{ getCityName }}
        </h1>

        <p class="city-desc text-gray-700 my-2">
          {{ getWeather }}
        </p>
        <img :src="getWeatherIcon" :alt="getWeather" class="weather-icon" />
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
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
  },
};
</script>

<style></style>
