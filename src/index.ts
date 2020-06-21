import "reflect-metadata";
import {createConnection} from "typeorm";
import {Lærer} from "./entity/Lærer";

createConnection().then(async connection => {

    const users = await connection.manager.find(Lærer);
    console.log("Loaded users: ", users);

    console.log("Here you can setup and run express/koa/any framework.");

}).catch(error => console.log(error));
