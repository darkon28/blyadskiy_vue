<template>
  <q-page class="q-pa-md">
    <div class="text-h4 q-mb-md">Настройки</div>

    <div class="row q-gutter-md">
      <q-card
        v-for="setting in settingsData"
        :key="setting.id"
        class="col-12 col-sm-5 q-transition--fade"
      >
        <q-card-section>
          <div class="text-h6">{{ setting.title }}</div>
          <div class="text-subtitle2">{{ setting.description }}</div>
        </q-card-section>

        <q-separator />

        <q-card-actions align="right">
          <q-btn flat color="primary" label="Change" />
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  setup () {
    const settingsData = [
      { id: 1, title: 'Theme', description: 'Switch between Light and Dark mode.' },
      { id: 2, title: 'Notifications', description: 'Manage your alert preferences.' },
      { id: 3, title: 'Data Privacy', description: 'Review and update your data policy.' },
    ]

    return {
      settingsData
    }
  }
}
</script>
