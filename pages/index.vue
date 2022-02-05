<template>
  <div class="container">
    <h1>Главная</h1>
    <div class="flex-container">
      <p class="text">
        <span v-html="home.text"></span>
      </p>
      <v-img max-width="45%" :src="home.image"></v-img>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "IndexPage",
  computed: {
    ...mapGetters({
      home: "home",
      widget: "widget",
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
