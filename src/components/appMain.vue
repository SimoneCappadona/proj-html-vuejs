<script>
export default {};
</script>

<template>
  <main class="main">
    <img src="../assets/img/smarttwo.png" alt="" class="mainimg" />
    <div class="col-4 text-center mx-auto">
        
      <p class="mainphara fw-medium">Our Love For Animation</p>
      <h2 class="maintitle">We're Storytelling Experts With Creative Smarts</h2>
      <p class="mainquote fw-normal">
        Our Culture inspires the creative and innovative spirit found throughout
        our Studio. We breathe life into new ideas!
      </p>
      <div class="row">
      <div class="col-4 border rounded text-center mx-auto">
        <img src="../assets/img/smart1.png" alt="">
      </div>
      <div class="col-4 border rounded text-center mx-auto">
        <img src="../assets/img/smart2.png" alt="">
      </div>
      <div class="col-4 border rounded text-center mx-auto">
        <img src="../assets/img/smart3.png" alt="">
      </div>
    </div>
    </div>
  </main>
</template>

<style lang="scss">
@use "../assets/style/general.scss";
@use "../assets/style/partials/variables.scss" as *;

.main {
  margin-top: 130px;
}

.mainphara {
  color: $bluepurle;
  font-size: 20px;
}
.maintitle {
  color: $darkpurple;
  font-size: 50px;
}
.mainquote {
  color: $darkpurple;
}
.mainimg {
  position: absolute;
  z-index: 1;
  top: 85%;
  right: 63%;
}
</style>
