<template>
  <Header v-on:toggleModal="toggleModal" />
  <transition name="checkout">
    <CheckModal v-if="showModal" v-on:toggleModal="toggleModal" />
  </transition>
  <div class="product">
    <div class="hero">
      <h1>Our Products</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <div class="filter">
        <div class="hline"></div>
        <div @click="handleFilter('All products')" class="filter-item">
          <span>All products</span>
        </div>
        <div @click="handleFilter('Classic')" class="filter-item">
          <span>Classic</span>
        </div>
        <div @click="handleFilter('Standard')" class="filter-item">
          <span>Standard</span>
        </div>
        <div @click="handleFilter('Premium')" class="filter-item">
          <span>Premium</span>
        </div>
        <div @click="handleFilter('Others')" class="filter-item">
          <span>Others</span>
        </div>
        <div class="hline"></div>
      </div>
    </div>
    <div class="blog">
      <div class="wrapper">
        <img
          @click="changeBlog"
          class="arrow"
          src="@/assets/icon-arrow-left.svg"
          alt=""
        />
        <div v-if="isBlog" class="content">
          <img src="@/assets/blog1.jpg" alt="" />
          <div class="info">
            <span>New article is live</span>
            <h2>
              Health Check: why do I get a headache when I haven’t had my
              coffee?
            </h2>
            <p>
              It is a paradisematic country, in which roasted parts of sentences
              fly into your mouth.
            </p>
            <router-link
              :to="{ name: 'BlogDetail', params: { id: 1 } }"
              class="explore"
              >Read the full story</router-link
            >
          </div>
        </div>
        <div v-if="!isBlog" class="content">
          <img src="@/assets/location1.jpg" alt="" />
          <div class="info">
            <span>New store opened</span>
            <h2>We're in London</h2>
            <p>
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic life.
            </p>
            <router-link :to="{ name: 'Contact' }" class="explore"
              >Explore our offices</router-link
            >
          </div>
        </div>
        <img
          @click="changeBlog"
          class="arrow"
          src="@/assets/icon-arrow-right.svg"
          alt=""
        />
      </div>
      <div class="slide">
        <div :class="{ isSelected: isBlog }" class="item"></div>
        <div :class="{ isSelected: !isBlog }" class="item"></div>
      </div>
    </div>
    <div class="product-wrap">
      <div
        v-for="(item, index) in filteredProducts"
        :key="index"
        class="item-wrap"
      >
        <div class="img-wrap">
          <img :src="item.image" alt="" />
          <div class="explore-effect"></div>
          <router-link
            :to="{ name: 'ProductDetail', params: { id: item.id } }"
            class="explore-product"
            >Explore More</router-link
          >
        </div>
        <h4>{{ item.name }}</h4>
        <div class="price">
          <span>$ {{ item.price }} USD</span>
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
export default {
  name: "Product",
  components: {
    Header,
    Footer,
    Subcribe,
  },
  beforeCreate() {
    window.scrollTo(0, 0);
  },
  data() {
    return {
      products: this.$store.state.products,
      isBlog: true,
      isFilter: null,
      showModal: null,
    };
  },
  methods: {
    changeBlog() {
      this.isBlog = !this.isBlog;
    },
    handleFilter(value) {
      this.isFilter = value;
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
  },
  computed: {
    filteredProducts() {
      if (this.isFilter) {
        if (this.isFilter == "All products") {
          return this.products;
        } else {
          return this.products.filter(
            (product) => product.category == this.isFilter
          );
        }
      } else {
        return this.products;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.product {
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: "Karla", sans-serif;
  background: #fff;

  .hero {
    width: 100%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      margin-bottom: 25px;
      color: #000;
      font-size: 36px;
      font-weight: 400;
      letter-spacing: 2px;
    }

    p {
      margin-bottom: 45px;
      color: rgba($color: #000000, $alpha: 0.5);
    }

    .filter {
      display: flex;
      gap: 15px;
      align-items: center;

      .hline {
        margin: 0 10px;
        width: 55px;
        height: 1px;
        background: rgba($color: #000000, $alpha: 0.1);
      }

      .filter-item {
        width: fit-content;
        padding: 9px 16px;
        border: 1px solid rgba($color: #000000, $alpha: 0.3);
        display: flex;
        justify-content: center;
        align-items: center;
        color: #753100;
        text-transform: uppercase;
        font-size: 13px;
        cursor: pointer;
        transition: 400ms ease all;
      }

      .filter-item:hover {
        border-color: #753100;
      }
    }
  }

  .blog {
    width: 100%;
    height: 75vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 45px;

    .wrapper {
      width: 75%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 30px;

      .arrow {
        width: 35px;
        height: 50px;
        filter: invert(100%) sepia(2%) saturate(90%) hue-rotate(359deg)
          brightness(115%) contrast(76%);
        transition: 400ms ease all;
        cursor: pointer;
      }

      .arrow:hover {
        filter: invert(0%) sepia(0%) saturate(8%) hue-rotate(253deg)
          brightness(100%) contrast(100%);
      }

      .content {
        display: flex;
        gap: 70px;
        align-items: center;

        img {
          width: 370px;
          height: 370px;
          object-fit: cover;
        }

        .info {
          display: flex;
          flex-direction: column;
          gap: 24px;

          span {
            color: rgba($color: #000000, $alpha: 0.7);
            text-transform: uppercase;
            font-size: 14px;
          }

          h2 {
            font-size: 26px;
            font-weight: 400;
            letter-spacing: 1px;
          }

          p {
            color: rgba($color: #000000, $alpha: 0.7);
          }

          .explore {
            width: fit-content;
            padding: 16px 24px;
            color: #fff;
            font-size: 13px;
            text-transform: uppercase;
            text-decoration: none;
            background: rgba($color: #000000, $alpha: 0.7);
            transition: 400ms ease all;
            cursor: pointer;
          }

          .explore:hover {
            background: rgba($color: #000000, $alpha: 0.5);
          }
        }
      }
    }

    .slide {
      display: flex;
      gap: 12px;

      .item {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: rgba($color: #000000, $alpha: 0.15);
      }

      .isSelected {
        background: rgba($color: #000000, $alpha: 0.7);
      }
    }
  }

  .product-wrap {
    width: 60%;
    margin: 0 auto;
    margin-bottom: 10vh;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    justify-content: center;

    .item-wrap {
      width: 290px;
      height: 420px;
      display: flex;
      flex-direction: column;
      align-items: center;

      .img-wrap {
        width: 100%;
        height: 80%;
        margin-bottom: 30px;
        object-fit: cover;
      }

      h3 {
        font-size: 18px;
        font-weight: 400;
        letter-spacing: 1px;
        margin-bottom: 10px;
      }

      .price {
        margin-top: 15px;
        font-weight: 400;
        letter-spacing: 1px;
        color: rgba($color: #000000, $alpha: 0.7);
        font-size: 14px;
      }
    }
  }
}
</style>
