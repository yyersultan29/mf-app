export const mfConfig = {
  name: "remote",
  filename:"remoteEntry.js",
  remotes: {
    'vue_remote': "vue_remote@http://localhost:3002/remoteEntry.js",
  },
  exposes: {
    "./remote-content" : "./src/remote-content.tsx"
  },
  shared: ["react", "react-dom"],
};
