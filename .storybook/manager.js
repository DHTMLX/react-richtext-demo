import { addons } from "@storybook/addons";
import { create } from "@storybook/theming/create";

const theme = create({
  base: "light",
  brandTitle: "dhtmlxRichText",
  brandUrl: "https://dhtmlx.github.io/react-richtext-demo/?path=/story",
  brandImage: "./logo.svg",
});

addons.setConfig({
  showPanel: false,
  enableShortcuts: false,
  theme,
});
