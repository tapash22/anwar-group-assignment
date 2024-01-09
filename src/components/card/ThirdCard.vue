<template>
  <v-row class="px-2 py-2">
    <v-card-text class="py-0 title">
      {{ item.title }}
    </v-card-text>
    <v-card-text class="py-0 sub-title">
      {{ item.details }}
    </v-card-text>
  </v-row>
</template>

<script>
export default {
  props: ["item"],
};
</script>