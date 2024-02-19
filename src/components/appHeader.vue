<script>
export default {};
</script>

<template>
  <header>
    <div class="container">
      <div class="d-flex flex-row justify-content-between">
        <div class="logo p-3">
          <img src="../assets/img/logo.png" alt="" />
        </div>
        <ul class="text-light navbar gap-3 p-3">
          <li>Home</li>
          <li>About Us</li>
          <li>Portfolio</li>
          <li>Out Process</li>
          <li>Pricing</li>
          <li>Blog</li>
          <li>Contact</li>
          <button class="btn btn-light rounded-pill fw-medium mybtn">
            Get a Quote
          </button>
        </ul>
      </div>
      <div class="text-center mt-5">
        <div class="content fw-bolder fs-4">Imagine, Create, Experience</div>
        <h1 class="titlehead">We Animate With Ninja-Like Precision</h1>
        <p class="undertitle fs-5 mt-3">
          We are a character-driven animation studio striving to make
          high-quality animations.
        </p>
        <div class="d-flex justify-content-center gap-3 mt-5">
          <button class="btn btn-light rounded-pill mybtn">
            Start a Project
          </button>
          <button class="btn btn-outline-light rounded-pill mybtn">
            Portfolio
          </button>
        </div>
        <div class="clip d-flex justify-content-center mt-5">
          <img src="../assets/img/middle.png" alt="" />
          <div class="roundedicon">
            <i
            class="fa-solid fa-play fa-lg playicon"
            style="color: #ffffff"
            ></i>
          </div>
        </div>
      </div>
    </div>
    <img src="../assets/img/left-man.png" alt="" class="leftmanhead">
    <img src="../assets/img/right-man.png" alt="" class="rightmanhead">
  </header>
</template>

<style lang="scss">
@use "../assets/style/general.scss";
@use "../assets/style/partials/variables.scss" as *;

header {
  background-image: url(../assets/img/banner-bg.png);
  background-repeat: no-repeat;
  max-width: 100%;
}

ul li {
  cursor: pointer;
}
.content {
  color: $lightorange;
}
.titlehead,
.undertitle {
  color: $white;
}
.titlehead {
  font-size: 80px;
}

.mybtn {
  box-shadow: 0px 2px 2px white;
}
.playicon {
  border-radius: 50%;
  z-index: 1;
  background-color: $bluepurle;
  width: 50px;
  aspect-ratio: 1;
  line-height: 50px;
  cursor: pointer;
}
.roundedicon {
  border-radius: 50%;
  background-color: rgba(77, 54, 220, 0.5);
  width: 70px;
  aspect-ratio: 1;
  line-height: 65px;
  position: absolute;
  top: 80%;
}
.leftmanhead{
  position: absolute;
  top: 300px;
  padding: 10px;
  height: 400px;
  }
  .rightmanhead{
    position: absolute;
    top: 300px;
    right: 0;
    padding: 5px;
    height: 400px;
  }
</style>
