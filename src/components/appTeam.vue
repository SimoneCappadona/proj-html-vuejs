<script>
export default {
  data() {
    return {
      cards: [
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
      Social: [
        "fa-brands fa-facebook-f",
        "fa-brands fa-twitter",
        "fa-brands fa-instagram",
      ],
    };
  },
};
</script>
<template>
  <div class="container">
    <div class="row g-3 flex-nowrap">
      <div class="col-4 mt-5" v-for="card in cards" :key="card">
        <img :src="card.imageurl" alt="" />
        <p class="surname fs-3 fw-bolder p-1">{{ card.name }}</p>
        <p class="jobs fw-medium-">{{ card.job }}</p>
        <div class="d-flex gap-2 mb-5">
          <div class="social" v-for="socialicon in Social" :key="socialicon">
            <font-awesome-icon :icon="socialicon" class="icons" />
          </div>
        </div>
      </div>
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
</style>
