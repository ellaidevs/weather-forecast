<template>
  <div>
    <SortBy />
    <DisplayAllCity v-if="getDisplayAllCity" :cities="cities" />
    <DisplaySingleCity v-else :cities="cities" />
  </div>
</template>

<script>
import DisplayAllCity from "./DisplayAllCity.vue";
import DisplaySingleCity from "./DisplaySingleCity.vue";

export default {
  components: {
    DisplayAllCity,
    DisplaySingleCity,
  },
  name: "CitiesComponent",
  props: ["cities"],
  computed: {
    getDisplayAllCity() {
      return this.$store.state.displayAllCity;
    },
  },
};
</script>

<style></style>
