<template>
  <article>
    <img :src="require('../assets/Posters/' + char.img)" alt="" height="300" />
    <div>
      <h3>{{ char.name }}</h3>
      <p>
        {{ char.description }}
      </p>
      <button>oh, take my money!</button>
    </div>
  </article>
</template>

<script>
export default {
  props: ["char"],
};
</script>

<style scoped lang="scss">
article {
  text-align: center;
  max-width: 300px;
  color: white;
  padding: 1rem;
  /* margin: 1rem; */
  img {
    width: 100%;
    object-fit: cover;
  }
  div {
    text-align: left;
    h3 {
      margin: 1rem 0 0.5rem 0;
    }
    button {
      color: white;
      font-weight: bold;
      margin-top: 1rem;
      padding: 0.5rem;
      background: #e83f57;
      border-radius: 6px;
    }
  }
}
</style>
