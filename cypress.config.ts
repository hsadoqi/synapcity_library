import { defineConfig } from "cypress";

export default defineConfig({
  projectId: process.env.CYPRESS_PROJECT_ID,
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
    video: true,
    screenshotOnRunFailure: true
  },

  e2e: {
    baseUrl: 'http://localhost:3000/',
    setupNodeEvents(on, config) {
      console.log(on, config)
    },
  },
});
