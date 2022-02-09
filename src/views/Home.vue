<template>
  <div class="wrapper">
    <header>
      <h1>Poster Shop</h1>
      <!-- Image to be inserted as background image -->
    </header>
    <main>
      <section>
        <!-- 9 articles for  -->
        <article>
          <img
            :src="require('../assets/Posters/' + image1)"
            alt=""
            height="300"
          />
          <div>
            <h3>Profession</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Explicabo, itaque totam. Impedit fuga laboriosam distinctio
              facere, quisquam veritatis repudiandae quam, provident eaque amet
              ex sit molestias officiis voluptates soluta reiciendis illo atque
              porro.
            </p>
            <button>oh, take my money!</button>
          </div>
        </article>
        <article>
          <img
            :src="require('../assets/Posters/' + image2)"
            alt=""
            height="300"
          />
          <div>
            <h3>Profession</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Explicabo, itaque totam. Impedit fuga laboriosam distinctio
              facere, quisquam veritatis repudiandae quam, provident eaque amet
              ex sit molestias officiis voluptates soluta reiciendis illo atque
              porro.
            </p>
            <button>oh, take my money!</button>
          </div>
        </article>
        <article>
          <img
            :src="require('../assets/Posters/' + image3)"
            alt=""
            height="300"
          />
          <div>
            <h3>Profession</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Explicabo, itaque totam. Impedit fuga laboriosam distinctio
              facere, quisquam veritatis repudiandae quam, provident eaque amet
              ex sit molestias officiis voluptates soluta reiciendis illo atque
              porro.
            </p>
            <button>oh, take my money!</button>
          </div>
        </article>
        <article>
          <img
            :src="require('../assets/Posters/' + image4)"
            alt=""
            height="300"
          />
          <div>
            <h3>Profession</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Explicabo, itaque totam. Impedit fuga laboriosam distinctio
              facere, quisquam veritatis repudiandae quam, provident eaque amet
              ex sit molestias officiis voluptates soluta reiciendis illo atque
              porro.
            </p>
            <button>oh, take my money!</button>
          </div>
        </article>
        <article>
          <img src="../assets/Posters/char-1.png" alt="" height="300" />
          <div>
            <h3>Profession</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Explicabo, itaque totam. Impedit fuga laboriosam distinctio
              facere, quisquam veritatis repudiandae quam, provident eaque amet
              ex sit molestias officiis voluptates soluta reiciendis illo atque
              porro.
            </p>
            <button>oh, take my money!</button>
          </div>
        </article>
        <article>
          <img src="../assets/Posters/char-1.png" alt="" height="300" />
          <div>
            <h3>Profession</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Explicabo, itaque totam. Impedit fuga laboriosam distinctio
              facere, quisquam veritatis repudiandae quam, provident eaque amet
              ex sit molestias officiis voluptates soluta reiciendis illo atque
              porro.
            </p>
            <button>oh, take my money!</button>
          </div>
        </article>
        <article>
          <img src="../assets/Posters/char-1.png" alt="" height="300" />
          <div>
            <h3>Profession</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Explicabo, itaque totam. Impedit fuga laboriosam distinctio
              facere, quisquam veritatis repudiandae quam, provident eaque amet
              ex sit molestias officiis voluptates soluta reiciendis illo atque
              porro.
            </p>
            <button>oh, take my money!</button>
          </div>
        </article>
      </section>
      <section>
        <!-- 2 articles for the big two articles with the white background -->
        <article></article>
        <article></article>
      </section>
    </main>
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
  </div>
</template>

<script>
import SocialMedia from "../assets/Icons/SocialMedia.vue";
export default {
  components: { SocialMedia },
  data() {
    return {
      image1: "char-1.png",
      image2: "char-2.png",
      image3: "char-3.png",
      image4: "char-4.png",
    };
  },
};
</script>

<style scoped lang="scss">
.wrapper {
  text-align: center;
}
header {
  background: #3de07e;
  background-image: url("../assets/Icons/ninjahead.svg");
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: 100px;
  height: 30vh;
  overflow: hidden;
  display: grid;
  place-items: center;
}
main {
  background: black;
  section:first-of-type {
    padding: 1rem 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
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
  }
}

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
  main {
    display: grid;
    place-items: center;
    section:first-of-type {
      max-width: 900px;
    }
  }
}
</style>
