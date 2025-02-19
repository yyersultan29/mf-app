export const mfConfig = {
  name: "host",
  filename:"remoteEntry.js",
  remotes:{
    remote: "remote@http://localhost:3001/remoteEntry.js"
  },
  exposes: {},
  shared: ["react", "react-dom"],
};
