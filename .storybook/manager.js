import { addons } from "@storybook/manager-api";
import customTheme from "./customTheme.js";

addons.setConfig({
  showNav: false,
  isFullscreen: true,
  theme: customTheme,
});
