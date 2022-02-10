<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>
<script>
import { Header, Footer } from "./components";
export default {
  components: { Header, Footer },
  mounted() {
    this.$store.dispatch("fetchData");
  },
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  text-align: center;
  background: black;
}
</style>
