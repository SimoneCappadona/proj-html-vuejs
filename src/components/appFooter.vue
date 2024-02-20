<script>
export default {};
</script>

<template>
  <footer class="footer">
    <div class="text-center">
      <!-- Quote -->
      <p class="footerpara fw-medium fs-3">Why Anidio studio?</p>
      <h2 class="footertitle">We Love Our Clients</h2>
      <p class="footerquote">
        We are trusted throughout adland and have a wealth of raccomendations
        from start-ups to renowned global brands.
      </p>
    </div>
    <div class="container text-center">
      <div class="d-flex gap-3 justify-content-center p-3">
        <div>
          <img src="../assets/img/sponsor1.png" alt="" />
        </div>
        <div>
          <img src="../assets/img/sponsor2.png" alt="" />
        </div>
        <div>
          <img src="../assets/img/sponsor3.png" alt="" />
        </div>
        <div>
          <img src="../assets/img/sponsor5.png" alt="" />
        </div>
        <div>
          <img src="../assets/img/sponsor6.png" alt="" />
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
@use "../assets/style/general.scss";
@use "../assets/style/partials/variables.scss" as *;

// Footer
.footer {
  margin-top: 200px;
}
// Footer Quote
.footerpara {
  color: $bluepurle;
}
.footertitle {
  color: $darkpurple;
  font-size: 50px;
}
.footerquote {
  color: $darkpurple;
}
</style>
