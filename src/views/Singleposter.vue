<template>
  <article >
    <div class="poster">
    <img :src="require('../assets/Posters/' + poster.img)" alt="" height="550" />
    <div class="poster-info">
      <h1>{{ poster.name }}</h1>
      <p> {{poster.description}} </p>
      <p> <b>Price: {{ poster.price }} </b></p>
       <button>oh, take my money!</button> 
       <button>Save for later</button>
    </div>
    </div>
    <productCard/>
  </article>
</template>
<script>
import productCard from "../components/ProductCard.vue"
export default {
  components: {productCard},
computed: {
  poster() {
  return this.$store.state.posters.find(poster => poster.id == this.$route.params.id)
  }
}
}
</script>

<style scoped>
.poster{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 2;
  align-content: center;
}
img {
  margin-left: 15rem;
}
.poster-info {
  margin: 4rem;
  width: 15rem;
  height: 10rem;
  color: #e3e3d8;
}
h1 {
  font-size: 2rem;
}
p {
  font-size: 1.25rem;
  margin: 1rem;
}
button {
  font-size: 1rem;
  margin: 1rem;
  border-radius: 2%;
  background: #e83f57;
  padding: 0.5rem;
  color: white;
  font-weight: bold;
margin-bottom: auto;
}
</style>
