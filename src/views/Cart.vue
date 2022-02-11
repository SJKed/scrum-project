<template>
  <div class="cart">
    <div class="poster">
      <h1 class="header">Poster Shop</h1>
      <img class="ninja" src="../assets/Icons/ninjahead.svg" alt="" />
    </div>

    <div class="container">
      <div class="container-details">
        <div v-for="poster in posters" :key="poster.id">
          <img
            class="poster-image"
            :src="require(`@/assets/Posters/${poster.img}.png`)"
            alt=""
          />
          <h1>{{ poster.name }}</h1>
          <p class="description">{{ poster.description }}</p>
          <button class="button">Ok take my money!</button>
        </div>
      </div>
    </div>

    <div class="nav-main">
      <div class="nav">
        <h1>Nav</h1>
        <p>Products</p>
        <p>About us</p>
        <p>Contact</p>
      </div>

      <div class="adress">
        <h1>Address</h1>
        <p>Andersvägen</p>
        <p>0877777777</p>
      </div>

      <div class="social">
        <h1>Social media</h1>
        <div class="icon">
          <img src="@/assets/Icons/logo-facebook.svg" alt="" />
          <img src="@/assets/Icons/logo-instagram.svg" alt="" />
          <img src="@/assets/Icons/logo-linkedin.svg" alt="" />
          <img src="@/assets/Icons/logo-twitter.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    posters() {
      return this.$store.getters.getPosters;
    },
  },
};
</script>

<style lang="scss" scoped>
.cart {
  width: 1500px;
  height: 3840px;
  align-content: center;
  align-items: center;
  padding-left: 1150px;
}
.container {
  background-color: black;
  padding: 30px;
  color: white;
  align-content: center;
  align-items: center;
}
.container-details {
  border: white;
  display: grid;
  row-gap: 100px;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: left;
}
.poster {
  background-color: #3de07e;
  height: 500px;
  margin-top: 40px;
  text-align: center;
  align-items: center;
  padding-top: 200px;
  font-size: 40px;
  font-weight: bold;
}
.discription {
  font-size: 20px;

}
.ninja {
  padding-top: 150px;
}
.poster-image {
  width: 400px;
  height: 500px;
  align-items: center;
}
.button {
  background-color: #e83f57;
  color: white;
}
.nav-main {
  background-color: grey;
  color: white;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
.nav-main h1 {
  font-size: 40px;
  font-weight: bold;
}
.nav-main p {
  font-size: 20px;
}
</style>

    
   