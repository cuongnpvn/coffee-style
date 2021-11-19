<template>
  <header>
    <div class="logo">
      <span>CoffeeStyle.</span>
    </div>
    <div class="nav-bar">
      <router-link
        :to="{ name: 'Home' }"
        class="nav-link"
        :class="{ isSelected: currentNav == 'Home' }"
        >Home</router-link
      >
      <router-link
        :to="{ name: 'Product' }"
        class="nav-link"
        :class="{ isSelected: currentNav == 'Product' }"
        >Our products</router-link
      >
      <router-link
        :to="{ name: 'Blog' }"
        class="nav-link"
        :class="{ isSelected: currentNav == 'Blog' }"
        >Blog</router-link
      >
      <router-link
        :to="{ name: 'About' }"
        class="nav-link"
        :class="{ isSelected: currentNav == 'About' }"
        >About</router-link
      >
      <router-link
        :to="{ name: 'Contact' }"
        class="nav-link"
        :class="{ isSelected: currentNav == 'Contact' }"
        >Contact</router-link
      >
    </div>
    <div @click="toggleModal" class="cart">
      <img src="@/assets/icon-bag.svg" alt="" />
      <span>Cart</span>
      <div class="count">
        <span>{{ getCartLength }}</span>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      currentNav: this.$route.name,
      cartProducts: this.$store.state.cartProducts,
    };
  },
  methods: {
    toggleModal() {
      this.$emit("toggleModal");
    },
  },
  computed: {
    getCartLength() {
      return this.$store.getters.getCartLength;
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

header {
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Source Sans Pro", sans-serif;

  .logo {
    margin-right: 60px;
    font-size: 24px;
    font-weight: 600;
    color: #000;
  }

  .nav-bar {
    margin: 0 80px;
    display: flex;
    align-items: center;
    gap: 45px;

    .nav-link {
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 1px;
      text-decoration: none;
      color: #c0c0c0;
    }

    .nav-link:hover {
      color: #000;
    }

    .isSelected {
      color: #000;
    }
  }

  .cart {
    margin-left: 30px;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;

    img {
      width: 25px;
      height: 25px;
    }

    span {
      font-size: 13px;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .count {
      width: 24px;
      height: 24px;
      background: #000;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;

      span {
        font-size: 13px;
        color: #fff;
      }
    }
  }
}
</style>
