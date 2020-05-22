<template lang="pug">
  div
    table
      thead
        tr(class="bg-gray-100 border-b-2 border-gray-400")
          th
          th
            span Ranking
          th Nombre
          th Precio
          th Cap. de Mercado
          th Variación 24hs
          td(class="hidden sm:block")
      tbody
        tr(v-for="asset in assets" class="border-b border-gray-200 hover:bg-gray-100 hover:bg-orange-100")
          td
            img(class="w-10 h-10"
              v-bind:src="`https://static.coincap.io/assets/icons/${asset.symbol.toLowerCase()}@2x.png`" 
              :alt="asset.name"
              )
          td
            b # {{asset.rank}}
          td
            router-link( 
              class="hover:underline text-green-600" 
              :to="{ name:'coin-detail', params:{id:asset.id}}"
              ) {{asset.name}}
            small( class="ml-1 text-gray-500") {{asset.symbol}}
          td {{asset.priceUsd | dollar}}
          td {{asset.marketCapUsd | dollar}}
          td(
            :class="asset.changePercent24Hr.includes('-') ? 'text-red-600':'text-green-600'"
          ) {{asset.changePercent24Hr | percent}}
          td(class="hidden sm:block") 
            px-button( @custom-click="gotToCoin(asset.id)")
              span  Detail
</template>
<script>
import PxButton from '@/components/PxButton'
export default {
  name: 'PxAssetsTable',
  components: { PxButton },
  props: {
    assets: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    gotToCoin(id) {
      this.$router.push({ name: 'coin-detail', params: { id: id } })
    }
  }
}
</script>

<style scoped>
.up::before {
  content: '👆';
}

.down::before {
  content: '👇';
}

td {
  padding: 20px 0px;
  font-size: 0.6rem;
  text-align: center;
}

th {
  padding: 5px;
  font-size: 0.6rem;
}

@media (min-width: 640px) {
  td,
  th {
    padding: 20px;
    font-size: 1rem;
  }

  th {
    padding: 12px;
  }
}
</style>
