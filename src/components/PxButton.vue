<template>
  <button
    @click="butttonClick"
    class="bg-transparent hover:bg-green-500 text-green-700font-semibold hover:text-white py-2 px-2borderborder-green-500 hover:border-transparent rounded"
  >
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: 'PxButton',
  methods: {
    butttonClick() {
      this.$emit('custom-click')
    }
  }
}
</script>