<!-- UserForm.vue -->
<template>
  <div class="d-block form-block ">
    <form @submit.prevent="submitForm" class="py-auto px-5">
      <label for="title">Title:</label>
      <input v-model="newDetail.title" type="text" required />

      <label for="details">Details:</label>
      <textarea v-model="newDetail.details" required></textarea>
      <v-btn
        class="my-2"
        depressed
        color="primary"
        type="submit"
      >
        Submit
      </v-btn>
    </form>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      newDetail: {
        title: "",
        details: "",
        // image: "",
      },
    };
  },
  methods: {
    submitForm() {
      this.newDetail.date = new Date().toISOString().split("T")[0];
      this.$emit("add-new-data", this.newDetail);
      this.newDetail = {
        title: "",
        details: "",
        // image: "",
      };
    },
  },
};
</script>
  