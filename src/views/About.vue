<template>
  <Header v-on:toggleModal="toggleModal" />
  <transition name="checkout">
    <CheckModal v-if="showModal" v-on:toggleModal="toggleModal" />
  </transition>
  <img src="@/assets/bg-about.jpg" alt="" class="bg-fixed" />
  <div class="about">
    <div class="top-bg">
      <div class="hero">
        <h1 class="hero-title">About</h1>
        <p class="hero-desc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
          laudantium, illum, minima dolor ab dicta delectus perspiciatis tempore
          quisquam facere iusto nihil.
        </p>
        <img class="hero-bg" src="@/assets/about1.jpg" alt="" />
      </div>
      <div class="introduction">
        <div class="title">
          <div class="hline"></div>
          <span>Introductions</span>
          <div class="hline"></div>
        </div>
        <h2 class="intro-title">
          Overlaid the jeepers uselessly much excluding everyday life.
        </h2>
        <p class="intro-desc">
          It is a paradisematic country, in which roasted parts of sentences fly
          into your mouth. Even the all-powerful Pointing has no control about
          the blind texts it is an almost unorthographic life One day however a
          small line of blind text by the name of Lorem Ipsum decided to leave
          for the far World of Grammar.
        </p>
      </div>
      <div class="content-wrap">
        <div class="content-item">
          <img src="@/assets/about2.jpg" alt="" />
          <div class="info">
            <h4 class="info-title">
              Overlaid the jeepers uselessly much excluding everyday life.
            </h4>
            <div class="hline"></div>
            <p class="info-desc">
              It is a paradisematic country, in which roasted parts of sentences
              fly into your mouth. Even the all-powerful Pointing has no control
              about the blind texts it is an almost unorthographic life One day
              however a small line of blind text by the name of Lorem Ipsum
              decided to leave for the far World of Grammar.
            </p>
          </div>
        </div>
        <div class="content-item">
          <img src="@/assets/about3.jpg" alt="" />
          <div class="info">
            <h4 class="info-title">
              Overlaid the jeepers uselessly much excluding everyday life.
            </h4>
            <div class="hline"></div>
            <p class="info-desc">
              It is a paradisematic country, in which roasted parts of sentences
              fly into your mouth. Even the all-powerful Pointing has no control
              about the blind texts it is an almost unorthographic life One day
              however a small line of blind text by the name of Lorem Ipsum
              decided to leave for the far World of Grammar.
            </p>
          </div>
        </div>
      </div>
      <div class="team">
        <div class="title">
          <div class="hline"></div>
          <span>our team</span>
          <div class="hline"></div>
        </div>
        <div class="wrapper">
          <div v-for="(item, index) in authors" :key="index" class="team-item">
            <img class="item-picture" :src="item.image" alt="" />
            <h3 class="name">{{ item.name }}</h3>
            <span class="role">{{ item.role }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="bot-bg">
      <div class="timeline">
        <div class="title">
          <div class="hline"></div>
          <span>History timeline</span>
          <div class="hline"></div>
        </div>
        <div class="timeline-item">
          <span class="date"> October 2018 </span>
          <h4 class="event">One day hoever a small live</h4>
          <p class="desc">
            It is a paradisematic country, in which roasted parts of sentences
            fly into your mouth. Even the all-powerful Pointing has no control
            about the blind texts it is an almost unorthographic life One day
            however a small line of blind text by the name of Lorem Ipsum.
          </p>
          <div class="hline"></div>
          <div class="vline"></div>
        </div>
        <div class="timeline-item">
          <span class="date"> July 2018 </span>
          <h4 class="event">Overlaid the jeepers uselessly</h4>
          <p class="desc">
            It is a paradisematic country, in which roasted parts of sentences
            fly into your mouth. Even the all-powerful Pointing has no control
            about the blind texts it is an almost unorthographic life One day
            however a small line of blind text by the name of Lorem Ipsum.
          </p>
          <div class="hline"></div>
          <div class="vline"></div>
        </div>
        <div class="timeline-item">
          <span class="date"> December 2017 </span>
          <h4 class="event">One day hoever a small live</h4>
          <p class="desc">
            It is a paradisematic country, in which roasted parts of sentences
            fly into your mouth. Even the all-powerful Pointing has no control
            about the blind texts it is an almost unorthographic life One day
            however a small line of blind text by the name of Lorem Ipsum.
          </p>
          <div class="hline"></div>
          <div class="vline"></div>
        </div>
        <div class="timeline-item">
          <span class="date"> September 2017 </span>
          <h4 class="event">We've started CoffeeStyle.</h4>
          <p class="desc"></p>
          <div class="hline"></div>
          <div class="vline"></div>
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
  name: "About",
  components: {
    Header,
    Footer,
    Subcribe,
  },
  data() {
    return {
      authors: this.$store.state.authors,
      showModal: null,
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
  },
};
</script>

<style lang="scss" scoped>
.bg-fixed {
  width: 100%;
  height: 100%;
  position: fixed;
  object-fit: cover;
  z-index: -101;
}

.about {
  width: 100%;

  display: flex;
  flex-direction: column;
  font-family: "Karla", sans-serif;

  .top-bg {
    background: #fff;
    width: 100%;

    .hero {
      margin: 0 auto;
      width: 95%;
      height: 62vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      background: #f0f0f0;

      .hero-title {
        margin-top: 12vh;
        font-size: 36px;
        font-weight: 400;
        margin-bottom: 60px;
        letter-spacing: 2px;
      }

      .hero-desc {
        width: 40%;
        line-height: 26px;
        text-align: center;
        font-size: 18px;
        font-weight: 300;
        color: gray;
      }

      .hero-bg {
        width: 1000px;
        height: 350px;
        object-fit: cover;
        position: absolute;
        top: 45vh;
      }
    }

    .introduction {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 45%;
      margin: 0 auto;
      margin-top: 45vh;
      text-align: center;
      background: #fff;

      .intro-title {
        font-size: 30px;
        font-weight: 400;
        margin-bottom: 40px;
      }

      .intro-desc {
        color: gray;
        line-height: 24px;
        letter-spacing: 1px;
      }
    }

    .content-wrap {
      background: #fff;
      margin-top: 10vh;
      display: flex;
      flex-direction: column;
      gap: 15vh;

      .content-item {
        width: 60%;
        margin: 0 auto;
        display: flex;
        gap: 80px;

        img {
          width: 420px;
          height: 300px;
          object-fit: cover;
        }

        .info {
          display: flex;
          flex-direction: column;
          gap: 20px;
          justify-content: center;

          .info-title {
            font-size: 24px;
            font-weight: 400;
          }

          .hline {
            width: 40px;
            height: 1px;
            background: gray;
          }

          .info-desc {
            line-height: 26px;
            color: gray;
          }
        }
      }

      .content-item:nth-child(2) {
        img {
          order: 1;
        }
        .info {
          order: 0;
        }
      }
    }

    .team {
      background: #fff;
      margin: 20vh 0;
      display: flex;
      flex-direction: column;
      align-items: center;

      .wrapper {
        display: flex;
        gap: 20px;

        .team-item {
          display: flex;
          flex-direction: column;
          align-items: center;

          .item-picture {
            width: 275px;
            height: 400px;
            object-fit: cover;
          }

          .name {
            margin-top: 30px;
            font-size: 18px;
            font-weight: 400;
          }

          .role {
            font-size: 13px;
            margin-top: 22px;
            text-transform: uppercase;
            color: gray;
            letter-spacing: 1px;
          }
        }
      }
    }
  }

  .bot-bg {
    margin-top: 45vh;
    background: #fff;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .timeline {
      margin-top: 15vh;
      margin-bottom: 10vh;
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 50px;

      .timeline-item {
        display: flex;
        flex-direction: column;
        align-items: center;

        .date {
          font-size: 13px;
          text-transform: uppercase;
          color: gray;
          margin-bottom: 20px;
          letter-spacing: 1px;
        }

        .event {
          font-size: 20px;
          font-weight: 400;
          margin-bottom: 25px;
        }

        .desc {
          text-align: center;
          width: 80%;
          line-height: 24px;
          color: gray;
        }

        .hline {
          margin-top: 50px;
          width: 200px;
          height: 1px;
          background: rgba($color: #000000, $alpha: 0.1);
        }

        .vline {
          margin-bottom: 10px;
          width: 1px;
          height: 100px;
          background: rgba($color: #000000, $alpha: 0.1);
        }
      }
    }
  }
}
</style>
