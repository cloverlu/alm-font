Object.defineProperty(window, "config", {
  value: {
    host: {
			authorization: "http://192.168.43.76:9001",
			almBase:"http://192.168.43.76:9001",
			almBaseLocal:'192.168.43.236'
    }
  }
});
Object.freeze(window.config);
Object.freeze(window.config.host);
