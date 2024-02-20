<script>
export default {
  data() {
    return {
      currentImg: 0,
      // Immagini
      teamMember: [
        {
          src: "../assets/img/team1.png",
          surname:"Robert Coleman",
          mansion:"Owner & Creative Director"
        },
        {
          src: "../assets/img/team2.png",
          surname:"Don Woods",
          mansion:"Administrator",
        },
        {
          src: "../assets/img/team3.png",
          surname:"Tomas Nash",
          mansion:"2d Animator & Compositor",
        },
        {
          src: "../assets/img/team2.png",
          surname:"Cotton Fiock",
          mansion:"C.E.O",
        },
        {
          src: "../assets/img/team1.png",
          surname:"Barbon Cino",
          mansion:"Pet Sitter",
        },
        {
          src: "../assets/img/team1.png",
          surname:"Bustina Di Thè",
          mansion:"Master in Food Machines",
        },
      ],
    };
  },
  methods: {
    prevImage() {
      this.currentImg--;

      if (this.currentIm < 0) {
        this.currentIm = this.teamMember.lenght - 1;
      }
    },
    nextImage() {
      this.currentImg++;
      if (this.currentImg > this.teamMember.lenght - 1) {
        this.currentImg = 0;
      }
    },
    clickImage(index) {
      this.currentImg = index;
    },
  },
};
</script>
<template>
  <div class="container">
    <div class="card" style="width: 18rem;">
  <img :src="teamMember[currentImg].src"
  :alt="teamMember[currentimg].surname" class="card-img-top">
  <div class="card-body text-center">
    <h5 class="card-title">{{teamMember[currentimg].surname}}</h5>
    <p class="card-text">{{teamMember[currentimg].mansion}}</p>
  </div>
</div>
    <div class="slider-wrapper" :tabindex="currentImg">
      <div class="thumbs">
        <div @click="prevImage()" class="prev"></div>
        <div @click="nextImage()" class="next"></div>
        <div v-for="(thumb, index) in teamMember" class="thumb">
          <img
            :src="thumb.src"
            alt=""
            class="thumb"
            :class="index === currentImg ? 'active' : ''"
            @click="clickImage(index)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use "../assets/style/general.scss";
@use "../assets/style/partials/variables.scss" as *;

</style>
