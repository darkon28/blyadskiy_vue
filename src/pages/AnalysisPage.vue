<template>
  <q-page class="q-pa-md row items-start q-gutter-md">
    <q-card
      v-for="(card, index) in cardsData"
      :key="index"
      class="my-card"
    >
      <q-img :src="card.image">
        <div v-if="card.title" class="absolute-bottom text-h6">
          {{ card.title }}
        </div>
      </q-img>

      <q-card-section>
        <div class="text-subtitle2">{{ card.subtitle }}</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ card.description }}
      </q-card-section>
    </q-card>

  </q-page>
</template>

<script>
import {ref} from "vue";

export default {
  setup () {
    const cardsData = [
      {
        image: 'https://cdn.quasar.dev/img/mountains.jpg',
        title: 'Our Changing Planet',
        subtitle: 'By John Doe',
        description: 'Analysis result 1. This content was added dynamically to the feed.'
      },
      {
        image: ref(null),
        title: 'title1'
      }
      // You can add more cards here to simulate the feed
    ]

    return {
      cardsData
    }
  },

  data() {
    return {
      posts: [
        {id: 1, date: Date.now(), photo: ref(null), checkup_result: "", status: 0},
        {id: 2, date: Date.now(), photo: ref(null), checkup_result: "", status: 0},
        {id: 3, date: Date.now(), photo: ref(null), checkup_result: "", status: 0},
        {id: 4, date: Date.now(), photo: ref(null), checkup_result: "", status: 0},
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 300px
</style>
