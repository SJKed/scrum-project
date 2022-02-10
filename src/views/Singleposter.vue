<template>
  <h1>{{poster}}</h1>
</template>

<script>
export default {
  data() { return {
    id: 1
  }
  },
computed: {
  poster() {
  return this.$store.state.posters.find(poster => poster.id == this.id)
  }
}
}
</script>

<style>

</style>
