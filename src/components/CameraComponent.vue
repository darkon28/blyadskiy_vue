<template>
  <q-card style="width: 400px">
    <q-card-section class="q-pt-lg text-center">
      <q-icon name="photo_camera" size="lg" color="primary" />
      <div class="text-h6 q-mt-md">Сделайте фотографию</div>
    </q-card-section>

    <q-card-section class="q-pb-lg">
      <input
          type="file"
          accept="image/*"
          capture="user"
          @change="handleCapture"
          ref="fileInput"
          style="display: none;"
      />

      <div class="text-center">
        <q-btn
            v-if="!imageUrl"
            label="Открыть камеру"
            color="primary"
            icon="camera"
            @click="triggerFileInput"
            class="q-mt-md"
        />

        <div v-if="imageUrl" class="q-mt-md">
          <q-img
              :src="imageUrl"
              alt="Превью"
              ratio="1"
              style="max-width: 300px; border-radius: 4px;"
              class="shadow-4"
          />
          <q-btn
              label="Повторить"
              flat
              color="negative"
              @click="clearImage"
              class="q-mt-sm"
          />
        </div>
      </div>
    </q-card-section>

    <q-card-actions align="right">
      <q-btn label="Отмена" color="negative" flat v-close-popup />
      <q-btn
          label="Сохранить"
          color="primary"
          :disable="!imageUrl"
          @click="saveAndClose"
      />
    </q-card-actions>
  </q-card>
</template>

<script setup>
import { ref, onBeforeUnmount, defineEmits } from 'vue';

const fileInput = ref(null);
const imageUrl = ref(null);
const fileObject = ref(null);
const emit = defineEmits(['image-captured']);

function triggerFileInput() {
  fileInput.value.click();
}

function handleCapture(event) {
  const file = event.target.files[0];
  if (!file) return;

  if (imageUrl.value) {
    URL.revokeObjectURL(imageUrl.value);
  }

  fileObject.value = file;
  imageUrl.value = URL.createObjectURL(file);

  event.target.value = null;
}

function clearImage() {
  if (imageUrl.value) {
    URL.revokeObjectURL(imageUrl.value);
  }
  imageUrl.value = null;
  fileObject.value = null;
}

function saveAndClose() {
  if (fileObject.value) {
    emit('image-captured', fileObject.value);
  }
}

onBeforeUnmount(() => {
  if (imageUrl.value) {
    URL.revokeObjectURL(imageUrl.value);
  }
});
</script>