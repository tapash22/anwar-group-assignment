<template>
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
</template>

<script>
export default {
  props: ["item"],

  methods: {
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