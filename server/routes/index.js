module.exports = (app) => {
  // Base URLS
  app.use("/api", require("./products.routes.js"));
  app.use("/api", require("./auth.routes.js"));
  app.use("/api/files", require("./files.routes.js"));
};
