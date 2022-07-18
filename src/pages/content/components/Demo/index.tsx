import App from "@src/pages/content/components/Demo/app";
import { render } from "solid-js/web";

const root = document.createElement("div");
root.id = "chrome-extension-boilerplate-react-vite-content-view-root";
document.body.append(root);

render(App, root);