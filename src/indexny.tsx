import "reflect-metadata";
import {createConnection} from "typeorm";
import {Lærer} from "./entity/Lærer";

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

createConnection().then(async connection => {

  const users = await connection.manager.find(Lærer);
  console.log("Loaded users: ", users);

  console.log("Here you can setup and run express/koa/any other framework.");

  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
  
  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
  serviceWorker.unregister();

}).catch(error => console.log(error));



