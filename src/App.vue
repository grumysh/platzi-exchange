<template lang="pug">
  main
    px-Header
    px-assets-table
</template>

<script>
// Se importa el componente Hello Word
import PxHeader from "@/components/PxHeader.vue"
import PxAssetsTable from "@/components/PxAssetsTable.vue"

export default {
  // Establece un nombre para el componente
  name: "App",
  // Se declaran los componentes que se van a usar.
  components: {
    PxHeader,
    PxAssetsTable
  }
}
</script>

<style>
</style>
