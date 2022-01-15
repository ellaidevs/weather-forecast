<!-- Please remove this file from your project -->
<template>
  <div>
    <div class="bg-gray-100 min-h-screen py-32 px-10">
      <HomeTitle title="Weather Forecast" />
      <CitiesGrid :cities="cities" />
    </div>
  </div>
</template>

<script>
import HomeTitle from "./HomeTitle.vue";
import CitiesGrid from "./CitiesGrid.vue";
export default {
  name: "NuxtTutorial",
  components: {
    HomeTitle,
    CitiesGrid,
  },
  data() {
    return {
      cities: [
        "Kuala Lumpur",
        "Johor Bahru",
        "Kuching",
        "Kota Kinabalu",
        "Ipoh",
        "George Town",
        "Selangor",
        "Kuantan",
        "Kedah",
        "Seremeban",
        "Alor Setar",
        "Kuala Terengganu",
        "Shah Alam",
        "Johor",
        "Petaling Jaya 17",
        "Klang",
        "Sungai Petani",
        "Putrajaya",
        "Melaka",
      ],
    };
  },
  methods: {
    async callApi() {
      const response = await this.$axios.get(
        "api.openweathermap.org/data/2.5/weather?q=brisbane&appid=a200ce27073c1f74acfcc6246a889d93"
      );
      console.log("check resp:", response);
    },
    getCityWeather(city) {
      console.log("check wether", city);
    },
  },
};
</script>
