<template>
  <div class="wrapper">
    <article>
      <img
        :src="require('../assets/Posters/' + poster.img)"
        alt=""
        height="300"
        width="300"
      />
      <div class="poster-info">
        <h1>{{ poster.name }}</h1>
        <p>{{ poster.description }}</p>
        <p>
          <b>Price: {{ poster.price }} </b>
        </p>
        <button>oh, take my money!</button>
      </div>
    </article>
    <ProductCard />
  </div>
</template>
<script>
import ProductCard from "../components/ProductCard.vue";
export default {
  components: { ProductCard },
  props: {
    large: Boolean,
  },
  computed: {
    poster() {
      return this.$store.state.posters.find(
        (poster) => poster.id == this.$route.params.id
      );
    },
  },
  mounted() {
    document.querySelector("article").scrollIntoView();
  },
};
</script>

<style scoped lang="scss">
article {
  margin: 1rem auto;
  padding: 1rem;
  background: lightgray;
  border-radius: 8px;
  box-shadow: 0px 3px 15px 1px red;
  img {
    margin: auto;
  }
  .poster-info {
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 1.25rem;
      margin: 1rem;
    }
    button {
      font-size: 1rem;
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
}

@media only screen and (min-width: 600px) {
  article {
    display: flex;
    max-width: 600px;
  }
}
</style>
