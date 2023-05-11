import "../styles/index.scss";

import React from "react";
import Recipes from "./Recipes";
import hero from "../images/super-hero-2.jpeg";

function App() {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>Oh Hi, React</h1>
        </section>
        <img src={hero} alt="super-hero" width="250px"></img>
        <Recipes />
      </main>
    </>
  );
}

export default App;
