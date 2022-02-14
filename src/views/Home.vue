<template>
  <div class="wrapper">
    <main>
      <transition-group appear tag="section" name="posters">
        <!-- 9 articles for  -->
        <Poster v-for="poster of posters" :key="poster.id" :char="poster" />
      </transition-group>
      <section>
        <!-- 2 articles for the big two articles with the white background -->
        <BigPoster
          v-for="(poster, index) of bigPosters"
          :key="index"
          :char="poster"
        />
      </section>
    </main>
  </div>
</template>

<script>
import { Poster, BigPoster } from "../components";
import { mapGetters } from "vuex";
export default {
  components: { Poster, BigPoster },
  computed: {
    ...mapGetters(["posters", "bigPosters"]),
  },
};
</script>

<style scoped lang="scss">
main {
  background: black;
  section {
    padding: 1rem 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
}

.posters-enter,
.posters-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
.poster-enter-active,
.posters-leave-active {
  transition: all 3s ease;
}

@media only screen and (min-width: 600px) {
  main {
    max-width: 950px;
    margin: auto;
  }
}
</style>
