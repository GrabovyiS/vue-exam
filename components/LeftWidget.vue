<template>
  <v-card class="mx-auto widget mt-4" max-width="240" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="widget-title text-h6 mb-5">
          Количество объявлений в базе brom.ru
        </v-list-item-title>
        <v-list-item-subtitle class="mb-1"
          >Автомобили: {{ widget.cars }}</v-list-item-subtitle
        >
        <v-list-item-subtitle
          >Квартиры: {{ widget.apartments }}</v-list-item-subtitle
        >
      </v-list-item-content>
    </v-list-item>

    <v-card-actions>
      <v-btn raised outlined text to="/sales" color="purple">
        К объявлениям
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "IndexPage",
  computed: {
    ...mapGetters({
      widget: "widget",
    }),
  },
};
</script>

<style>
.widget-title {
  text-overflow: initial !important;
  white-space: normal !important;
}
</style>
