<template>
<div class="d-block">
    <div class="d-flex justify-center py-2">
        <v-btn
      depressed
      color="primary"
      @click="openForm"
    >
    Add New post
    </v-btn>
    </div>
    <div class="d-flex justify-center py-2">
        <p class="heading">
           Our Company Milestone
        </p>
    </div>
    <v-timeline reverse="reverse" >
    <v-timeline-item v-for="(item, index) in userDetails" :key="index" small>
      <v-card>
        <v-row>
          <!-- Left side -->

          <v-col :cols="10">
            <FirstCardVue v-if="item.image" :item="item" />
            <SecondCardVue v-else-if="item.images" :item="item" />
            <ThirdCardVue v-else :item="item" />
          </v-col>

          <!-- Right side -->

          <v-col
            class="text-center border-left pa-0 ma-0 d-flex align-center justify-center pt-auto pb-auto"
            :cols="2"
          >
            <div>
              <v-card-subtitle class="py-0 sub-title">{{
                formatMonth(item.date)
              }}</v-card-subtitle>
              <v-card-subtitle class="py-0 title">{{
                formatDay(item.date)
              }}</v-card-subtitle>
              <v-card-text class="py-0 sub-title">{{
                formatYear(item.date)
              }}</v-card-text>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-timeline-item>
  </v-timeline>

  <div v-if="show" class="form-container" >
    <UserForm @add-new-data="addNewData" />
  </div>
</div>
</template>
  
  <script>
import FirstCardVue from "./card/FirstCard.vue";
import SecondCardVue from "./card/SecondCard.vue";
import ThirdCardVue from "./card/ThirdCard.vue";
import UserForm from './form/UserForm.vue';


export default {

    data(){
        return{
            show:false,
        }
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
    UserForm
  },

  methods: {
    openForm(){
        this.show = true;
    },

    addNewData(newDetail) {
        console.log(newDetail);
      this.$store.dispatch('addUserDetail', newDetail);
      this.show = false;
    },

    formatMonth(dateString) {
      const date = new Date(dateString);
      return date.toLocaleDateString(undefined, { month: "short" });
    },
    formatDay(dateString) {
      const date = new Date(dateString);
      return date.toLocaleDateString(undefined, { day: "numeric" });
    },
    formatYear(dateString) {
      const date = new Date(dateString);
      return date.toLocaleDateString(undefined, { year: "numeric" });
    },
  },
};
</script>

  