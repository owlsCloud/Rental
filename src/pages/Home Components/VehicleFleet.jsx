import React, { useState } from "react";
import car from "../../assets/car.png";
import car2 from "../../assets/car2.png";
import car3 from "../../assets/car3.png";
import car4 from "../../assets/car4.png";
import car5 from "../../assets/car5.png";
import car6 from "../../assets/car6.png";
const buttonStyles = "text-left bg-inactive py-3 px-4 mb-2 text-lg";
const activeStyle = "text-left text-white bg-primary py-3 px-4 mb-2 text-lg";
function VehicleFleet() {
  const [isActive, setIsActive] = useState("1");

  const handleClick = (e) => {
    setIsActive(e.target.id);
  };

  const cars = [car, car2, car3, car4, car5, car6];
  return (
    <section id="vehicles" className="flex flex-col justify-center">
      <div className="text-center w-1/3 m-auto mt-24">
        <h4 className="text-2xl font-semibold">Vehicle Models</h4>
        <h2 className="text-4xl font-bold">Our Rental Fleet</h2>
        <p>
          Choose from a variety of our amazing vehicles to rent for your next
          adventure or business trip
        </p>
      </div>
      <div id="vehicle-select" className="flex ">
        <div id="vehicles" className="flex flex-col m-auto">
          <button
            id="1"
            className={isActive === "1" ? activeStyle : buttonStyles}
            onClick={handleClick}
          >
            Honda Accord
          </button>
          <button
            id="2"
            className={isActive === "2" ? activeStyle : buttonStyles}
            onClick={handleClick}
          >
            Nissan Sentra
          </button>
          <button
            id="3"
            className={isActive === "3" ? activeStyle : buttonStyles}
            onClick={handleClick}
          >
            Toyota Camry
          </button>
          <button
            id="4"
            className={isActive === "4" ? activeStyle : buttonStyles}
            onClick={handleClick}
          >
            Chevrolet Camaro
          </button>
          <button
            id="5"
            className={isActive === "5" ? activeStyle : buttonStyles}
            onClick={handleClick}
          >
            Ford Mustang
          </button>
          <button
            id="6"
            className={isActive === "6" ? activeStyle : buttonStyles}
            onClick={handleClick}
          >
            Ford Expedition
          </button>
        </div>
        <div id="pic-price" className="">
          <img src={cars[isActive - 1]} className="w-2/3 max-w-2/3" alt="" />

          <div id="price-table"></div>
        </div>
      </div>
    </section>
  );
}

export default VehicleFleet;
