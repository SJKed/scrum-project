<template>
  <div class="wrapper">
    <Header />
    <main>
      <section>
        <!-- 9 articles for  -->
        <Poster v-for="index of 9" :key="index" :char="posters[index - 1]" />
      </section>
      <section>
        <!-- 2 articles for the big two articles with the white background -->
        <BigPoster
          v-for="index of 2"
          :key="index"
          :char="posters[posters.length - index]"
        />
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
import posters from "../assets/posters.json";
import { Poster, BigPoster, Header, Footer } from "../components";

export default {
  components: { Poster, BigPoster, Header, Footer },
  data() {
    return {
      posters: posters,
    };
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
