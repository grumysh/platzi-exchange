<template lang="pug">
  main(id="app" class="bg-blue-400")
    HelloWorld(msg="Welcome to Your Vue.js App")
</template>

<script>
// Se importa el componente Hello Word
import HelloWorld from "./components/HelloWorld.vue";

export default {
  // Establece un nombre para el componente
  name: "App",
  // Se declaran los componentes que se van a usar.
  components: {
    HelloWorld
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
