<template>
  <v-row align="center" class="px-2 py-1">
    <!-- Image block -->
    <v-col cols="3">
      <v-img
        :src="item.image"
        alt="Image"
        max-width="100"
        max-height="70"
      ></v-img>
    </v-col>

    <!-- Content block -->
    <v-col cols="9" class="px-0 py-0" v-if="item.title1">
      <v-card-text class="py-0 title">
        {{ item.title1 }}
      </v-card-text>
      <v-card-text class="py-0 sub-title"> {{ item.name }},{{ item.designation }} </v-card-text>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ["item"],
};
</script>