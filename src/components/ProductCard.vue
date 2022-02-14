<template>
  <transition-group
    tag="div"
    name="cards"
    @before-enter="beforeEnter"
    @enter="enter"
    appear
    class="wrapper"
  >
    <div
      class="ProductCard"
      v-for="(poster, index) of randomPosters"
      :key="poster.id"
      :char="poster"
      :data-index="index"
    >
      <img
        class="ProductCard__img"
        :src="require('../assets/Posters/' + poster.img)"
        alt=""
        height="300"
      />
      <div class="ProductCard_content">
        <div class="left">
          <div class="ProductCard_name">
            <h1>{{ poster.name }}</h1>
          </div>
          <div class="ProductCard_price">
            <p>${{ poster.price }}</p>
          </div>
        </div>
        <div class="right">
          <div class="ProductCard_buy">
            <button>Add</button>
          </div>
        </div>
      </div>
    </div>
  </transition-group>
</template>

<script>
import { mapGetters } from "vuex";
import gsap from "gsap";
export default {
  methods: {
    beforeEnter(el) {
      // el.style.transform = "translateY(50px)";
      el.style.opacity = 0;
    },
    enter(el, done) {
      gsap.to(el, {
        duration: 2,
        y: 0,
        opacity: 1,
        delay: el.dataset.index * 0.5,
        onComplete: done,
      });
    },
  },
  computed: {
    ...mapGetters(["posters"]),
    randomPosters() {
      let randomPosters = [];
      let posters = [];
      for (let i = 0; i < this.posters.length; i++) {
        posters.push(this.posters[i]);
      }
      for (let i = 0; i < 3; i++) {
        let randomIndex = Math.floor(Math.random() * posters.length);
        randomPosters.push(posters[randomIndex]);
        posters.splice(randomIndex, 1);
      }
      return randomPosters;
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: row;
  align-self: center;
  overflow: scroll;
}
.ProductCard {
  background: #e3e3d8;
  font-family: sans-serif;
  width: 300px;
  height: 400px;
  margin: auto;
  border-radius: 10px;
  box-shadow: 0;
  transform: scale(0.95);
  transition: box-shadow 0.5s, transform 0.5s;
  &:hover {
    transform: scale(1);
    box-shadow: 5px 20px 30px rgba(0, 0, 0, 0.2);
  }

  .ProductCard__img {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .ProductCard_content {
    .left {
      padding: 20px;
      float: left;
      max-width: 50%;
      .ProductCard_name {
        h1 {
          font-size: 1rem;
          font-weight: bold;
          margin: 0;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
    }
    .right {
      float: right;
      padding: 20px;

      .ProductCard_buy {
        button {
          background: #e83f57;
          border-radius: 5px;
          padding: 0.5rem;
          color: white;
          font-weight: bold;
          margin-bottom: auto;
          border: none;
          transition: 300ms;
          &:hover {
            background: #a1243b;
          }
        }
      }
    }
  }
}

/* .cards-enter,
.cards-leave-to {
  opacity: 0;
  transform: translateY(50px);
}
.cards-enter-active,
.cards-leave-active {
  transition: all 2s ease;
} */

@media only screen and (min-width: 600px) {
  .wrapper {
    overflow: hidden;
  }
}
</style>
