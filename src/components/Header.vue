<template>
  <header>
    <transition name="fade">
      <div class="menu" v-show="showMenu">
        <div>
          <router-link to="/">Home</router-link>
          <router-link to="/cart">Cart</router-link>
        </div>
      </div>
    </transition>
    <nav>
      <svg
        class="menu-icon"
        :class="{ close: showMenu }"
        @click="showMenu = !showMenu"
        width="28"
        height="23"
        viewBox="0 0 28 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect class="rect1" width="28" height="2" rx="1" fill="black" />
        <rect class="rect2" y="7" width="28" height="2" rx="1" fill="black" />
        <rect class="rect3" y="14" width="28" height="2" rx="1" fill="black" />
        <rect class="rect4" y="21" width="28" height="2" rx="1" fill="black" />
      </svg>

      <div>
        <input
          type="text"
          placeholder="Search"
          v-model="search"
          @keydown="keydown"
        />
        <img src="../assets/Icons/searchicon.svg" alt="" @click="setSearch" />
      </div>
    </nav>
    <h1>Poster Shop</h1>
  </header>
</template>
<script>
export default {
  data() {
    return {
      search: "",
      showMenu: false,
    };
  },
  methods: {
    keydown(e) {
      if (e.code === "Enter" || this.search === "") {
        this.setSearch();
      }
    },
    setSearch() {
      this.$store.dispatch("setSearch", this.search);
    },
  },
};
</script>

<style scoped lang="scss">
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateX(0);
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease-in-out;
}
.rect1,
.rect2,
.rect3,
.rect4 {
  transition: all ease-in-out 0.5s;
}

.close {
  .rect2,
  .rect3 {
    opacity: 0;
  }
  .rect1 {
    transform: rotate(45deg);
  }
  .rect4 {
    transform: rotate(-45deg);
    transform-origin: bottom left;
  }
}

header {
  position: relative;
  background: #3de07e;
  background-image: url("../assets/Icons/ninjahead.svg");
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: 100px;
  height: 30vh;
  overflow: hidden;
  /* display: grid;
  place-items: center; */
  h1 {
    width: 100%;
    font-size: 2.6rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .menu-icon {
    cursor: pointer;
  }
  .menu {
    position: absolute;
    top: 3rem;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    display: grid;
    place-items: center;
    z-index: 10;
    div {
      display: flex;
      flex-direction: column;
      text-align: left;
      a {
        letter-spacing: 0.3rem;
        font-weight: bold;
        color: #ffffff;
        text-decoration: none;
        font-size: 1.6rem;
        padding: 0.3rem;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  nav {
    display: flex;
    justify-content: space-between;
    position: -webkit-sticky;
    position: sticky;
    top: 1rem;
    width: 90%;
    margin: 1rem auto;

    div {
      display: flex;
      input {
        margin-right: 0.5rem;
      }
    }
  }
}
</style>
