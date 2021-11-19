<template>
  <div class="subcribe">
    <div class="wrapper">
      <div class="title">
        <div class="hline"></div>
        <span>Sign up and get free coffee bags</span>
        <div class="hline"></div>
      </div>
      <h2>Coffee Updates</h2>
      <div class="input-wrap">
        <input type="text" placeholder="CUSTOMER@COFFEESTYLE.IO" />
        <button>subcribe</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.subcribe {
  margin: 0 auto;
  width: 100%;
  height: 60vh;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Source Sans Pro", sans-serif;

  .wrapper {
    width: 98%;
    height: 45vh;
    background: #421900;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .title {
      margin-bottom: 30px;
      display: flex;
      align-items: center;
      gap: 20px;

      .hline {
        width: 80px;
        height: 2px;
        background: #f0f0f0;
      }

      span {
        letter-spacing: 1px;
        text-transform: uppercase;
        color: gray;
      }
    }

    h2 {
      color: #fff;
      letter-spacing: 1px;
      margin-bottom: 50px;
      font-size: 36px;
      font-weight: 400;
    }

    .input-wrap {
      display: flex;
      gap: 10px;
      height: 50px;

      input {
        width: 350px;
        padding-left: 12px;
        border: 1px solid rgba($color: #fff, $alpha: 0.3);
        outline: none;
        background: none;
        transition: 400ms ease all;
        color: rgba($color: #fff, $alpha: 0.7);
      }

      input:hover {
        border-color: #fff;
      }

      button {
        width: 150px;
        font-size: 17px;
        font-family: "Source Open Sans", sans-serif;
        letter-spacing: 1px;
        text-transform: uppercase;
        cursor: pointer;
        border: none;
        font-size: 13px;
        font-weight: 600;
        color: 421900;
      }
    }
  }
}
</style>
