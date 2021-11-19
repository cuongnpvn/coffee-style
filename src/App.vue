<template>
  <router-view :key="$route.fullPath" />
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Karla:wght@300;400;500;600&display=swap");
$primary-font: "Karla", sans-serif;
$font-color: rgba(
  $color: #000,
  $alpha: 0.7,
);
$title-color: #000;
$primary-color: #733906;

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

//animated checkout
.checkout-enter-active,
.checkout-leave-active {
  transition: 0.8s ease all;
}
.checkout-enter-from,
.checkout-leave-to {
  transform: translateX(700px);
}

.title {
  margin-bottom: 100px;
  display: flex;
  align-items: center;
  gap: 20px;

  .hline {
    width: 80px;
    height: 2px;
    background: #f0f0f0;
  }

  span {
    font-size: 13px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: gray;
  }
}

.img-wrap {
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .explore-effect {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: 400ms ease all;
  }

  .explore-product {
    position: absolute;
    bottom: 15px;
    left: 4%;
    width: 92%;
    height: 15%;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
    font-size: 18px;
    font-weight: 500;
    transition: 400ms ease all;
    opacity: 0;
    cursor: pointer;
    text-decoration: none;
  }
}

.img-wrap:hover {
  .explore-effect {
    background: rgba($color: #000000, $alpha: 0.2);
  }

  .explore-product {
    opacity: 1;
    transform: scaleY(-10px);
  }
}
</style>
