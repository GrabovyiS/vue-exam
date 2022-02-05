<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-spacer></v-spacer>
      <LeftWidget></LeftWidget>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title class="logo-title">brom.ru</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-title class="subtitle">
        Доска объявлений brom.ru
      </v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer temporary fixed>
      <v-list>
        <v-list-item>
          <v-list-item-action>
            <v-icon light> mdi-repeat </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer app>
      <span class="subtitle">&copy; 2022 Грабовый Савелий Павлович</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "DefaultLayout",
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-chart-bubble",
          title: "Главная",
          to: "/",
        },
        {
          icon: "mdi-apps",
          title: "О нас",
          to: "/about",
        },
        {
          icon: "mdi-shape-outline",
          title: "Объявления",
          to: "/sales",
        },
      ],
      miniVariant: false,
    };
  },
  methods: {
    ...mapActions({
      fetchSales: "fetchSales",
      fetchHome: "fetchHome",
      fetchAbout: "fetchAbout",
      fetchForm: "fetchForm",
      fetchWidget: "fetchWidget",
    }),
  },
  created() {
    this.fetchSales();
    this.fetchHome();
    this.fetchAbout();
    this.fetchForm();
    this.fetchWidget();
  },
};
</script>

<style>
.logo-title {
  font-size: 24px;
}
.subtitle {
  font-size: 16px;
  opacity: 0.8;
}
</style>
