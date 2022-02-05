<template>
  <div class="container">
    <h1>О нас</h1>
    <div class="flex-container">
      <p class="text">
        <span v-html="about.text"></span>
      </p>
      <v-img max-width="45%" :src="about.image"></v-img>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "AboutPage",
  computed: {
    ...mapGetters({
      about: "about",
    }),
  },
};
</script>

<style>
h1 {
  margin-bottom: 30px;
}
.flex-container {
  display: flex;
  justify-content: space-between;
  gap: 80px;
}
</style>
