// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
      '@pinia/nuxt',
      '@pinia-plugin-persistedstate/nuxt',
      'nuxt-quasar-ui',
    ],
 
    pinia: {
      autoImports: [
        // automatically imports `defineStore`
        'defineStore', // import { defineStore } from 'pinia'
        ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
      ],
    },
    piniaPersistedstate: {
      cookieOptions: {
        sameSite: 'strict',
      },
      storage: 'localStorage'
    },
    css: [
        '@/assets/scss/main.scss'
    ],
   
  app: {
    rootId: 'ecommerceApp',
    buildAssetsDir: 'ecomSrc'
  },
  // image: { //Esto permite abreviar el llamado a las rutas de imagenes
  //   dir: 'assets/images',
  //   domains: ['https://url.com'],
  //   alias: {
  //     tiendaDev: 'http://url.com' //url alias 
  //   },
  // pwa: { //Config pwa
  //   manifest: {
  //     name: 'Nombre app pwa',
  //     short_name : 'nombre app pwa',        
  //     lang: 'es',
  //     background_color : '#629DC6',
  //     theme_color : '#000000',
  //     //status_bar: '#629DC6'
  //   },
  //   meta: { 
  //     //appleStatusBarStyle: 'black-translucent',
    // },
  //   icons: [
  //     {
  //       src: 'icons/icon-72x72.png',
  //       sizes: '72x72',
  //       types: 'image/png',
  //       purpose: 'any'
  //     },
  //     {
  //       src: 'icons/icon-96x96.png',
  //       sizes: '96x96',
  //       types: 'image/png',
  //       purpose: 'any'
  //     },
  //     {
  //       src: 'icons/icon-128x128.png',
  //       sizes: '128x128',
  //       types: 'image/png',
  //       purpose: 'any'
  //     },
  //     {
  //       src: 'icons/icon-144x144.png',
  //       sizes: '144x144',
  //       types: 'image/png',
  //       purpose: 'any'
  //     },
  //     {
  //       src: 'icons/icon-152x152.png',
  //       sizes: '152x152',
  //       types: 'image/png',
  //       purpose: 'any'
  //     },
  //     {
  //       src: 'icons/icon-192x192.png',
  //       sizes: '192x192',
  //       types: 'image/png',
  //       purpose: 'any'
  //     },
  //     {
  //       src: 'icons/icon-384x384.png',
  //       sizes: '384x384',
  //       types: 'image/png',
  //       purpose: 'any'
  //     },
  //     {
  //       src: 'icons/icon-512x512.png',
  //       sizes: '512x512',
  //       types: 'image/png',
  //       purpose: 'any'
  //     },

  //   ],
  // },

})
