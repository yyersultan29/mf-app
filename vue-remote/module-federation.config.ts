export const mfConfig = {
  name: "vue_remote",
  filename: "remoteEntry.js",
  exposes: {
    "./Counter": "./src/Counter.vue",
    "./vue": "vue"
  },
  shared: {
    vue: {
      singleton: true,
      eager: true,
    },
  },
};
