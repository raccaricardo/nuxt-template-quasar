<template>
  <q-layout view="hHh lpr fff">
    <Header></Header>    
    <q-page-container>
      <q-page class="q-pa-md">
      <slot> </slot>
        
      </q-page>
    </q-page-container>
    <Footer></Footer>
    </q-layout>
 

<!-- 
    <main class="container-fluid pb-5 mb-5">

        
    </main>
<h5 class="text-center mt-5 pt-5">Footer</h5> -->
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';



    useHead({
//          link: [
//              {
//                 // rel: "stylesheet",
//                 // href: "https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.css",
        
//             },
            
//         //     {
//         //         rel: "stylesheet",
//         //         href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css",
//         //         integrity: "sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD",
//         //         crossorigin: "anonymous",
//         //     },
//          ],
//          
//          script: [
//         //     {
//         //         src:  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js",
//          
//             // {
//             //     src:  "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js",
//             // },
//             // {
//             //     src:  "https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js",
//             // },
        
//             // {
//             //     src:"localforage.js",
//             //     body:true,
//             // },
//          ],
    });

</script>