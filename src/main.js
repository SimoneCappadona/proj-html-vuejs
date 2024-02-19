
import { createApp } from 'vue'
import App from './App.vue'

// Bootstrap
import 'bootstrap';
// FontAwesomeIcon
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";


const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.component("search-bar", SearchBar);
app.component("filter-bar", FilterBar);

createApp(App).mount('#app')
