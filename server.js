const express = require("express");
const app = express();

app.use(express.json())

const routers = require("./routes");

app.use("/api", routers)

const connectDb = require("./connectDb");

const port = 5000;

const startServer = async () => {
    await connectDb();
    app.listen(port, () => {
        console.log(`server is listening http://localhost:${port}`);
    })
}

app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
})

startServer();