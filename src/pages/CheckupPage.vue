<template>
  <div>
    <QCard
      v-for="post in posts"
      :key="post.id + post.checkup_result"
      v-bind="post"
    >
      <div>
        <q-icon name="monitor_heart" />
        <q-space />
        <q-icon />

      </div>

    </QCard>
  </div>
</template>

<script>

export default {

}

</script>

<style scoped>

</style>
