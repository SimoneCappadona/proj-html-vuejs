<script>
import { defineComponent } from 'vue'
  import { VideoPlayer } from '@videojs-player/vue'
  import 'video.js/dist/video-js.css'
export default defineComponent({
  data() {
    return {
      showImage: true,
      showVideo: false,
    };
  },
  methods: {
    playButton() {
      this.showVideo = true;
      this.showImage = false;
    },
  },
  components: {
    VideoPlayer
  }
});
</script>

<template>
  <!-- Header with bg img -->
  <header>
    <div class="container">
      <div class="d-flex flex-row justify-content-between">
        <!-- Logo -->
        <div class="logo p-3">
          <img src="../assets/img/logo.png" alt="" />
        </div>
        <!-- Link List -->
        <ul class="text-light navbar gap-5 p-3 mylink fw-medium">
          <li>Home</li>
          <li>About Us</li>
          <li>Portfolio</li>
          <li>Out Process</li>
          <li>Pricing</li>
          <li>Blog</li>
          <li>Contact</li>
          <!-- Button -->
          <button class="btn btn-light rounded-pill fw-medium mybtn">
            Get a Quote
          </button>
        </ul>
      </div>
      <!-- Title and Comments -->
      <div class="text-center mt-5">
        <div class="content fw-bolder fs-4">Imagine, Create, Experience</div>
        <h1 class="titlehead">We Animate With Ninja-Like Precision</h1>
        <p class="undertitle fs-5 mt-3">
          We are a character-driven animation studio striving to make
          high-quality animations.
        </p>
        <!-- Button  -->
        <div class="d-flex justify-content-center gap-3 mt-5">
          <button class="btn btn-light rounded-pill mybtn">
            Start a Project
          </button>
          <button class="btn btn-outline-light rounded-pill mybtn">
            Portfolio
          </button>
        </div>
        <!-- Clip with icon play and rounded bg -->
        <div class="clip d-flex justify-content-center mt-5">
          <img
            src="../assets/img/middle.png"
            alt=""
            class="videohead mb-5"
            v-if="showImage"
          />
          <video-player
            src="../assets/img/video/astronaut_-_88140 (540p).webm"
            class="cliphead rounded-5 video-js"
            type="video.webm"
            v-if="showVideo"
            controls
            :loop="true"
            :volume="0.2"
            @play="playButton()"   
            @pause="playButton()"     
          />
          <div class="roundedicon">
            <i
              class="fa-solid fa-play fa-lg playicon"
              @click="playButton()"
              style="color: #ffffff"
            ></i>
          </div>
        </div>
      </div>
    </div>
    <!-- P.Absolute images -->
    <img src="../assets/img/left-man.png" alt="" class="leftmanhead" />
    <img src="../assets/img/right-man.png" alt="" class="rightmanhead" />
    <img src="../assets/img/dots-left.png" alt="" class="dotslefthead" />
    <img src="../assets/img/dots-right.png" alt="" class="dotsrighthead" />
    <img src="../assets/img/globe1.png" alt="" class="globe1head" />
    <img src="../assets/img/globe3.png" alt="" class="globe3head" />
    <img src="../assets/img/globe2.png" alt="" class="globe2head" />
    <img src="../assets/img/light.png" alt="" class="lighthead" />
    <!-- Close header -->
  </header>
</template>

<style lang="scss">
@use "../assets/style/general.scss";
@use "../assets/style/partials/variables.scss" as *;

// Header bg
header {
  background-image: url(../assets/img/banner-bg.png);
  background-repeat: no-repeat;
  max-width: 100%;
}
// Ul/Li Reset
ul li {
  cursor: pointer;
}

.content {
  color: $lightorange;
  z-index: 2;
}
.titlehead,
.undertitle {
  color: $white;
}
.titlehead {
  font-size: 80px;
}
.mylink {
  z-index: 1;
}

.mybtn {
  box-shadow: 0px 2px 2px white;
}
// Icon
.playicon {
  border-radius: 50%;
  background-color: $bluepurle;
  width: 50px;
  aspect-ratio: 1;
  line-height: 50px;
  cursor: pointer;
  position: absolute;
  top: 14%;
  left: 14%;
  z-index: 2;
}
// Icon
.roundedicon {
  border-radius: 50%;
  background-color: rgba(77, 54, 220, 0.5);
  width: 70px;
  aspect-ratio: 1;
  line-height: 65px;
  position: absolute;
  top: 80%;
  z-index: 2;
}
// Img Left
.leftmanhead {
  position: absolute;
  z-index: 1;
  top: 300px;
  padding: 10px;
  height: 400px;
}
// Img Right
.rightmanhead {
  z-index: 1;
  position: absolute;
  top: 300px;
  right: 0;
  padding: 5px;
  height: 400px;
}
// Img Left
.dotslefthead {
  position: absolute;
  top: 220px;
  left: 50px;
}
// z-index for central img
.videohead {
  z-index: 1;
}
// Img Right
.dotsrighthead {
  position: absolute;
  top: 150px;
  right: 50px;
}
// Img Left
.globe1head {
  position: absolute;
  top: 90px;
  padding: 20px;
  left: 200px;
}
// Img Top
.globe3head {
  position: absolute;
  top: -250px;
  right: 50%;
}
// Img Right
.globe2head {
  position: absolute;
  top: 280px;
  right: 30%;
}
// Img Right
.lighthead {
  position: absolute;
  top: 100px;
  right: 15%;
}
.cliphead {
}
</style>
