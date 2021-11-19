<template>
  <footer>
    <div class="wrapper">
      <div class="name-column">
        <h3>CoffeeStyle.</h3>
        <p>
          Delivering the best coffee life since 1996. <br />
          From coffee geeks to the real ones.
        </p>
        <span>CoffeeStyle Inc. 1996</span>
      </div>
      <div class="menu-column">
        <h4>Menu</h4>
        <router-link :to="{ name: 'Home' }" class="nav">Home</router-link>
        <router-link :to="{ name: 'Product' }" class="nav"
          >Our Products</router-link
        >
        <router-link :to="{ name: 'About' }" class="nav">About</router-link>
        <router-link :to="{ name: 'Contact' }" class="nav">Contact</router-link>
      </div>
      <div class="follow-column">
        <h4>Follow Us</h4>
        <span>Facebook</span>
        <span>Instagram</span>
        <span>Pinterest</span>
        <span>Twitter</span>
      </div>
      <div class="contact-column">
        <h4>Contact Us</h4>
        <p>We're Always Happy to Help</p>
        <h2>us@coffeestyle.io</h2>
        <span>Powered by CoffeeStyle</span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
footer {
  background: #fff;
  width: 100%;
  height: 45vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Source Open Sans", sans-serif;

  .wrapper {
    width: 70%;
    display: flex;
    gap: 80px;
    margin-bottom: 60px;

    .name-column {
      flex-basis: 35%;
      display: flex;
      flex-direction: column;

      h3 {
        font-size: 24px;
        margin-bottom: 25px;
      }

      p {
        font-size: 13px;
        color: rgba($color: #000, $alpha: 0.7);
        line-height: 20px;
        margin-bottom: 70px;
      }

      span {
        font-size: 13px;
        color: rgba($color: #000, $alpha: 0.4);
      }
    }

    .menu-column,
    .follow-column {
      flex-basis: 15%;
      color: rgba($color: #000, $alpha: 0.5);
      display: flex;
      flex-direction: column;
      gap: 20px;

      h4 {
        text-transform: uppercase;
        margin-bottom: 6px;
        font-weight: 600;
        font-size: 13px;
        letter-spacing: 1px;
      }
    }

    .menu-column {
      .nav {
        font-size: 13px;
        cursor: pointer;
        text-decoration: none;
        color: rgba($color: #000, $alpha: 0.5);
      }
    }

    .follow-column {
      span {
        font-size: 13px;
        cursor: pointer;
      }
    }

    .contact-column {
      display: flex;
      flex-direction: column;
      color: rgba($color: #000, $alpha: 0.7);

      h4 {
        font-weight: 600;
        font-size: 13px;
        letter-spacing: 1px;
        text-transform: uppercase;
        margin-bottom: 30px;
      }

      p {
        font-size: 14px;
        margin-bottom: 30px;
      }

      h2 {
        font-size: 24px;
        font-weight: 500;
        color: rgba($color: #000, $alpha: 0.9);
        margin-bottom: 50px;
      }

      span {
        font-size: 13px;
        color: rgba($color: #000, $alpha: 0.2);
      }
    }
  }
}
</style>
