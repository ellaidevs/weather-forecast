<template>
  <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-10 xl-grid-cols-4 gap-y-10 gap-x-6"
  >
    <div
      @click="getCityWeather(city)"
      v-for="city in cities"
      v-bind:key="city"
      class="container mx-auto shadow-lg rounded-lg max-w-md hover:shadow-2xl transition duration-300"
    >
      <nuxt-link to="/cities">
        <img
          :src="require(`~/assets/cities-img/${city}.jpg`)"
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            quis.
          </p>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["cities"],
};
</script>

<style></style>
