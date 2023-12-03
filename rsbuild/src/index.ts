import "./index.css";
import { createApp } from "vue";
import App from "./App.vue";
import { StyleProvider, Themes, Tooltip, Button } from "@varlet/ui";
import "@varlet/touch-emulator";
import "@varlet/ui/es/style";

StyleProvider(Themes.dark);

createApp(App).use(Button).use(Tooltip).mount("#root");
