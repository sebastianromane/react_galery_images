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
      <img className="imgGif" src="https://i.pinimg.com/originals/84/15/56/841556cbcbe36961fddec58ed635fec2.gif" alt="homeMovingGif"></img>
      <Header title="Galery of your Home with React" />
      </div>
      

      <div className="container">
        <div className="galeria">
          <Cards
            image="https://static8.depositphotos.com/1041088/987/i/950/depositphotos_9874210-stock-photo-american-country-farm-luxury-house.jpg"
            title="Modelo 1"
            description="Casa campestre"
          />
        </div>

        <div className="galeria">
          <Cards
            image="https://static9.depositphotos.com/1041088/1184/i/950/depositphotos_11842757-stock-photo-large-american-beautiful-house-with.jpg"
            title="Modelo 2"
            description="Casa citadina"
          />
        </div>

        <div className="galeria">
          <Cards
            image="https://static8.depositphotos.com/1041088/987/i/950/depositphotos_9874420-stock-photo-american-country-farm-luxury-house.jpg"
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