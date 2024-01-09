<template>
  <div class="d-block">
    <div class="d-flex justify-center py-2">
      <v-btn depressed color="primary" @click="openForm"> Add New post </v-btn>
    </div>

    <div class="d-flex justify-center py-2">
      <p class="heading">Our Company Milestone</p>
    </div>
    <v-timeline reverse="reverse">
      <v-timeline-item v-for="(item, index) in userDetails" :key="index"  >
        <v-card>
          <v-row>
            <!-- Left side -->
            <v-col :cols="10">
              <FirstCardVue v-if="item.image" :item="item" />
              <SecondCardVue v-else-if="item.images" :item="item" />
              <ThirdCardVue v-else :item="item" />
            </v-col>
            <!-- Left side end -->

            <!-- Right side -->
            <v-col
              class="text-center border-left pa-0 ma-0 d-flex align-center justify-center pt-auto pb-auto"
              :cols="2"
            >
              <DataFormat :item="item" />
            </v-col>

             <!-- Right side end -->
          </v-row>
        </v-card>
      </v-timeline-item>
    </v-timeline>

    <div v-if="show" class="form-container">
      <UserForm @add-new-data="addNewData" />
    </div>
  </div>
</template>
  
  <script>
import FirstCardVue from "./card/FirstCard.vue";
import SecondCardVue from "./card/SecondCard.vue";
import ThirdCardVue from "./card/ThirdCard.vue";
import UserForm from "./form/UserForm.vue";
import DataFormat from "./card/DateFormat.vue";

export default {
  data() {
    return {
      show: false,
    };
  },

  computed: {
    userDetails() {
      return this.$store.getters.getUserDetails;
    },
  },

  components: {
    FirstCardVue,
    SecondCardVue,
    ThirdCardVue,
    UserForm,
    DataFormat,
  },

  methods: {
    openForm() {
      this.show = true;
    },

    addNewData(newDetail) {
      console.log(newDetail);
      this.$store.dispatch("addUserDetail", newDetail);
      this.show = false;
    },
  },
};
</script>

<style >


</style>

  