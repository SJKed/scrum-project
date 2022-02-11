<template>
  <article class="poster" :class="{large}">
    <img :src="require('../assets/Posters/' + poster.img)" alt="" height="500" />
    <div class="poster-info">
      <h1>{{ poster.name }}</h1>
      <p> {{poster.description}} </p>
      <p> <b>Price: {{ poster.price }} </b></p>
       <button>oh, take my money!</button>
    </div>
  </article>
</template>
<script>
export default {
  props: {
    large: Boolean
  },
computed: {
  poster() {
  return this.$store.state.posters.find(poster => poster.id == this.$route.params.id)
  }
}
}
</script>

<style>
.poster{
  color: white;
  width: 550px;
  height: 550px;
  margin-left: 20rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-content: center;
}
.product.large{
  width: 450px;
  height: 680px;
}
.poster-info {
  width: 13rem;
  height: 15rem;
  margin: 1.5rem;
  color: white;
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
}
</style>
