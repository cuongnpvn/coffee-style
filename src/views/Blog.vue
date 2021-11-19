<template>
  <Header v-on:toggleModal="toggleModal" />
  <transition name="checkout">
    <CheckModal v-if="showModal" v-on:toggleModal="toggleModal" />
  </transition>
  <div class="blog">
    <div class="hero">
      <div class="title">
        <h1>Read coffee stories on our Blog</h1>
        <p class="subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
          voluptatum?
        </p>
        <div class="post-header">
          <div class="hline"></div>
          <span>Featured posts</span>
          <div class="hline"></div>
        </div>
        <div class="post-wrap">
          <div
            @click="toPost(item.id)"
            v-for="(item, index) in getFeaturedPosts"
            :key="index"
            class="post-item"
          >
            <div class="img-wrap">
              <img :src="item.image" alt="" />
              <div class="explore-effect"></div>
              <div @click="toProduct(item.id)" class="explore-product">
                Read Full Story
              </div>
            </div>
            <h3 class="name">{{ item.name }}</h3>
            <p class="desc">
              {{ item.desc }}
            </p>
            <span class="date">{{ item.date }}</span>
          </div>
        </div>
      </div>
    </div>
    <main>
      <div class="latest-post">
        <div class="title">
          <h2>Latest Posts</h2>
          <div class="hline"></div>
        </div>
        <div class="article-wrap">
          <div
            @click="toPost(item.id)"
            v-for="(item, index) in getFilteredPosts"
            :key="index"
            class="article-item"
          >
            <div class="img-wrap">
              <img :src="item.image" alt="" />
              <div class="explore-effect"></div>
              <div @click="toProduct(item.id)" class="explore-product">
                Explore More
              </div>
            </div>
            <div class="info">
              <h3 class="name">{{ item.name }}</h3>
              <p class="desc">
                {{ item.desc }}
              </p>
              <div class="date">{{ item.date }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="right-section">
        <div class="about-us">
          <div class="title">
            <h2>About Us</h2>
            <div class="hline"></div>
          </div>
          <div class="story">
            <h2 class="name">CoffeeStyle.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
              saepe nisi hic eius nulla esse ipsum eligendi voluptatem, neque
              similique.
            </p>
            <router-link :to="{ name: 'About' }" class="explore"
              >Read the full story</router-link
            >
          </div>
        </div>
        <div class="categories">
          <div class="title">
            <h2>Categories</h2>
            <div class="hline"></div>
          </div>
          <div @click="setFilterPostByCat('Barista')" class="cat-item">
            <span>Barista</span>
          </div>
          <div @click="setFilterPostByCat('Coffee')" class="cat-item">
            <span>Coffee</span>
          </div>
          <div @click="setFilterPostByCat('Lifestyle')" class="cat-item">
            <span>Lifestyle</span>
          </div>
          <div @click="setFilterPostByCat('Others')" class="cat-item">
            <span>Others</span>
          </div>
        </div>
        <div class="authors">
          <div class="title">
            <h2>Authors</h2>
            <div class="hline"></div>
          </div>
          <div
            @click="setFilterPostByAuth(item.name)"
            v-for="(item, index) in authors"
            :key="index"
            class="auth-item"
          >
            <img :src="item.image" alt="" />
            <span class="name">{{ item.name }}</span>
          </div>
        </div>
      </div>
    </main>
    <div class="quote">
      <div class="wrapper">
        <p>
          "I wake up some mornings and sit and have my coffee and look out at my
          beautiful garden, and <br />
          I go, ’Remember how good this is. Because you can lose it."
        </p>
      </div>
      <span>jason johnson - owner of coffeestyle</span>
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
  name: "Blog",
  components: {
    Header,
    Footer,
    Subcribe,
  },
  data() {
    return {
      latestPosts: this.$store.state.blogs,
      featurePosts: [],
      authors: this.$store.state.authors,
      filteredPosts: [],
      filterPostByCat: null,
      filterPostByAuth: null,
      showModal: null,
    };
  },
  beforeCreate() {
    window.scrollTo(0, 0);
  },
  methods: {
    toPost(id) {
      this.$router.push({ name: "BlogDetail", params: { id: id } });
    },
    setFilterPostByCat(value) {
      this.filterPostByCat = value;
    },
    setFilterPostByAuth(value) {
      this.filterPostByAuth = value;
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
  },
  computed: {
    getFeaturedPosts() {
      return this.latestPosts.filter((post) => post.featured == true);
    },
    getFilteredPosts() {
      if (!this.filterPostByCat && !this.filterPostByAuth) {
        return this.latestPosts;
      } else if (this.filterPostByCat && !this.filterPostByAuth) {
        return this.latestPosts.filter(
          (post) => post.category == this.filterPostByCat
        );
      } else if (!this.filterPostByCat && this.filterPostByAuth) {
        return this.latestPosts.filter(
          (post) => post.author == this.filterPostByAuth
        );
      } else {
        return this.latestPosts.filter(
          (post) =>
            post.author == this.filterPostByAuth &&
            post.category == this.filterPostByCat
        );
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.blog {
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: "Karla", sans-serif;
  background: #fff;

  .hero {
    margin: 0 auto;
    width: 95%;
    height: 72vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    background: #f0f0f0;

    .title {
      margin-top: 12vh;
      display: flex;
      flex-direction: column;
      align-items: center;

      h1 {
        margin-bottom: 55px;
        color: #000;
        font-size: 36px;
        font-weight: 400;
        letter-spacing: 2px;
      }

      .subtitle {
        text-align: center;
        margin-bottom: 45px;
        color: rgba($color: #000000, $alpha: 0.5);
        font-size: 18px;
        margin-bottom: 80px;
      }

      .post-header {
        display: flex;
        align-items: center;
        gap: 15px;

        .hline {
          margin: 0 10px;
          width: 45px;
          height: 1px;
          background: rgba($color: #000000, $alpha: 0.3);
        }

        span {
          font-size: 13px;
          color: rgba($color: #000000, $alpha: 0.7);
          text-transform: uppercase;
          letter-spacing: 1px;
        }
      }

      .post-wrap {
        position: absolute;
        top: 55vh;
        width: 90%;
        display: flex;
        justify-content: center;
        gap: 30px;

        .post-item {
          flex-basis: 40%;
          display: flex;
          flex-direction: column;
          text-align: left;

          img {
            width: 100%;
            height: 330px;
            object-fit: cover;
          }

          .name {
            margin: 24px 0;
            font-size: 20px;
            font-weight: 400;
          }

          .desc {
            text-align: left;
            color: rgba($color: #000000, $alpha: 0.5);
          }

          .date {
            margin-top: 20px;
            margin-bottom: 50px;
            text-transform: uppercase;
            color: rgba($color: #000000, $alpha: 0.5);
            font-size: 14px;
            font-weight: 600;
          }
        }
      }
    }
  }

  main {
    margin: 0 auto;
    width: 71%;
    margin-top: 60vh;
    display: flex;
    gap: 40px;

    .latest-post {
      flex-basis: 65%;
      display: flex;
      flex-direction: column;

      .title {
        margin-bottom: 30px;
        display: flex;
        flex-direction: column;
        gap: 20px;

        h2 {
          font-size: 24px;
          font-weight: 400;
        }

        .hline {
          width: 100%;
          height: 1px;
          background: gray;
        }
      }

      .article-wrap {
        display: flex;
        flex-direction: column;
        gap: 50px;

        .article-item {
          display: flex;
          gap: 30px;

          img {
            width: 250px;
            height: 200px;
            object-fit: cover;
          }

          .info {
            display: flex;
            flex-direction: column;

            .name {
              font-size: 22px;
              font-weight: 400;
              margin-bottom: 20px;
            }

            .desc {
              color: gray;
              margin-bottom: 30px;
            }

            .date {
              color: gray;
              font-weight: 600;
              text-transform: uppercase;
              font-size: 13px;
            }
          }
        }
      }
    }

    .right-section {
      flex-basis: 35%;
      display: flex;
      flex-direction: column;
      gap: 40px;

      .about-us {
        .title {
          margin-bottom: 20px;
          display: flex;
          flex-direction: column;
          gap: 20px;

          h2 {
            font-size: 24px;
            font-weight: 400;
          }

          .hline {
            width: 100%;
            height: 1px;
            background: gray;
          }
        }
        .story {
          display: flex;
          flex-direction: column;
          gap: 30px;

          h2 {
            font-size: 22px;
            font-weight: 600;
          }

          p {
            color: gray;
          }

          .explore {
            width: fit-content;
            padding-bottom: 5px;
            border: 2px solid gray;
            border-width: 0 0 2px 0;
            text-decoration: none;
            color: #000;
          }
        }
      }

      .categories {
        display: flex;
        flex-direction: column;
        gap: 10px;

        .title {
          margin-bottom: 20px;
          display: flex;
          flex-direction: column;
          gap: 20px;

          h2 {
            font-size: 24px;
            font-weight: 400;
          }

          .hline {
            width: 100%;
            height: 1px;
            background: gray;
          }
        }
        .cat-item {
          width: 100%;
          height: 45px;
          border: 2px solid gray;
          border-width: 0 0 0 2px;
          display: flex;
          align-items: center;
          cursor: pointer;
          transition: 400ms ease all;

          span {
            padding-left: 14px;
          }
        }

        .cat-item:hover {
          background: gray;
          border-color: black;
        }
      }

      .authors {
        display: flex;
        flex-direction: column;

        .title {
          margin-bottom: 20px;
          display: flex;
          flex-direction: column;
          gap: 20px;

          h2 {
            font-size: 24px;
            font-weight: 400;
          }

          .hline {
            width: 100%;
            height: 1px;
            background: gray;
          }
        }

        .auth-item {
          margin-bottom: 20px;
          width: 100%;
          height: 70px;
          display: flex;
          align-items: center;
          gap: 20px;
          border: 2px solid gray;
          border-width: 0 0 0 2px;
          padding-left: 18px;
          cursor: pointer;
          transition: 400ms ease all;

          img {
            width: 50px;
            height: 50px;
            object-fit: cover;
          }

          span {
            color: black;
          }
        }

        .auth-item:hover {
          background: gray;
        }
      }
    }
  }

  .quote {
    width: 100%;
    height: 65vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .wrapper {
      width: 70%;
      height: 19vh;
      border: 2px solid gray;
      border-width: 0 0 2px 2px;
      display: flex;
      justify-content: center;
      align-content: center;

      p {
        text-align: center;
        padding-top: 4vh;
        font-size: 22px;
      }
    }
    span {
      text-align: center;
      text-transform: uppercase;
      margin-top: 25px;
      color: gray;
      font-size: 14px;
      letter-spacing: 1px;
    }
  }
}
</style>
