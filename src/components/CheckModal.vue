<template>
  <div class="checkModal">
    <div class="heading">
      <span class="yourcart">Your cart</span>
      <img
        @click="$emit('toggleModal')"
        class="close-icon"
        src="@/assets/icon-close.svg"
        alt=""
      />
    </div>
    <div class="wrapper">
      <div v-for="(item, index) in cartProducts" :key="index" class="item-wrap">
        <img :src="item.image" alt="" />
        <div class="info">
          <span class="info-name">{{ item.name }}</span>
          <span class="info-price">$ {{ item.price }} USD</span>
          <button class="remove">Remove</button>
          <div class="qty">{{ item.qty }}</div>
        </div>
      </div>
    </div>
    <div class="total">
      <div class="calc">
        <span class="subtotal">Subtotal</span>
        <span class="number">$ {{ getTotal }} USD</span>
      </div>
      <button class="checkout">Continue to checkout</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckModal",
  data() {
    return {
      cartProducts: this.$store.state.cart,
      total: 0,
    };
  },
  computed: {
    getTotal() {
      return this.cartProducts.reduce((total, item) => {
        return total + item.price * item.qty;
      }, 0);
    },
  },
};
</script>

<style lang="scss" scoped>
.checkModal {
  position: fixed;
  top: 0;
  right: 0;
  width: 33%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: rgba($color: #000000, $alpha: 0.9);
  font-family: "Karla", sans-serif;
  z-index: 101;

  .heading {
    width: 100%;
    height: 10vh;
    border: 1px solid gray;
    border-width: 0 0 1px 0;
    padding: 0 35px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .yourcart {
      text-transform: uppercase;
      letter-spacing: 1px;
      color: gray;
      font-size: 13px;
      font-weight: 500;
    }

    .close-icon {
      width: 24px;
      height: 24px;
      filter: invert(88%) sepia(7%) saturate(0%) hue-rotate(223deg)
        brightness(101%) contrast(93%);
    }
  }

  .wrapper {
    padding: 30px 35px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    .item-wrap {
      display: flex;
      gap: 40px;
      align-items: center;
      position: relative;

      img {
        width: 80px;
        height: 80px;
        object-fit: cover;
      }

      .info {
        display: flex;
        flex-direction: column;
        gap: 15px;
        color: #fff;

        .info-name {
          font-size: 18px;
          font-weight: 500;
        }

        .remove {
          background: none;
          border: none;
          text-transform: uppercase;
          font-size: 12px;
          font-weight: 500;
          color: gray;
          width: fit-content;
        }

        .qty {
          position: absolute;
          right: 0;
          top: 20px;
          width: 40px;
          height: 35px;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid gray;
          color: #fff;
        }
      }
    }
  }

  .total {
    position: inherit;
    bottom: 0;
    width: 33%;
    height: 20vh;
    display: flex;
    gap: 10px;
    flex-direction: column;
    border: 1px solid #fff;
    border-width: 1px 0 0 0;

    .calc {
      width: 100%;
      padding: 20px 35px;
      display: flex;
      justify-content: space-between;

      span {
        font-size: 18px;
        color: #fff;
      }
    }

    .checkout {
      width: 85%;
      margin: 0 auto;
      height: 50px;
      text-transform: uppercase;
    }
  }
}
</style>
