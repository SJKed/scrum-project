<template>
  <footer>
    <section>
      <h3>NAV</h3>
      <p>Products</p>
      <p>About Us</p>
      <p>Contact</p>
    </section>
    <section>
      <h3>Address</h3>
      <p>Plinkeplonkvägen 32</p>
      <p>888 81 Klonkberga</p>
    </section>
    <section>
      <h3>Social Media</h3>
      <figure>
        <SocialMedia type="facebook" />
        <SocialMedia type="instagram" />
        <SocialMedia type="linkedin" />
        <SocialMedia type="twitter" />
      </figure>
    </section>
  </footer>
</template>

<script>
import SocialMedia from "./SocialMedia.vue";
export default {
  components: { SocialMedia },
};
</script>

<style lang="scss" scoped>
footer {
  padding: 1rem 0.5rem;
  color: #ffffff;
  background: #333333;
  display: flex;
  justify-content: space-around;
  section {
    h3 {
      padding-bottom: 1rem;
    }
    p {
      padding-bottom: 0.5rem;
    }
  }
}

@media only screen and (min-width: 600px) {
  figure {
    display: flex;
    * {
      padding: 0 0.5rem;
    }
  }
}
</style>
