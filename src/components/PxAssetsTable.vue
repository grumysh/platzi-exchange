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
            img(v-bind:src="`https://static.coincap.io/assets/icons/${asset.symbol.toLowerCase()}@2x.png`" :alt="asset.name")
          td
            b # {{asset.rank}}
          td {{asset.name}}
          td {{asset.priceUsd | dollar}}
          td {{asset.marketCapUsd | dollar}}
          td {{asset.changePercent24Hr | dollar}}
          td(class="hidden sm:block")
</template>
<script>
export default {
  name: 'PxAssetsTable',
  props: {
    assets: {
      type: Array,
      default: () => []
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
