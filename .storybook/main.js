module.exports = {
  "stories": ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],

  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@chromatic-com/storybook"
  ],

  "framework": {
    name: "@storybook/react-vite",
    options: {}
  },

  docs: {
    autodocs: true
  }
}