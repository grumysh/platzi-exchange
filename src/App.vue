<template lang="pug">
  main
    px-Header
    router-view(class="container px-5 sm:px-20 py-20 flex justify-center")
</template>

<script>
// Se importa el componente Hello Word
import PxHeader from "@/components/PxHeader.vue"

export default {
  // Establece un nombre para el componente
  name: "App",
  // Se declaran los componentes que se van a usar.
  components: {
    PxHeader
  }
};
</script>

<style></style>
