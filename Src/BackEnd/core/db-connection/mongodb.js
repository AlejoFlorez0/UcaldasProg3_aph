/** packages */
const mongoose = require("mongoose");
const config = require("config");

const mongoConfig = config.get("dbconnections.mongodb");
const connection = `mongodb+srv://${mongoConfig.user}:${mongoConfig.password}@${mongoConfig.host}/${mongoConfig.dbname}?retryWrites=true&w=majority`;

module.exports = () => {
    mongoose.connect(connection);

    mongoose.connection.on("connected", () => {
        console.log("mongodb server connected!");
    });

    mongoose.connection.on("disconnected", () => {
        console.log("mongodb server disconnected!");
    });

    mongoose.connection.on("error", () => {
        console.log("mongodb server error");
    });

    mongoose.connection.on("SIGINT", () => {
        mongoose.connection.close(() => {
            console.log("mongodb server shutting down!");
        });
    });

};
