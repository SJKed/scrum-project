<template>
  <div class="wrapper">
    <Header />
    <main>
      <section>
        <!-- 9 articles for  -->
        <Poster
          v-for="(poster, index) of posters"
          :key="index"
          :char="poster"
        />
      </section>
      <section>
        <!-- 2 articles for the big two articles with the white background -->
        <BigPoster
          v-for="(poster, index) of bigPosters"
          :key="index"
          :char="poster"
        />
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
import { Poster, BigPoster, Header, Footer } from "../components";
import { mapGetters } from "vuex";
export default {
  components: { Poster, BigPoster, Header, Footer },
  computed: {
    ...mapGetters(["posters", "bigPosters"]),
  },
};
</script>

<style scoped lang="scss">
.wrapper {
  text-align: center;
}

main {
  background: black;
  section {
    padding: 1rem 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
}

@media only screen and (min-width: 600px) {
  main {
    display: grid;
    place-items: center;
    section:first-of-type {
      max-width: 900px;
    }
  }
}
</style>
