<template>
  <Header v-on:toggleModal="toggleModal" />
  <transition name="checkout">
    <CheckModal v-if="showModal" v-on:toggleModal="toggleModal" />
  </transition>
  <div class="blogdetail">
    <div class="hero">
      <div class="heading">
        <h1 class="heading-title">
          {{ postInfo.name }}
        </h1>
        <h3 class="subtitle">
          {{ postInfo.desc }}
        </h3>
      </div>
      <img :src="postInfo.image" alt="" />
    </div>
    <main>
      <div class="author">
        <span class="written">written by</span>
        <img :src="author.image" alt="" />
        <h4 class="author-name">{{ author.name }}</h4>
        <p class="author-desc">
          Tempora vel voluptate. Aut dolorum officia qui officia nostrum porro.
          Voluptas ut id quo.
        </p>
        <div class="all-posts"><span>All author's posts</span></div>
      </div>
      <div class="date">
        <div class="date-item">November 12, 2019</div>
        <div class="hline"></div>
      </div>

      <h4 class="heading1">Vel qui et ad voluptatem.</h4>
      <p>
        Libero minus et quae est ipsum molestiae eos. Tempore aut expedita culpa
        maiores. Saepe quia sed earum ratione sequi. Aperiam reprehenderit quod
        necessitatibus. Temporibus deserunt vero ut quia enim sapiente.
      </p>
      <h5 class="heading2">Nesciunt rerum recusandae omnis nam ad id.</h5>
      <p>
        Libero minus et quae est ipsum molestiae eos. Tempore aut expedita culpa
        maiores. Saepe quia sed earum ratione sequi. Aperiam reprehenderit quod
        necessitatibus. Temporibus deserunt vero ut quia enim sapiente. Id
        cupiditate cum sequi eum neque dolorem dicta quisquam non. Quas vel
        perferendis accusantium eum cum voluptates libero doloribus voluptates.
        A et quia qui quia. Sunt tempore est sit facilis. Amet suscipit omnis
        eum necessitatibus quos doloribus. Ut placeat et corrupti.
      </p>
      <img src="@/assets/blog-detail.jpg" alt="" />
      <p>
        Reprehenderit quisquam omnis omnis velit commodi. Animi quaerat sed
        repellendus. Perspiciatis rerum commodi dolore consequatur voluptates
        accusantium velit. Aut dicta iusto neque ea voluptates. Ducimus est ut
        neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae
        labore.
      </p>
      <p>
        Libero minus et quae est ipsum molestiae eos. Tempore aut expedita culpa
        maiores. Saepe quia sed earum ratione sequi. Aperiam reprehenderit quod
        necessitatibus. Temporibus deserunt vero ut quia enim sapiente.
      </p>
      <h5 class="heading2">Nesciunt rerum recusandae omnis nam ad id.</h5>
      <p>
        Libero minus et quae est ipsum molestiae eos. Tempore aut expedita culpa
        maiores. Saepe quia sed earum ratione sequi. Aperiam reprehenderit quod
        necessitatibus. Temporibus deserunt vero ut quia enim sapiente. Id
        cupiditate cum sequi eum neque dolorem dicta quisquam non. Quas vel
        perferendis accusantium eum cum voluptates libero doloribus voluptates.
        A et quia qui quia. Sunt tempore est sit facilis. Amet suscipit omnis
        eum necessitatibus quos doloribus. Ut placeat et corrupti.
      </p>
      <img src="@/assets/blog-detail.jpg" alt="" />
      <p>
        Reprehenderit quisquam omnis omnis velit commodi. Animi quaerat sed
        repellendus. Perspiciatis rerum commodi dolore consequatur voluptates
        accusantium velit. Aut dicta iusto neque ea voluptates. Ducimus est ut
        neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae
        labore.
      </p>
    </main>
    <div class="further-read">
      <div class="title">
        <div class="hline"></div>
        <span>you might also like these</span>
        <div class="hline"></div>
      </div>
      <div class="wrapper">
        <div
          v-for="(item, index) in getMorePosts"
          :key="index"
          class="wrapper-item"
        >
          <div class="img-wrap">
            <img :src="item.image" alt="" />
            <div class="explore-effect"></div>
            <div @click="toPost(item.id)" class="explore-product">
              Read Full Story
            </div>
          </div>
          <h3 class="item-title">
            {{ item.name }}
          </h3>
          <p class="item-desc">
            {{ item.desc }}
          </p>
          <span class="date">{{ item.date }}</span>
        </div>
      </div>
    </div>
    <router-link :to="{ name: 'Blog' }" class="all-article"
      >View all articles</router-link
    >
  </div>
  <Subcribe />
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import Subcribe from "@/components/Subcribe.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "BlogDetail",
  components: {
    Header,
    Subcribe,
    Footer,
  },
  beforeCreate() {
    window.scrollTo(0, 0);
  },
  data() {
    return {
      postInfo: this.$store.getters.getPostById(this.$route.params.id),
      morePosts: this.$store.state.blogs,
      author: this.$store.getters.getAuthorByPostId(this.$route.params.id),
      showModal: null,
    };
  },

  created() {},
  methods: {
    toPost(id) {
      this.$router.push({ name: "BlogDetail", params: { id: id } });
      window.scrollTo(0, 0);
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
  },
  computed: {
    getMorePosts() {
      return this.morePosts.slice(0, 2);
    },
  },
};
</script>

<style lang="scss" scoped>
.blogdetail {
  width: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
  font-family: "Karla", sans-serif;

  .hero {
    margin-top: 12vh;
    margin-left: 8%;
    display: flex;
    flex-direction: column;

    .heading {
      margin-left: 8%;
      display: flex;
      flex-direction: column;
      margin-bottom: 130px;

      .heading-title {
        font-size: 44px;
        font-weight: 400;
        width: 60%;
        margin-bottom: 40px;
      }

      .subtitle {
        width: 60%;
        font-size: 20px;
        color: rgba($color: #000000, $alpha: 0.7);
        line-height: 30px;
      }
    }

    img {
      height: 600px;
      object-fit: cover;
    }
  }

  main {
    margin: 0 8%;
    padding-left: 35%;
    padding-top: 8vh;
    padding-bottom: 8vh;
    border: 1px solid gray;
    border-width: 0 1px 1px 1px;
    position: relative;

    .author {
      position: absolute;
      top: -100px;
      left: 5%;
      z-index: 99;
      width: 350px;
      height: 500px;
      border: 1px solid gray;
      padding: 30px 40px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      background: #fff;

      .written {
        text-transform: uppercase;
        color: rgba($color: #000000, $alpha: 0.7);
        letter-spacing: 2px;
        font-size: 13px;
      }

      img {
        width: 100%;
        height: 200px;
        object-fit: cover;
      }

      .author-name {
        font-size: 18px;
      }

      .author-desc {
        color: rgba($color: #000000, $alpha: 0.7);
        line-height: 24px;
        margin-bottom: 10px;
      }

      .all-posts {
        width: fit-content;
        height: 55px;
        border: 2px solid rgba($color: #000000, $alpha: 0.7);
        border-width: 0 0 2px 0;
      }

      .all-posts:hover {
        border-color: #000;
      }
    }

    .date {
      margin-top: 20px;
      margin-bottom: 10vh;
      display: flex;
      align-items: center;
      gap: 20px;

      .date-item {
        width: 200px;
        font-size: 13px;
        text-transform: uppercase;
        color: gray;
        letter-spacing: 2px;
      }

      .hline {
        width: 100%;
        height: 1px;
        background: gray;
      }
    }

    .heading1 {
      font-size: 26px;
      margin-bottom: 20px;
    }

    p {
      line-height: 24px;
      color: rgba($color: #000000, $alpha: 0.7);
    }

    .heading2 {
      font-size: 18px;
      margin: 15px 0;
    }

    img {
      margin: 20px 0;
      width: 100%;
      height: 400px;
      object-fit: cover;
    }
  }

  .further-read {
    width: 65%;
    margin: 8vh auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .wrapper {
      width: 100%;
      display: flex;
      gap: 50px;
      justify-content: center;

      .wrapper-item {
        display: flex;
        flex-direction: column;

        img {
          width: 450px;
          object-fit: cover;
        }

        .item-title {
          margin-top: 20px;
        }

        .item-desc {
          margin-top: 15px;
          color: rgba($color: #000000, $alpha: 0.7);
        }

        .date {
          margin-top: 20px;
          text-transform: uppercase;
          font-size: 13px;
          color: rgba($color: #000000, $alpha: 0.7);
          letter-spacing: 1px;
        }
      }
    }
  }

  .all-article {
    margin: 0 auto;
    margin-bottom: 10vh;
    width: 200px;
    height: 50px;
    border: none;
    background: rgba($color: #000000, $alpha: 0.7);
    cursor: pointer;
    transition: 400ms ease all;
    text-transform: uppercase;
    color: #fff;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .all-article:hover {
    background: rgba($color: #000000, $alpha: 0.5);
  }
}
</style>
