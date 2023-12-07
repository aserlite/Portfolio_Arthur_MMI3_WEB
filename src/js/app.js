import Alpine from "alpinejs";
import intersect from "@alpinejs/intersect";
import persist from "@alpinejs/persist";
import Projects from "./components/Projects.js";
import Questions from "./components/Questions.js";
import Logiciels from "./components/Logiciels.js";
import Languages from "./components/Languages.js";
import Form from "./components/Form.js";

window.Alpine = Alpine;

window.addEventListener('DOMContentLoaded', () => {
    const {alpineInitialized, Alpine} = window;
    if (alpineInitialized) {
        return;
    }

    window.alpineInitialized = true;
    const {data, start, plugin} = Alpine;
    plugin(intersect);
    plugin(persist);
    data('Projects', Projects);
    data('Questions', Questions);
    data('Languages', Languages);
    data('Logiciels', Logiciels);
    data('Form', Form);
    start();
});

