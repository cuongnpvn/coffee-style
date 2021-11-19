<template>
  <Header v-on:toggleModal="toggleModal" />
  <transition name="checkout">
    <CheckModal v-if="showModal" v-on:toggleModal="toggleModal" />
  </transition>
  <div class="contact">
    <div class="bg-gray"></div>
    <div class="hero">
      <h1 class="hero-title">Let's Connect</h1>
      <p class="hero-desc">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde nemo
        mollitia ad consequatur expedita quidem.
      </p>
      <div class="title">
        <div class="hline"></div>
        <span>Our offices</span>
        <div class="hline"></div>
      </div>
    </div>
    <div class="content-wrap">
      <div class="content-item">
        <img src="@/assets/location1.jpg" alt="" />
        <div class="location-info">
          <span class="country">united kingdom</span>
          <span class="city">Canary Wharf, London</span>
          <span class="building">Jubilee Place</span>
          <span class="block">London</span>
          <span class="street">E14 5NY</span>
        </div>
        <div class="open-time">
          <span>opening times</span>
          <div class="time-item">Mon - Fri 08:00 to 22:00</div>
          <div class="time-item">Sat - 09:00 to 20:00</div>
          <div class="time-item">Sun - 12:00 to 18:00</div>
        </div>
      </div>
      <div class="content-item">
        <img src="@/assets/location1.jpg" alt="" />
        <div class="location-info">
          <span class="country">united kingdom</span>
          <span class="city">Canary Wharf, London</span>
          <span class="building">Jubilee Place</span>
          <span class="block">London</span>
          <span class="street">E14 5NY</span>
        </div>

        <div class="open-time">
          <span>opening times</span>
          <div class="time-item">Mon - Fri 08:00 to 22:00</div>
          <div class="time-item">Sat - 09:00 to 20:00</div>
          <div class="time-item">Sun - 12:00 to 18:00</div>
        </div>
      </div>
    </div>
    <div class="contact-form">
      <div class="left">
        <span class="left-title">Contact form</span>
        <p class="message">
          Drop us your message and I'll get back to you as soon as possible.
        </p>
        <div class="user">
          <div class="input-wrap">
            <span>Name</span>
            <input type="text" placeholder="JAMES COFFEE" />
          </div>
          <div class="input-wrap">
            <span>Email address</span>
            <input type="text" placeholder="CUSTOMER@COFFEESTYLE.IO" />
          </div>
          <div class="input-wrap">
            <span>Your message</span>
            <textarea
              name=""
              id=""
              cols="30"
              rows="6"
              placeholder="HI! I WOULD LIKE TO ASK SOMETHING ABOUT..."
            ></textarea>
          </div>
        </div>
        <button class="send-btn">Send message</button>
      </div>
      <div class="right">
        <span class="title">Contact form</span>
        <h4 class="logo">CoffeeStyle. Inc</h4>
        <p class="address">
          Pride Ave, <br />Hamlyn Heights <br />VIC 3215 <br />Australia
        </p>
        <div class="call">
          <span>Call us</span>
          <h4>+84 (194) 666-898989</h4>
        </div>
        <div class="mail">
          <span>Email us</span>
          <h4>us@coffeestyle.io</h4>
        </div>
      </div>
    </div>
    <div class="map"></div>
    <div class="directory">
      <div class="title">
        <div class="hline"></div>
        <span>Directory</span>
        <div class="hline"></div>
      </div>
      <div class="wrapper">
        <div class="column">
          <span class="role">Press</span>
          <div class="name">Harry Potter</div>
          <span class="number">086-374-4962</span>
          <span class="email">robb.kohler@coffeestyle.com</span>
        </div>
        <div class="column">
          <span class="role">Management</span>
          <div class="name">Harry Potter</div>
          <span class="number">086-374-4962</span>
          <span class="email">robb.kohler@coffeestyle.com</span>
        </div>
        <div class="column">
          <span class="role">Support</span>
          <div class="name">Harry Potter</div>
          <span class="number">086-374-4962</span>
          <span class="email">robb.kohler@coffeestyle.com</span>
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
  name: "Contact",
  components: {
    Header,
    Footer,
    Subcribe,
  },
  data() {
    return {
      showModal: null,
    };
  },
  beforeCreate() {
    window.scrollTo(0, 0);
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
  },
};
</script>

<style lang="scss" scoped>
.contact {
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: "Karla", sans-serif;
  background: #fff;
  position: relative;

  .bg-gray {
    position: absolute;
    left: 2.5%;
    width: 95%;
    height: 70vh;
    background: #f0f0f0;
    z-index: 1;
  }

  .hero {
    margin-bottom: 120px;
    width: 100%;
    height: 45vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 2;

    .hero-title {
      margin-top: 100px;
      margin-bottom: 30px;
      font-size: 36px;
      font-weight: 400;
      letter-spacing: 2px;
    }

    .hero-desc {
      margin-bottom: 100px;
      line-height: 26px;
      text-align: center;
      width: 50%;
      font-size: 18px;
      color: gray;
    }

    .title {
      margin-bottom: 70px;
      display: flex;
      align-items: center;
      gap: 15px;

      .hline {
        width: 30px;
        height: 1px;
        background: gray;
      }

      span {
        text-transform: uppercase;
        color: gray;
        font-size: 13px;
        letter-spacing: 1px;
      }
    }
  }

  .content-wrap {
    width: 70%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    gap: 20px;
    z-index: 1;

    .content-item {
      display: flex;
      flex-direction: column;
      gap: 35px;

      img {
        width: 450px;
        height: 200px;
        object-fit: cover;
      }

      .location-info {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
        color: gray;

        .country {
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 5px;
          font-size: 13px;
        }

        .city {
          font-size: 20px;
          margin-bottom: 5px;
          color: #000;
        }
      }

      .open-time {
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: 15px;
        color: gray;

        span {
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 13px;
        }
      }
    }
  }

  .contact-form {
    margin: 0 auto;
    margin-top: 10vh;
    width: 70%;
    height: 75vh;
    border: 1px solid gray;
    display: flex;
    padding: 40px 50px;
    color: gray;
    gap: 60px;
    z-index: 99;
    background: #fff;

    .left {
      flex-basis: 60%;
      display: flex;
      flex-direction: column;
      gap: 25px;

      .left-title {
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 13px;
      }

      .message {
        width: 80%;
        font-size: 22px;
        color: #000;
      }

      .user {
        display: flex;
        flex-direction: column;
        gap: 20px;

        .input-wrap {
          display: flex;
          flex-direction: column;
          gap: 12px;

          span {
            text-transform: uppercase;
            letter-spacing: 2px;
            font-size: 13px;
          }

          input {
            width: 100%;
            height: 50px;
            border: 1px solid gray;
            background: none;
            outline: none;
            padding-left: 20px;
            color: gray;
            letter-spacing: 1px;
          }

          textarea {
            font-family: "Source Open Sans", sans-serif;
            border: 1px solid gray;
            background: none;
            outline: none;
            padding-left: 20px;
            padding-top: 12px;
            color: gray;
            letter-spacing: 1px;
          }
        }
      }

      .send-btn {
        width: fit-content;
        padding: 16px 24px;
        border: none;
        background: rgba($color: #000000, $alpha: 0.8);
        text-transform: uppercase;
        letter-spacing: 2px;
        color: #fff;
        font-size: 11px;
        cursor: pointer;
        transition: 400ms ease all;
      }

      .send-btn:hover {
        background: rgba($color: #000000, $alpha: 1);
      }
    }

    .right {
      flex-basis: 30%;
      display: flex;
      flex-direction: column;

      .title {
        margin-bottom: 30px;
        text-transform: uppercase;
        font-size: 13px;
        letter-spacing: 2px;
      }

      .logo {
        font-size: 24px;
        font-weight: 600;
        color: #000;
        margin-bottom: 30px;
      }

      .address {
        margin-bottom: 40px;
        line-height: 30px;
      }

      .call,
      .mail {
        margin-bottom: 25px;
        display: flex;
        flex-direction: column;
        gap: 15px;

        span {
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        h4 {
          color: #000;
          font-size: 18px;
          font-weight: 600;
        }
      }
    }
  }

  .map {
    position: absolute;
    top: 200vh;
    width: 100%;
    height: 50vh;
    background: rgba($color: #000000, $alpha: 0.2);
    z-index: 1;
  }

  .directory {
    width: 70%;
    margin: 0 auto;
    margin-top: 50vh;
    margin-bottom: 20vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
      margin-bottom: 70px;
      display: flex;
      align-items: center;
      gap: 15px;

      .hline {
        width: 50px;
        height: 1px;
        background: gray;
      }

      span {
        text-transform: uppercase;
        color: gray;
        font-size: 13px;
        letter-spacing: 2px;
      }
    }

    .wrapper {
      display: flex;
      gap: 120px;
      color: gray;

      .column {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;

        .role {
          margin-bottom: 20px;
          text-transform: uppercase;
          font-size: 13px;
          letter-spacing: 2px;
        }

        .name {
          color: #000;
          font-size: 20px;
          margin-bottom: 15px;
        }

        .number,
        .email {
          font-size: 18px;
        }
      }
    }
  }
}
</style>
