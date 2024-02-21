<script>
export default {
  data() {
    return {
      Social: [
        "fa-brands fa-facebook-f",
        "fa-brands fa-twitter",
        "fa-brands fa-instagram",
      ],
    };
  },
  props: { card: Array },
};
</script>
<template>
  <div class="container">
    <div class="row g-3 flex-nowrap text-center">
      <div class="col-4 mt-5" v-for="card in card" :key="card">
        <img :src="card.imageurl" alt="" class="mx-auto" />
        <p class="surname fs-3 fw-bolder p-1">{{ card.name }}</p>
        <p class="jobs fw-medium-">{{ card.job }}</p>
        <div class="d-flex gap-2 mb-5 justify-content-center">
          <div class="social" v-for="socialicon in Social" :key="socialicon">
            <font-awesome-icon :icon="socialicon" class="icons" />
          </div>
        </div>
      </div>
    </div>
    </div>
</template>

<style lang="scss" scoped></style>
