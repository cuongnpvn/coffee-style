import { createStore } from "vuex";

export default createStore({
  state: {
    blogs: [
      {
        id: 1,
        name: "More coffee, lower death risk?",
        desc: "Eveniet itaque aperiam qui officia in ducimus. Voluptas culpa ut eligendi in. Minima est dolores dolore aut et et alias p",
        date: "OCTOBER 9, 2018",
        image: require("@/assets/blog1.jpg"),
        featured: false,
        author: "Harry Potter",
        category: "Barista",
      },
      {
        id: 2,
        name: "How long does a cup of coffee keep you awake?",
        desc: "It is a paradisematic country, in which roasted parts. Vel qui et ad voluptatem.",
        date: "NOVEMBER 12, 2019",
        image: require("@/assets/blog2.jpg"),
        featured: false,
        author: "Harry Potter",
        category: "Coffee",
      },
      {
        id: 3,
        name: "Health Check: why do I get a headache when I haven’t had my coffee?",
        desc: "It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
        date: "MARCH 8, 2020",
        image: require("@/assets/blog3.jpg"),
        featured: true,
        author: "Hermione Granger",
        category: "Coffee",
      },
      {
        id: 4,
        name: "Recent research suggests that heavy coffee drinkers may reap health benefits.",
        desc: "It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
        date: "OCTOBER 9, 2020",
        image: require("@/assets/blog4.jpg"),
        featured: false,
        author: "Hermione Granger",
        category: "Lifestyle",
      },
      {
        id: 5,
        name: "Will drinking coffee prolong your life?",
        desc: "Aliquid aperiam accusantium quam ipsam. Velit rerum veniam optio illo dolor delectus et recusandae. Impedit aut cupiditate.",
        date: "OCTOBER 9, 2021",
        image: require("@/assets/blog5.jpg"),
        featured: true,
        author: "Ron Weasley",
        category: "Others",
      },
    ],
    authors: [
      {
        name: "Harry Potter",
        role: "Brand Owner",
        image: require("@/assets/author1.jpg"),
      },
      {
        name: "Ron Weasley",
        role: "Brand Owner",
        image: require("@/assets/author2.jpg"),
      },
      {
        name: "Hermione Granger",
        role: "Brand Owner",
        image: require("@/assets/author3.jpg"),
      },
    ],
    products: [
      {
        id: 1,
        name: "Espresso",
        price: 25.99,
        onSale: false,
        category: "Standard",
        image: require("@/assets/coffee1.jpg"),
      },
      {
        id: 2,
        name: "Affogato",
        price: 25.99,
        onSale: false,
        category: "Premium",
        image: require("@/assets/coffee2.jpg"),
      },
      {
        id: 3,
        name: "Latte",
        price: 25.99,
        onSale: false,
        category: "Standard",
        image: require("@/assets/coffee3.jpg"),
      },
      {
        id: 4,
        name: "Long Black",
        price: 25.99,
        onSale: false,
        category: "Premium",
        image: require("@/assets/coffee4.jpg"),
      },
      {
        id: 5,
        name: "Cappuccino",
        price: 25.99,
        onSale: false,
        category: "Premium",
        image: require("@/assets/coffee5.jpg"),
      },
      {
        id: 6,
        name: "Piccolo Latte",
        price: 25.99,
        onSale: false,
        category: "Premium",
        image: require("@/assets/coffee6.jpg"),
      },
      {
        id: 7,
        name: "Short Macchiato",
        price: 25.99,
        onSale: false,
        category: "Classic",
        image: require("@/assets/coffee7.jpg"),
      },
      {
        id: 8,
        name: "Long Macchiato",
        price: 25.99,
        onSale: false,
        category: "Classic",
        image: require("@/assets/coffee8.jpg"),
      },
      {
        id: 9,
        name: "Flavoured Latte",
        price: 25.99,
        onSale: false,
        category: "Classic",
        image: require("@/assets/coffee9.jpg"),
      },
      {
        id: 10,
        name: "Vienna",
        price: 25.99,
        onSale: false,
        category: "Standard",
        image: require("@/assets/coffee10.jpg"),
      },
      {
        id: 11,
        name: "Choc Vienna",
        price: 25.99,
        onSale: false,
        category: "Others",
        image: require("@/assets/coffee11.jpg"),
      },
      {
        id: 12,
        name: "Chai Latte",
        price: 25.99,
        onSale: false,
        category: "Others",
        image: require("@/assets/coffee12.jpg"),
      },
      {
        id: 13,
        name: "Flat White",
        price: 25.99,
        onSale: false,
        category: "Standard",
        image: require("@/assets/coffee13.jpg"),
      },
      {
        id: 14,
        name: "Hot Chocolate",
        price: 25.99,
        onSale: false,
        category: "Takeaway",
        image: require("@/assets/coffee14.jpg"),
      },
      {
        id: 15,
        name: "Snow Mocha",
        price: 25.99,
        onSale: false,
        category: "Takeaway",
        image: require("@/assets/coffee15.jpg"),
      },
      {
        id: 16,
        name: "Adventure Begins Mug",
        price: 99.89,
        image: require("@/assets/product-mug1.jpg"),
      },
      {
        id: 17,
        name: "Black Designers Mug",
        price: 69.89,
        image: require("@/assets/product-mug2.jpg"),
      },
    ],
    cart: [],
  },
  getters: {
    getAuthorByPostId: (state) => (id) => {
      let curBlog = state.blogs.find((blog) => blog.id == id);
      return state.authors.find((author) => author.name == curBlog.author);
    },
    getPostById: (state) => (id) => {
      return state.blogs.find((blog) => blog.id == id);
    },
    getProductById: (state) => (id) => {
      return state.products.find((product) => product.id == id);
    },
    getTotal: (state) => {
      let total = 0;
      state.cart.forEach((item) => {
        total += item.price * item.qty;
      });
      return total;
    },
    getCartLength: (state) => {
      let total = 0;
      state.cart.forEach((item) => {
        total += item.qty;
      });
      return total;
    },
  },
  mutations: {
    addItem(state, newItem) {
      let foundIdx = state.cart.findIndex((item) => item.id == newItem.id);
      if (foundIdx !== -1) {
        let newQty = state.cart[foundIdx].qty + newItem.qty;
        state.cart[foundIdx] = { ...state.cart[foundIdx], qty: newQty };
      } else {
        state.cart.push(newItem);
      }
    },
  },
  actions: {
    addItem(context, { id, qty }) {
      let newItem = this.state.products.find((product) => product.id == id);
      newItem.qty = qty;
      context.commit("addItem", newItem);
    },
  },
  modules: {},
});
