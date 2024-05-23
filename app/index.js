import app from "./app.js";

app.listen(app.get("port"), () => {
    console.log("Backend ejecutandose en http://localhost:" + app.get("port"));
});