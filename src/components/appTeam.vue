<script>
import appMember from "./appMember.vue";
export default {
  data() {
    return {
      cardIndex: 1,
      cards: [
        ,
        [
          {
            imageurl: "src/assets/img/team1.png",
            name: "Robert Coleman",
            job: "Owner & Creative Director",
          },
          {
            imageurl: "src/assets/img/team2.png",
            name: "Don Woods",
            job: "Administrator",
          },
          {
            imageurl: "src/assets/img/team4.png",
            name: "Tomas Nash",
            job: "2d Animator & Compositor",
          },
        ],
        [
          {
            imageurl: "src/assets/img/team1.png",
            name: "Barbon Cino",
            job: "Pet Sitter",
          },
          {
            imageurl: "src/assets/img/team4.png",
            name: "Coca Cola",
            job: "Master on Food Machines",
          },
          {
            imageurl: "src/assets/img/team2.png",
            name: "Olio Cuore",
            job: "Ambassador of Oil",
          },
        ],
        [
          {
            imageurl: "src/assets/img/team4.png",
            name: "Pape Rino",
            job: "C.E.O",
          },
          {
            imageurl: "src/assets/img/team2.png",
            name: "Burro Cacao",
            job: "Vendor",
          },
          {
            imageurl: "src/assets/img/team1.png",
            name: "Pinco Pallo",
            job: "Master on Dots",
          },
        ],
        [
          {
            imageurl: "src/assets/img/team2.png",
            name: "Topo Lino",
            job: "Co-C.E.O",
          },
          {
            imageurl: "src/assets/img/team1.png",
            name: "Pluto Wuf",
            job: "Wuf Wuf",
          },
          {
            imageurl: "src/assets/img/team4.png",
            name: "Qui Quo Qua",
            job: "Scout",
          },
        ],
      ],
      Social: [
        "fa-brands fa-facebook-f",
        "fa-brands fa-twitter",
        "fa-brands fa-instagram",
      ],
    };
  },
  methods: {
    nextCard() {
      this.cardIndex++;
      if (this.cardIndex > this.cards.length - 1) {
        this.cardIndex = 1;
      }
    },
    prevCard() {
      this.cardIndex--;
      if (this.cardIndex < 1) {
        this.cardIndex = this.cards.length - 1;
      }
    },
  },
  components: { appMember },
};
</script>
<template>
  <div class="container">
    <appMember :card="cards[cardIndex]" />
    <div class="d-flex gap-3 justify-content-center">
      <button class="btn btn-outline-secondary rounded-5 rounded-circle" @click="prevCard()">
        <i class="fa-solid fa-arrow-left"></i>
      </button>
      <div
        class="dots mt-1"
        v-for="i in 4"
        
      >
        <i class="fa-solid fa-circle fa-xs" :class="i == cardIndex ? 'active' : ''"></i>
      </div>
      <button class="btn btn-outline-secondary rounded-5 rounded-circle" @click="nextCard()">
        <i class="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  </div>
</template>

<style lang="scss">
@use "../assets/style/general.scss";
@use "../assets/style/partials/variables.scss" as *;

.social {
  border: 0.5px solid $purplegrey;
  color: $bluepurle;
  border-radius: 50%;
  line-height: 50px;
  text-align: center;
  height: 50px;
  aspect-ratio: 1;
  cursor: pointer;
}
.dots {
  cursor: pointer;
  color: $purplegrey;
}
.active {
  color: $lightorange;
}
// Hover
.rounded-circle {
  background-color: white;
  &:hover {
    background-color: #ff7a1f !important;  
  }
}
</style>
