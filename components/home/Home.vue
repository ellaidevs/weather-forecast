<!-- Please remove this file from your project -->
<template>
  <div>
    <div class="bg-gray-100 min-h-screen py-32 px-10">
      <HomeTitle />
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-10 xl-grid-cols-4 gap-y-10 gap-x-6 cursor-pointer"
      >
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
    </div>
  </div>
</template>

<script>
import HomeTitle from "./HomeTitle.vue";
export default {
  name: "NuxtTutorial",
  components: {
    HomeTitle,
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
      randomImgUrl: "https://source.unsplash.com/random/",
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
