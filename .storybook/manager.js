import { addons } from "@storybook/manager-api";
import customTheme from "./customTheme.js";

addons.setConfig({
  showNav: true,
  isFullscreen: false,
  theme: customTheme,
});
