import "reflect-metadata";
import { createConnection } from "typeorm";
import { Lærer } from "./entity/Lærer";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

createConnection()
  .then(async (connection) => {
    console.log("Indlæser lærertabel");
    const users = await connection.manager.find("Lærer");
    console.log("Indlæste lærere (kan være tom): ", users);

    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById("root")
    );

    serviceWorker.unregister();
  })
  .catch((error) => console.log(error));
