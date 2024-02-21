<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    },
  },
  }


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
          <img src="../assets/img/sponsor1.png" alt="" class="sponsor" />
        </div>
        <div>
          <img src="../assets/img/sponsor2.png" alt="" class="sponsor" />
        </div>
        <div>
          <img src="../assets/img/sponsor3.png" alt="" class="sponsor" />
        </div>
        <div>
          <img src="../assets/img/sponsor5.png" alt="" class="sponsor" />
        </div>
        <div>
          <img src="../assets/img/sponsor6.png" alt="" class="sponsor" />
        </div>
      </div>
    </div>
    <section class="email">
      <div class="wavedowndiv">
        <img src="../assets/img/shape-top.png" alt="" class="waveup" />
      </div>
      <p class="fs-3 fw-medium text-center emailpara mt-5">
        We Create New Worlds!
      </p>
      <h2 class="text-center emailtitle">Want Tips On Your Storytelling?</h2>
      <p class="emailquote text-center p-3">
        Join our newsletter for tips on how to elevate your brand through
        storytelling
      </p>
      <div class="input-group d-flex mx-auto w-50 mb-5">
        <input
          type="text"
          class="form-control"
          placeholder="name@example.com"
          aria-label="name@example.com"
          aria-describedby="button-addon2"
        />
        <button class="btn btn-light" type="button" id="button-addon2">
          Button
        </button>
      </div>
      <div class="wavediv">
        <img src="../assets/img/shape-bottom.png" alt="" class="wavedown" />
      </div>
    </section>
    <section class="infos">
      <div class="container">
        <div class="d-flex justify-content-between bordered">
          <div class="logo">
            <img
              src="../assets/img/footer-logo.png"
              alt=""
              class="footerlogo"
            />
          </div>

          <ul class="d-flex gap-3 fw-medium infolist">
            <li>About us</li>
            <li>Portfolio</li>
            <li>Pricing</li>
            <li>Career</li>
            <li>Contact</li>
          </ul>
        </div>
        <div class="footerquote d-flex justify-content-between fw-medium">
          <p>
            Copyright
            <span><i class="fa-regular fa-copyright fa-sm"></i></span>2022
            <span class="coloredpurple">Softivus.</span>All rights reserved.
          </p>
          <div class="d-flex gap-3">
            <i class="fa-brands fa-facebook-f social"></i>
            <i class="fa-brands fa-twitter border-1 social"></i>
            <i class="fa-brands fa-instagram border-1 social"></i>
          </div>
        </div>
      </div>
      <div class="arrowup" @click="scrollToTop">
        <i class="fa-solid fa-arrow-up arrowed"></i>
      </div>
    </section>
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
// Sponsor Img
.sponsor {
  cursor: pointer;
}
// Email Section
.email {
  background-image: url(../assets/img/preloader.png);
  background-repeat: no-repeat;
}
.emailpara {
  color: $lightorange;
}
.emailtitle {
  font-size: 50px;
}
.emailtitle,
.emailquote {
  color: $white;
}
.emailquote {
  margin-bottom: 150px;
}
.infos {
  margin-top: 100px;
}
.infolist {
  cursor: pointer;
}
.bordered {
  border-bottom: 0.5px solid $purplegrey;
  margin: 20px;
  padding: 5px;
}
.coloredpurple {
  color: $bluepurle;
}
.social {
  border: 0.5px solid $purplegrey;
  color: $bluepurle;
  border-radius: 50%;
  line-height: 50px;
  text-align: center;
  font-size: 25px;
  height: 50px;
  aspect-ratio: 1;
  cursor: pointer;
}
.arrowup {
  text-align: right;
  margin-bottom: 20px;
  padding-right: 25px;
}
.arrowed {
  border-radius: 10px;
  background-color: $darkpurple;
  color: $white;
  cursor: pointer;
  height: 40px;
  font-size: 20 px;
  line-height: 40px;
  text-align: center;
  aspect-ratio: 1;
}
.form-control {
  width: 50%;
}
</style>
