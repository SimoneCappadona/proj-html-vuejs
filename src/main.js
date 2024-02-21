import { createApp } from "vue";
import App from "./App.vue";

// Video player
import VueVideoPlayer from "@videojs-player/vue";
import "video.js/dist/video-js.css";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// FontAwesomeIcon
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faPlay as farFaPlay } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

library.add(farFaPlay);
library.add(faFacebookF, faTwitter, faInstagram);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(VueVideoPlayer);
app.mount("#app");
