const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'AnalysisPage', // This name matches the 'to' in the menu
        component: () => import('pages/AnalysisPage.vue')
      },
      {
        path: 'personalization',
        name: 'PersonalizationPage',
        component: () => import('pages/PersonalizationPage.vue')
      },
      {
        path: 'settings',
        name: 'SettingsPage',
        component: () => import('pages/SettingsPage.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it if you don't need that feature
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
