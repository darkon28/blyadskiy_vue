<template>
  <q-page class="q-pa-md row q-gutter-md">
    <div class="row justify-center full-width">
      <div class="col-9 col-lg-8 q-gutter-y-lg">
        <q-card
          v-for="(post, index) in posts"
          :key="index"
          class="my-card">
          <q-card-section class="row justify-between">
            <div class="row q-gutter-x-sm">
              <div><q-icon name="message" size="1.5rem" style="padding-top: 5px"/></div>
              <div class="text-h6">Запрос #{{ post.id }}</div>
            </div>
            <div><q-icon name="close" size="1.5rem" style="padding-top: 5px"/></div>
          </q-card-section>
          <q-card-section class="row">
            <div><q-img :src="post.image" style="width: 150px" /></div>
            <div>
              <p v-if="post.checkup_result !== null">
                {{ post.checkup_result }}
              </p>
              <p v-else>
                {{ ["Загружается...", "Обрабатывается...", "Сохраняется..."][post.status] }}
              </p>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <div class="fixed-bottom q-pa-md">
      <div class="row justify-center items-end full-width q-gutter-x-md">
        <q-btn fab icon="camera" color="primary" label="Новый запрос" @click.stop="showDialog = true" />

        <q-dialog v-model="showDialog" persistent>
          <CameraComponent @image-captured="handleImageSaved" />
        </q-dialog>
      </div>
    </div>
  </q-page>
</template>

<script>
import {ref} from "vue";
import CameraComponent from "components/CameraComponent.vue";

export default {
  components: {CameraComponent},
}
</script>

<script setup>
import {onBeforeUnmount} from "vue";

let posts = [
  // {id: 1, date: Date.now(), photo: ref(null), checkup_result: "Текст описания", status: 0},
  // {id: 2, date: Date.now(), photo: ref(null), checkup_result: null, status: 0},
  // {id: 3, date: Date.now(), photo: ref(null), checkup_result: null, status: 1},
  // {id: 4, date: Date.now(), photo: ref(null), checkup_result: null, status: 2},
]

const showDialog = ref(false);
const capturedImagePreview = ref(null);
const capturedFileName = ref('');

function handleImageSaved(file) {
  capturedFileName.value = file.name;

  if (capturedImagePreview.value) {
    URL.revokeObjectURL(capturedImagePreview.value);
  }
  capturedImagePreview.value = URL.createObjectURL(file);

  posts.push({
    id: posts.length + 1,
    date: Date.now(),
    image: capturedImagePreview.value,
    checkup_result: null,
    status: 0
  });

  showDialog.value = false;
}

onBeforeUnmount(() => {
  if (capturedImagePreview.value) {
    URL.revokeObjectURL(capturedImagePreview.value);
  }
});
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 300px
</style>
