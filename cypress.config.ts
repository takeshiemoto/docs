import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    // cy.visit()とcy.request()コマンドをこのbaseUrlでプレフィックスします。
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
