import { createApp } from "vue";
import App from "./App.vue";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// FontAwesomeIcon
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faPlay as farFaPlay } from "@fortawesome/free-solid-svg-icons";

library.add(farFaPlay);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);

createApp(App).mount("#app");
