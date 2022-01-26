<template>
  <div class="flex flex-col justify-center items-center h-screen">
    <div class="tailwindccsok text-center">
      <h1 class="font-black text-9xl bg-gray-100 mix-blend-lighten uppercase">
        {{ title }}
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchCardTitle",
  props: ["title"],
};
</script>

<style scoped>
.tailwindccsok {
  background-image: url("~@/assets/pastel-green-gradient.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
