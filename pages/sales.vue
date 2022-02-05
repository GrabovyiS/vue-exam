<template>
  <div class="container">
    <h1 class="mb-12">Объявления</h1>
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header color="purple darken-3">
          <span class="title">Добавить объявление</span>
        </v-expansion-panel-header>
        <v-expansion-panel-content class="pt-4">
          <form v-if="formIsLoaded" id="form" @submit.prevent="send">
            <v-select
              v-model="type"
              :items="[`car`, `apartment`]"
              label="Тип"
              required
            ></v-select>
            <v-select
              v-model="city"
              :items="[
                `Москва`,
                `Санкт-Петербург`,
                `Новосибирск`,
                `Екатеринбург`,
                `Казань`,
                `Нижний Новгород`,
                `Челябинск`,
              ]"
              label="Город"
              data-vv-name="select"
              required
            ></v-select>
            <v-text-field
              v-model="phone"
              label="Телефон"
              required
            ></v-text-field>
            <v-text-field v-model="price" label="Цена" required></v-text-field>
            <v-text-field
              v-model="address"
              label="Адрес"
              required
            ></v-text-field>
            <div v-if="type === `car`">
              <v-select
                v-model="car_type"
                :items="[`Седан`, `Внедорожник`, `Хетчбек`, `Кабриолет`]"
                label="Тип кузова"
                data-vv-name="select"
                required
              ></v-select>
              <v-text-field
                v-model="engine_power"
                label="Мощность двигателя"
                required
              ></v-text-field>
              <v-text-field
                v-model="engine_volume"
                label="Объём двигателя"
                required
              ></v-text-field>
              <v-text-field
                v-model="model"
                label="Модель"
                required
              ></v-text-field>
            </div>
            <div v-if="type === `apartment`">
              <v-text-field
                v-model="rooms"
                label="Комнаты"
                required
              ></v-text-field>
              <v-text-field
                v-model="square"
                label="Площадь"
                required
              ></v-text-field>
            </div>
            <v-btn color="error" class="mr-4" type="submit"> submit </v-btn>
          </form>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-row>
      <v-col cols="12" sm="4" v-for="sale in sales" :key="sale.id" class="">
        <v-card
          v-if="sale.type === `car`"
          class="mx-auto widget mt-4"
          max-width="240"
          outlined
        >
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="title text-h6 mb-5">
                {{ sale.model }}
              </v-list-item-title>
              <v-list-item-subtitle class="mb-1"
                >Город: {{ sale.city }}
              </v-list-item-subtitle>
              <v-list-item-subtitle class="mb-1"
                >Адрес: {{ sale.address }}
              </v-list-item-subtitle>
              <v-list-item-subtitle class="mb-1"
                >Телефон: {{ sale.phone }}
              </v-list-item-subtitle>
              <v-list-item-subtitle class="mb-1"
                >Тип кузова: {{ sale.car_type }}
              </v-list-item-subtitle>
              <v-list-item-subtitle class="mb-1"
                >Объём двигателя: {{ sale.engine_volume }}
              </v-list-item-subtitle>
              <v-list-item-subtitle class="mb-1"
                >Мощность двигателя: {{ sale.engine_power }}
              </v-list-item-subtitle>
              <v-list-item-subtitle class="mb-1 red-ish"
                >Цена: {{ sale.price }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>

        <v-card
          v-if="sale.type === `apartment`"
          class="mx-auto widget mt-4"
          max-width="240"
          min-height="215"
          outlined
        >
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="purple-ish title text-h6 mb-5">
                {{ sale.rooms }}-х комнатная квартира
              </v-list-item-title>
              <v-list-item-subtitle class="mb-1"
                >Город: {{ sale.city }}
              </v-list-item-subtitle>
              <v-list-item-subtitle class="mb-1"
                >Адрес: {{ sale.address }}
              </v-list-item-subtitle>
              <v-list-item-subtitle class="mb-1"
                >Телефон: {{ sale.phone }}
              </v-list-item-subtitle>
              <v-list-item-subtitle class="mb-1 yellow-ish"
                >Цена: {{ sale.price }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  name: "IndexPage",
  data() {
    return {
      type: null,
      address: null,
      phone: null,
      price: null,
      city: null,
      rooms: null,
      square: null,
      car_type: null,
      engine_power: null,
      engine_volume: null,
      model: null,
    };
  },
  computed: {
    ...mapGetters({
      form: "form",
      formIsLoaded: "formIsLoaded",
      sales: "sales",
    }),
  },
  methods: {
    send() {
      let bodyFormData = new FormData();
      bodyFormData.append("type", this.type);
      bodyFormData.append("address", this.address);
      bodyFormData.append("phone", this.phone);
      bodyFormData.append("price", this.price);
      bodyFormData.append("city", this.city);

      if (this.type === "car") {
        bodyFormData.append("car_type", this.car_type);
        bodyFormData.append("engine_power", this.engine_volume);
        bodyFormData.append("engine_volume", this.engine_volume);
        bodyFormData.append("model", this.model);
      } else if (this.type === "apartment") {
        bodyFormData.append("square", this.square);
        bodyFormData.append("rooms", this.rooms);
      }

      for (var pair of bodyFormData.entries()) {
        console.log(pair[0] + ", " + pair[1]);
      }

      this.updateSales(this.$store.state);

      const requestOptions = {
        method: "POST",
        body: bodyFormData,
      };

      fetch(`https://demo-api.vsdev.space/api/brom/sales`, requestOptions);
    },
    ...mapActions({
      updateSales: "updateSales",
    }),
  },
};
</script>

<style>
.title {
  font-size: 24px;
  text-overflow: initial !important;
  white-space: normal !important;
}
.yellow-ish {
  color: rgb(255, 217, 0) !important;
}
.purple-ish {
  color: rgb(137, 53, 179) !important;
}
.red-ish {
  color: rgb(219, 102, 102) !important;
}
</style>
