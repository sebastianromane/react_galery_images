// Insert html structure to React

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="fondo">
      
      <div className="head">
      <img className="imgGif" src="https://rb.gy/uvajsp" alt="homeMovingGif"></img>
      <Header title="Galery of your Home with React" />
      </div>
      

      <div className="container">
        <div className="galeria">
          <Cards
            image="https://rb.gy/sob25h"
            title="Modelo 1"
            description="Casa campestre"
          />
        </div>

        <div className="galeria">
          <Cards
            image="https://rb.gy/binarr"
            title="Modelo 2"
            description="Casa citadina"
          />
        </div>

        <div className="galeria">
          <Cards
            image="https://rb.gy/gja7vd"
            title="Modelo 3"
            description="Casa tipo granja"
          />
        </div>
      </div>

               
      <Footer footer="© 2022 Copyright Desafío Latam:" space="    " button="More Info." />
    </div>
  );
}
export default App;