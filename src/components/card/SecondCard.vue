<template>
  <v-row align="center" class="px-2 py-2">
    <v-card-text class="py-0 title">
      {{ item.title }}
    </v-card-text>
    <v-card-text class="py-0 sub-title">
      {{ item.details }}
    </v-card-text>
    <v-card-text class="d-flex py-0 ">
      <v-img
        v-for="(img, i) in item.images"
        :key="i"
        :src="img"
        max-width="30"
        max-height="30"
        class="mx-1 rounded"
      />
    </v-card-text>
  </v-row>
</template>

<script>
export default {
  props: ["item"],
};
</script>