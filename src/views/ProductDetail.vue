<template>
  <Header v-on:toggleModal="toggleModal" />
  <transition name="checkout">
    <CheckModal v-if="showModal" v-on:toggleModal="toggleModal" />
  </transition>
  <main>
    <div class="product">
      <img :src="productInfo.image" alt="" />
      <div class="info">
        <h2 class="name">{{ productInfo.name }}</h2>
        <p class="desc">
          Amet suscipit omnis eum necessitatibus quos doloribus. Ut placeat et
          corrupti. Reprehenderit quisquam omnis omnis velit commodi. Animi
          quaerat sed repellendus.
        </p>
        <h4 class="price">$ {{ productInfo.price }}</h4>
        <span class="qty">Quantity</span>
        <div class="user-wrap">
          <input type="number" class="number" min="1" v-model="qty" />
          <button @click="addItem" class="add-btn">Add to cart</button>
        </div>
      </div>
      <div class="detail">
        <span>Details</span>
        <p>
          Id cupiditate cum sequi eum neque dolorem dicta quisquam non. Quas vel
          perferendis accusantium eum cum voluptates libero doloribus
          voluptates. A et quia qui quia. Sunt tempore est sit facilis. Amet
          suscipit omnis eum necessitatibus quos doloribus. Ut placeat et
          corrupti. Reprehenderit quisquam omnis omnis velit commodi. Animi
          quaerat sed repellendus. Perspiciatis rerum commodi dolore consequatur
          voluptates accusantium velit. Aut dicta iusto neque ea voluptates.
          Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim
          omnis repudiandae labore.
        </p>
      </div>
      <div class="dimensions">
        <span>Dimensions</span>
        <ul>
          <li>Length (in): 56.0</li>
          <li>Height (in): 30.0</li>
          <li>Width (in): 12.0</li>
          <li>Weight (oz): 12.0</li>
        </ul>
      </div>
    </div>
    <div class="handmade">
      <img src="@/assets/product-detail.jpg" alt="" />
      <div class="handmade-info">
        <h3 class="handmade-title">Handmade by <span>CoffeeStyle.</span></h3>
        <p class="desc-text">
          The most versatile furniture system ever created. Designed to fit your
          life.
        </p>
        <div class="quality">
          <img src="@/assets/icon-diamond.svg" alt="" />
          <div class="sub-info">
            <span class="heading">Premium Quality</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in.
            </p>
          </div>
        </div>
        <div class="quality">
          <img src="@/assets/icon-bulb.svg" alt="" />
          <div class="sub-info">
            <span class="heading">Gentle to the Environment</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="more-product">
      <div class="title">
        <div class="hline"></div>
        <span>you might also like these</span>
        <div class="hline"></div>
      </div>
      <div class="wrapper">
        <div
          v-for="(item, index) in getMoreProducts"
          :key="index"
          class="product-item"
        >
          <div class="img-wrap">
            <img :src="item.image" alt="" />
            <div class="explore-effect"></div>
            <router-link
              :to="{ name: 'ProductDetail', params: { id: item.id } }"
              class="explore-product"
            >
              Explore More
            </router-link>
          </div>
          <h3 class="product-name">{{ item.name }}</h3>
          <h4 class="price">$ {{ item.price }} USD</h4>
        </div>
      </div>
    </div>
  </main>

  <Subcribe />
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import Subcribe from "@/components/Subcribe.vue";
import Footer from "@/components/Footer.vue";
import CheckModal from "@/components/CheckModal.vue";

export default {
  name: "ProductDetail",
  components: {
    Header,
    Subcribe,
    Footer,
    CheckModal,
  },
  beforeCreate() {
    window.scrollTo(0, 0);
  },
  data() {
    return {
      productInfo: this.$store.getters.getProductById(this.$route.params.id),
      products: this.$store.state.products,
      showModal: null,
      qty: 1,
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
    addItem() {
      this.$store.dispatch("addItem", {
        id: this.productInfo.id,
        qty: this.qty,
      });
      this.showModal = !this.showModal;
    },
  },
  computed: {
    getMoreProducts() {
      return this.products.slice(0, 3);
    },
  },
};
</script>

<style lang="scss" scoped>
main {
  width: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
  font-family: "Karla", sans-serif;

  .product {
    margin: 10vh auto;
    margin-bottom: 15vh;
    width: 70%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 50px 70px;
    justify-content: center;

    img {
      width: 400px;
      height: 450px;
      object-fit: cover;
    }

    .info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: rgba($color: #000000, $alpha: 0.7);

      .name {
        font-size: 36px;
        font-weight: 400;
        margin-bottom: 25px;
        color: rgba($color: #000000, $alpha: 1);
      }

      .desc {
        line-height: 30px;
        font-size: 18px;
        margin-bottom: 30px;
      }

      .price {
        font-size: 24px;
        font-weight: 400;
        margin-bottom: 20px;
      }

      .qty {
        text-transform: uppercase;
        margin-bottom: 12px;
        font-size: 13px;
        letter-spacing: 1px;
      }

      .user-wrap {
        display: flex;
        gap: 15px;
        height: 50px;

        .number {
          width: 100px;
          background: #e0e0e0;
          border: 1px solid gray;
          padding: 0 15px;
          font-size: 18px;
          font-family: "Karla", sans-serif;
          caret-color: transparent;
          outline: none;
        }

        .add-btn {
          width: fit-content;
          background: rgba($color: #000000, $alpha: 0.7);
          padding: 10px 20px;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 1px;
          border: none;
          font-size: 13px;
          cursor: pointer;
          transition: 400ms ease all;
        }

        .add-btn:hover {
          background: rgba($color: #000000, $alpha: 0.5);
        }
      }
    }

    .detail,
    .dimensions {
      display: flex;
      flex-direction: column;
      gap: 20px;

      span {
        text-transform: uppercase;
        color: rgba($color: #000000, $alpha: 0.7);
        letter-spacing: 1px;
        font-size: 13px;
      }
    }

    .detail {
      p {
        color: rgba($color: #000000, $alpha: 0.7);
        line-height: 25px;
      }
    }

    .dimensions {
      ul {
        padding-left: 18px;

        li {
          margin-bottom: 12px;
        }
      }
    }
  }

  .handmade {
    margin-bottom: 15vh;
    width: 100%;
    height: 50vh;
    display: flex;
    background: rgba($color: #000000, $alpha: 0.3);

    img {
      width: 50%;
      height: 100%;
      object-fit: cover;
    }

    .handmade-info {
      padding: 40px 40px;
      display: flex;
      flex-direction: column;

      .handmade-title {
        margin-bottom: 20px;
        font-size: 26px;
        font-weight: 400;
        letter-spacing: 1px;

        span {
          font-weight: 600;
          text-transform: lowercase;
          font-size: 28px;
          letter-spacing: 0;
          color: #fff;
        }
      }

      .desc-text {
        width: 60%;
        font-size: 20px;
        line-height: 25px;
        margin-bottom: 25px;
      }

      .quality {
        display: flex;
        gap: 20px;
        margin-bottom: 30px;

        img {
          width: 25px;
          height: 25px;
        }

        .sub-info {
          display: flex;
          flex-direction: column;
          gap: 10px;
          width: 60%;

          span {
            color: #fff;
          }

          p {
            color: rgba($color: #000000, $alpha: 0.7);
            line-height: 22px;
          }
        }
      }
    }
  }

  .more-product {
    width: 70%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    .wrapper {
      display: flex;
      gap: 25px;

      .product-item {
        width: 300px;
        height: 700px;
        display: flex;
        flex-direction: column;
        align-items: center;

        img {
          width: 100%;
          height: 420px;
          object-fit: cover;
        }

        .product-name {
          margin-top: 20px;
          font-size: 24px;
          font-weight: 400;
        }

        .price {
          margin-top: 15px;
          font-size: 18px;
          font-weight: 400;
          color: rgba($color: #000000, $alpha: 0.7);
        }
      }
    }
  }
}
</style>
