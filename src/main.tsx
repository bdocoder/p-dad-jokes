import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import getRandomJoke from "./lib/jokes.ts";
import "./style.scss";

getRandomJoke().then((joke) =>
  ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
      <App initialJoke={joke} />
    </React.StrictMode>
  )
);
