<!-- Please remove this file from your project -->
<template>
  <div>
    <div class="bg-gray-100 min-h-screen py-32 px-10">
      <SearchCardTitle title="Weather Forecast" />
      <SearchCity :cities="cities" />
      <CitiesGrid :cities="cities" />
    </div>
  </div>
</template>

<script>
import SearchCardTitle from "./SearchCardTitle.vue";
import CitiesGrid from "./CitiesGrid.vue";
import SearchCity from "./SearchCity.vue";
export default {
  name: "NuxtTutorial",
  components: {
    SearchCardTitle,
    CitiesGrid,
    SearchCity,
  },
  data() {
    return {
      cities: [
        "Johor Bahru",
        "Kuala Lumpur",
        "Puchong",
        "Kuching",
        "Kota Kinabalu",
        "Ipoh",
        "George Town",
        "Selangor",
        "Kuantan",
        "Kedah",
        "Seremban",
        "Alor Setar",
        "Kuala Terengganu",
        "Shah Alam",
        "Johor",
        "Petaling Jaya",
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
