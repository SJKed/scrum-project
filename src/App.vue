<template>
  <div id="app">
    <Header />
    <router-view v-slot="{ Component, route }">
      <transition name="fade" appear>
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>
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

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
.fade-enter-active,
.fade-leave-active {
  transition: all 3s ease;
}
</style>
