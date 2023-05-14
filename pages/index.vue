<template>
    <h1>Index</h1>
    <q-btn color="primary" label="Primary" />
    <QBtn color="secondary" label="Secondary" />
    <LazyQBtn color="amber" glossy label="Amber" />
     
</template>
<script setup>
 import { useStore } from '~/store/states';

const menuStore = useStore();

// const changeLocal = ()=>{
//     menuStore.someState=inputLocal.value;
// }
</script>