<template>
  <article class="poster" :class="{large}">
    <div class="poster-cover">
      <h2>{{ poster.title }}</h2>
    </div>
  </article>
</template>
<script>
import posters from "../assets/data.js"
export default {
  data() {  return {
      productData: [...posters],
      productId: this.$route.params.id,
    }
  },
  props: {
    large: Boolean
  },
computed: {
  poster() {
  return this.$store.state.posters.find(poster => poster.id == this.id)
  }
}
}
</script>

<style>
.product{
  color: black;
  width: 250px;
  height: 350px;
  display: flex;
  flex-direction: column-reverse;
}
.product.large{
  width: 450px;
  height: 680px;
}
.poster-cover {
  width: 13rem;
  height: 15rem;
  background-color: aquamarine;
  margin: 1rem;
}
</style>
