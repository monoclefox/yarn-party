import type { StorybookConfig } from "@storybook/react-vite";

import { join, dirname } from "path";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    getAbsolutePath("@storybook/addon-onboarding"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@chromatic-com/storybook"),
    getAbsolutePath("@storybook/addon-interactions"),
    getAbsolutePath("@storybook/addon-actions"), // Added
    getAbsolutePath("@storybook/addon-backgrounds"), // Added
    getAbsolutePath("@storybook/addon-viewport"), // Added
    getAbsolutePath("@storybook/addon-outline"), // Added
    getAbsolutePath("@storybook/addon-toolbars"), // Added
    getAbsolutePath("@storybook/addon-controls"), // Added
    getAbsolutePath("@storybook/addon-measure"), // Added
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  }
};

export default config;
