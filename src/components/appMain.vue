<script>
export default {};
</script>

<template>
  <!-- Main -->
  <main class="main">
    <!-- Right Image -->
    <img src="../assets/img/smarttwo.png" alt="" class="mainimg" />
    <!-- Quote -->
    <div class="col-6 text-center maincontent">
      <p class="mainphara fw-medium">Our Love For Animation</p>
      <h2 class="maintitle">We're Storytelling Experts With Creative Smarts</h2>
      <p class="mainquote fw-normal">
        Our Culture inspires the creative and innovative spirit found throughout
        our Studio. We breathe life into new ideas!
      </p>
      <!-- Quote -->
      <div class="d-flex gap-2">
        <div class="border rounded-4 text-center mx-auto p-2">
          <img src="../assets/img/smart1.png" alt="" class="mx-auto p-3" />
          <p class="fw-medium fs-2">3D modeling</p>
          <p class="pquote p-2">
            We constatly ask questions. It helps us shape your story and deliver
            the results you crave. Yep,we'll drill deep to deliver aboce and
            beyond your expectations.
          </p>
        </div>
        <!-- Quote -->
        <div class="border rounded-4 text-center mx-auto p-2">
          <img src="../assets/img/smart2.png" alt="" class="mx-auto p-3" />
          <p class="fw-medium fs-2">Collaboration</p>
          <p class="pquote p-2">
            We constatly ask questions. It helps us shape your story and deliver
            the results you crave. Yep,we'll drill deep to deliver aboce and
            beyond your expectations.
          </p>
        </div>
        <!-- Quote -->
        <div class="border rounded-4 text-center mx-auto p-2">
          <img src="../assets/img/smart3.png" alt="" class="mx-auto p-3" />
          <p class="fw-medium fs-2">Creativity</p>
          <p class="pquote p-2">
            We constatly ask questions. It helps us shape your story and deliver
            the results you crave. Yep,we'll drill deep to deliver aboce and
            beyond your expectations.
          </p>
        </div>
      </div>
    </div>
    <!-- Yellow Ship -->
    <img src="../assets/img/smart4.png" alt="" class="ship" />
    <!-- Aside -->
    <aside class="statistic">
      <!-- First wave -->
      <div class="wavedowndiv">
        <img src="../assets/img/shape-top.png" alt="" class="waveup" />
      </div>
      <!-- Globe center -->
      <img src="../assets/img/globe.png" alt="" class="asideglobe" />
      <!-- Title for statistic -->
      <p class="fs-1 p-5 fw-bolder text-center statistictitle mb-5 mt-5">
        Anidio Quick Facts
      </p>
      <!-- Statistic -->
      <div class="d-flex justify-content-center gap-4 text-center mb-5">
        <div class="col-2 border rounded-4">
          <p class="fw-bold fs-2 statsnumber">700+</p>
          <p class="parastats">Projects done</p>
        </div>
        <!-- Statistic -->
        <div class="col-2 border rounded-4">
          <p class="fw-bold fs-2 statsnumber">250+</p>
          <p class="parastats">Happy client</p>
        </div>
        <!-- Statistic -->
        <div class="col-2 border rounded-4">
          <p class="fw-bold fs-2 statsnumber">25+</p>
          <p class="parastats">Team Members</p>
        </div>
        <!-- Statistic -->
        <div class="col-2 border rounded-4">
          <p class="fw-bold fs-2 statsnumber">12+</p>
          <p class="parastats">Years on the market</p>
        </div>
      </div>
      <!-- Second wave -->
      <div class="wavediv">
        <img src="../assets/img/shape-bottom.png" alt="" class="wavedown" />
      </div>
    </aside>
  </main>
</template>

<style lang="scss">
@use "../assets/style/general.scss";
@use "../assets/style/partials/variables.scss" as *;
// Main
.main {
  margin-top: 130px;
}
// Title
.maintitle {
  color: $darkpurple;
  font-size: 50px;
}

// Main quote
.mainphara {
  color: $bluepurle;
  font-size: 20px;
}
.mainquote {
  color: $darkpurple;
}
// Right img
.mainimg {
  position: absolute;
  z-index: 1;
  top: 90%;
  right: 65%;
}
// Margin for title/para
.maincontent {
  margin-left: 30%;
}
// Yellow ship
.ship {
  position: absolute;
  left: 90%;
  height: 150px;
  width: 150px;
}
// Aside section
.statistic {
  background-image: url(../assets/img/counter-bg.png);
  margin-top: 150px;
  background-repeat: no-repeat;
}
// Card var
.statistictitle,
.statsnumber {
  color: $white;
  position: relative;
}
// Card para
.parastats {
  color: $lightorange;
  position: relative;
}
// Center globe in aside section
.asideglobe {
  position: absolute;
  left: 35%;
  right: 50%;
  height: 420px;
  z-index: 0;
}
</style>
