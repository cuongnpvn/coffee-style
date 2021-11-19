<template>
  <Header v-on:toggleModal="toggleModal" />
  <transition name="checkout">
    <CheckModal v-if="showModal" v-on:toggleModal="toggleModal" />
  </transition>
  <img src="@/assets/bg-fixed.jpg" alt="" class="bg-fixed" />
  <div class="home">
    <div class="hero">
      <img src="@/assets/bg-hero.jpg" alt="" class="bg-hero" />
      <div class="content-wrap">
        <h5>Best place to buy design</h5>
        <h1>Coffee Mugs</h1>
        <p>
          The most versatile furniture system ever created. Design to fit your
          life, made to move and grow.
        </p>
        <router-link :to="{ name: 'Product' }" class="explore"
          >Explore our products</router-link
        >
      </div>
    </div>
    <div class="story">
      <div class="content-wrap">
        <h2>
          Even the all-powerful Pointing has no control about the blind texts.
        </h2>
        <p>
          It is a paradisematic country, in which roasted parts of sentences fly
          into your mouth. Even the all-powerful Pointing has no control about
          the blind texts it is an almost unorthographic life One day however a
          small line of blind text by the name of Lorem Ipsum decided to leave
          for the far World of Grammar.
        </p>
        <router-link :to="{ name: 'About' }" class="more"
          >Read the full story</router-link
        >
      </div>
    </div>
    <div class="featured">
      <div class="title">
        <div class="hline"></div>
        <span>Featured Mugs </span>
        <div class="hline"></div>
      </div>
      <div class="wrapper">
        <div
          v-for="(item, index) in getFeaturedProducts"
          :key="index"
          class="featured-item"
        >
          <div class="img-wrap">
            <img :src="item.image" alt="" />
            <div class="explore-effect"></div>
            <div @click="toProduct(item.id)" class="explore-product">
              Explore More
            </div>
          </div>
          <h3>{{ item.name }}</h3>
          <h4>$ {{ item.price }} USD</h4>
        </div>
      </div>
    </div>
    <div class="more-pros">
      <div class="title">
        <div class="hline"></div>
        <span>More Product</span>
        <div class="hline"></div>
      </div>
      <div class="wrapper">
        <div
          v-for="(item, index) in getProducts"
          :key="index"
          class="more-item"
        >
          <div class="img-wrap">
            <img :src="item.image" alt="" />
            <div class="explore-effect"></div>
            <div @click="toProduct(item.id)" class="explore-product">
              Explore More
            </div>
          </div>
          <h3>{{ item.name }}</h3>
          <h4>$ {{ item.price }} USD</h4>
        </div>
      </div>
    </div>
    <div class="magazine">
      <div class="title">
        <div class="hline"></div>
        <span>Buy 2 mugs and get a coffee magazine free</span>
        <div class="hline"></div>
      </div>
      <div class="wrapper">
        <div class="img-wrap">
          <div class="left">
            <img src="@/assets/magazine1.jpg" alt="" />
          </div>
          <div class="right">
            <img src="@/assets/magazine2.jpg" alt="" />
            <img src="@/assets/magazine3.jpg" alt="" />
          </div>
        </div>
        <div class="content">
          <span>Premium offer</span>
          <h2>Get our Coffee Magazine</h2>
          <p>
            The most versatile furniture system ever created. <br />
            Designed to fit your life
          </p>
          <router-link :to="{ name: 'Product' }" class="start-btn"
            >Start Shopping</router-link
          >
        </div>
      </div>
    </div>
    <div class="blog">
      <div class="title">
        <div class="hline"></div>
        <span>Behind the mugs, lifestyle stories</span>
        <div class="hline"></div>
      </div>
      <div class="wrapper">
        <div v-for="(item, index) in getBlogs" :key="index" class="blog-item">
          <div class="img-wrap">
            <img :src="item.image" alt="" />
            <div class="explore-effect"></div>
            <router-link
              :to="{ name: 'BlogDetail', params: { id: item.id } }"
              class="explore-product"
            >
              Read Full Story
            </router-link>
          </div>
          <h3 class="name">
            {{ item.name }}
          </h3>
          <p class="desc">
            {{ item.desc }}
          </p>
          <span class="date">{{ item.date }}</span>
        </div>
      </div>
    </div>
  </div>
  <Subcribe />
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Subcribe from "@/components/Subcribe.vue";
import CheckModal from "@/components/CheckModal.vue";

export default {
  name: "Home",
  components: {
    Header,
    Footer,
    Subcribe,
    CheckModal,
  },
  data() {
    return {
      products: this.$store.state.products,
      blogs: this.$store.state.blogs,
      showModal: null,
    };
  },
  methods: {
    toProduct(id) {
      this.$router.push({ name: "ProductDetail", params: { id: id } });
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
  },
  computed: {
    getProducts() {
      return this.products.slice(0, 9);
    },
    getBlogs() {
      return this.blogs.slice(0, 3);
    },
    getFeaturedProducts() {
      return this.products.slice(-2);
    },
  },
};
</script>

<style lang="scss" scoped>
$primary-font: "Karla", sans-serif;
$font-color: rgba(
  $color: #000,
  $alpha: 0.7,
);
$title-color: #000;
$primary-color: #733906;

.bg-fixed {
  width: 100%;
  height: 100%;
  position: fixed;
  object-fit: cover;
  z-index: -101;
}

.home {
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: $primary-font;

  .hero {
    width: 100%;
    height: 70vh;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .bg-hero {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: -99;
    }

    .content-wrap {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #fff;
      gap: 20px;

      h5 {
        font-size: 22px;
        font-weight: 300;
      }

      h1 {
        font-size: 48px;
        letter-spacing: 2px;
      }

      p {
        font-size: 20px;
        margin-bottom: 70px;
      }

      .explore {
        width: fit-content;
        padding: 14px 28px;
        border: 2px solid rgba($color: #000000, $alpha: 0.6);
        background: none;
        transition: 400ms ease all;
        cursor: pointer;
        font-size: 18px;
        letter-spacing: 1px;
        text-decoration: none;
        color: #fff;
      }

      .explore:hover {
        background: rgba($color: #fff, $alpha: 0.7);
        color: #000;
        border-color: rgba($color: #fff, $alpha: 0.7);
      }
    }
  }

  .story {
    background: #fff;
    width: 100%;
    height: 65vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    .content-wrap {
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 50px;
      padding-top: 80px;

      h2 {
        font-size: 28px;
        font-weight: 400;
        width: 75%;
        text-align: center;
      }

      p {
        width: 85%;
        text-align: center;
        font-size: 16px;
        color: $font-color;
        line-height: 22px;
        letter-spacing: 1px;
      }

      .more {
        color: $primary-color;
        padding-bottom: 10px;
        border: 2px solid rgba($color: $primary-color, $alpha: 0.25);
        border-width: 0 0 2px 0;
        cursor: pointer;
        text-decoration: none;
      }
    }
  }

  .featured {
    background: #fff;
    width: 100%;
    height: 105vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    .wrapper {
      display: flex;
      gap: 80px;

      .featured-item {
        display: flex;
        flex-direction: column;
        align-items: center;

        .img-wrap {
          width: 400px;
          height: 500px;
          margin-bottom: 50px;
        }

        h3 {
          font-size: 22px;
          font-weight: 400;
          letter-spacing: 1px;
          margin-bottom: 10px;
        }

        h4 {
          font-weight: 400;
          letter-spacing: 1px;
          color: rgba($color: #000000, $alpha: 0.7);
        }
      }
    }
  }

  .more-pros {
    background: #fff;
    width: 100%;
    height: 210vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    .wrapper {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 40px;

      .more-item {
        width: 300px;
        height: 450px;
        display: flex;
        flex-direction: column;
        align-items: center;

        .img-wrap {
          width: 100%;
          height: 80%;
          margin-bottom: 30px;
        }

        h3 {
          font-size: 18px;
          font-weight: 400;
          letter-spacing: 1px;
          margin-bottom: 10px;
        }

        h4 {
          font-weight: 400;
          letter-spacing: 1px;
          color: rgba($color: #000000, $alpha: 0.7);
          font-size: 14px;
        }
      }
    }
  }

  .magazine {
    background: #fff;
    width: 100%;
    height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    .wrapper {
      display: flex;
      gap: 80px;

      .img-wrap {
        display: flex;
        gap: 20px;

        .left {
          flex-basis: 55%;
          img {
            width: 250px;
            height: 300px;
          }
        }

        .right {
          flex-basis: 45%;
          display: flex;
          flex-direction: column;
          gap: 20px;

          img {
            width: 200px;
            height: 140px;
          }
        }
      }

      .content {
        margin-right: 50px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding-top: 20px;

        span {
          font-size: 14px;
          text-transform: uppercase;
          color: rgba($color: #000, $alpha: 0.7);
        }

        h2 {
          font-size: 32px;
          font-weight: 400;
          margin-bottom: 10px;
        }

        p {
          margin-top: 10px;
          color: rgba($color: #000, $alpha: 0.7);
        }

        .start-btn {
          margin-top: 20px;
          width: 180px;
          height: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: rgba($color: #000, $alpha: 0.8);
          color: #fff;
          font-size: 13px;
          text-transform: uppercase;
          text-decoration: none;
          letter-spacing: 1px;
          cursor: pointer;
          transition: 400ms ease all;
        }

        .start-btn:hover {
          background: rgba($color: #000, $alpha: 0.7);
        }
      }
    }
  }

  .blog {
    margin-top: 45vh;
    background: #fff;
    width: 100%;
    height: 105vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10vh;

    .wrapper {
      display: flex;
      gap: 30px;

      .blog-item {
        width: 260px;
        display: flex;
        flex-direction: column;
        gap: 20px;

        img {
          height: 260px;
          object-fit: cover;
        }

        .name {
          font-size: 18px;
          font-weight: 400;
        }

        .desc {
          color: rgba($color: #000, $alpha: 0.7);
        }

        .date {
          color: rgba($color: $font-color, $alpha: 0.8);
          text-transform: uppercase;
          font-size: 13px;
          letter-spacing: 1px;
        }
      }
    }
  }
}
</style>
