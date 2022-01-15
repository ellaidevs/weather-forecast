<template>
  <div class="container mx-auto">
    <div class="flex justify-center px-6 my-12">
      <div class="w-full lg:w-7/12 bg-white p-5 rounded-lg">
        <h3 class="pt-4 text-2xl text-center italic">
          Find out weather for any city!
        </h3>
        <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
          <div class="mb-4">
            <label
              class="block mb-2 text-sm font-bold text-gray-700"
              for="email"
            >
              Search
            </label>

            <!-- <select v-model="form.access">
                <option v-for="access in accessList" v-bind:key="access">
                  {{ access }}
                </option>
              </select> -->

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
          <div class="mb-6 text-center">
            <button
              @click="getCityWeather"
              class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
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
export default {
  props: ["cities"],
  data() {
    return {
      currCity: "Kuala Lumpur",
    };
  },
  //   mounted: {},
  methods: {
    getCityWeather() {
      console.log("check current city", this.currCity);
    },
  },
};
</script>

<style></style>
