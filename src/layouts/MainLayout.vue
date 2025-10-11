<template>
  <q-layout view="lHh Lpr lpr">

    <!-- Header для вех страниц-->
    <q-header elevated>
      <q-toolbar>

        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Header fro every page
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <!-- Меню выбора -->
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>

        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />

      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'analysis result',
    caption: 'Analysis result',
    icon: 'monitor_heart',
    link: '/',
  },
  {
    title: 'Personalization',
    caption: '',
    icon: 'favorite',
    link: 'personalization'
  },
  {
    title: 'Settings',
    caption: '',
    icon: 'favorite',
    link: 'settings'
  }
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
