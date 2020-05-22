<template lang="pug">
  main
    px-Header( :links="links")
    router-view(class="container px-5 sm:px-20 py-20 flex justify-center")
</template>

<script>
// Se importa el componente Hello Word
import PxHeader from '@/components/PxHeader.vue'

export default {
  // Establece un nombre para el componente
  name: 'App',
  // Se declaran los componentes que se van a usar.
  components: {
    PxHeader
  },
  data() {
    return {
      links: [
        {
          title: 'BTC',
          to: { name: 'coin-detail', params: { id: 'bitcoin' } }
        },
        {
          title: 'ETH',
          to: { name: 'coin-detail', params: { id: 'ethereum' } }
        },
        {
          title: 'XRP',
          to: { name: 'coin-detail', params: { id: 'ripple' } }
        }
      ]
    }
  }
}
</script>

<style></style>
