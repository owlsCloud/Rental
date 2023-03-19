import React, { useState } from "react";
import car from "../assets/car.png";
import car2 from "../assets/car2.png";
import car3 from "../assets/car3.png";
import car4 from "../assets/car4.png";
import car5 from "../assets/car5.png";
import car6 from "../assets/car6.png";
const buttonStyles = "text-left bg-inactive py-3 px-4 mb-2 text-lg";
const activeStyle = "text-left text-white bg-primary py-3 px-4 mb-2 text-lg";
function VehicleFleet() {
  const [activeID, setActiveID] = useState("1");

  const handleClick = (e) => {
    setActiveID(e.target.id);
  };

  const cars = [car, car2, car3, car4, car5, car6];
  const carss = [
    {
      price: "$45",
      img: car,
      brand: "Honda",
      model: "Accord",
      year: "2019",
      doors: "4",
      ac: "yes",
      transmission: "Automatic",
      fuel: "Gasoline",
    },
    {
      price: "$25",
      img: car2,
      brand: "Nissan",
      model: "Sentra",
      year: "2012",
      doors: "4",
      ac: "yes",
      transmission: "Automatic",
      fuel: "Gasoline",
    },
    {
      price: "$35",
      img: car3,
      brand: "Toyota",
      model: "Camry",
      year: "2014",
      doors: "4",
      ac: "yes",
      transmission: "Automatic",
      fuel: "Gasoline",
    },
    {
      price: "$65",
      img: car4,
      brand: "Chevrolet",
      model: "Camaro",
      year: "2016",
      doors: "2",
      ac: "yes",
      transmission: "Manual",
      fuel: "Gasoline",
    },
    {
      price: "$50",
      img: car5,
      brand: "Ford",
      model: "Mustang",
      year: "2018",
      doors: "2",
      ac: "yes",
      transmission: "Manual",
      fuel: "Gasoline",
    },
    {
      price: "$70",
      img: car6,
      brand: "Ford",
      model: "Expedition",
      year: "2020",
      doors: "5",
      ac: "yes",
      transmission: "Automatic",
      fuel: "Gasoline",
    },
  ];
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
            className={activeID === "1" ? activeStyle : buttonStyles}
            onClick={handleClick}
          >
            Honda Accord
          </button>
          <button
            id="2"
            className={activeID === "2" ? activeStyle : buttonStyles}
            onClick={handleClick}
          >
            Nissan Sentra
          </button>
          <button
            id="3"
            className={activeID === "3" ? activeStyle : buttonStyles}
            onClick={handleClick}
          >
            Toyota Camry
          </button>
          <button
            id="4"
            className={activeID === "4" ? activeStyle : buttonStyles}
            onClick={handleClick}
          >
            Chevrolet Camaro
          </button>
          <button
            id="5"
            className={activeID === "5" ? activeStyle : buttonStyles}
            onClick={handleClick}
          >
            Ford Mustang
          </button>
          <button
            id="6"
            className={activeID === "6" ? activeStyle : buttonStyles}
            onClick={handleClick}
          >
            Ford Expedition
          </button>
        </div>
        <div id="pic-price" className="flex m-auto">
          <img src={cars[activeID - 1]} className="w-2/3 max-w-2/3 " alt="" />

          <div id="price-table">
            <table className="">
              <tr>
                <th colSpan="2" className="bg-primary text-white px-8">
                  {carss[activeID - 1].price} / per day
                </th>
              </tr>
              <tr>
                <td className="">Brand</td>
                <td>{carss[activeID - 1].brand}</td>
              </tr>
              <tr>
                <td>Model</td>
                <td>{carss[activeID - 1].model}</td>
              </tr>
              <tr>
                <td>Year</td>
                <td>{carss[activeID - 1].year}</td>
              </tr>
              <tr>
                <td>Doors</td>
                <td>{carss[activeID - 1].doors}</td>
              </tr>
              <tr>
                <td>AC</td>
                <td>{carss[activeID - 1].ac}</td>
              </tr>
              <tr>
                <td>Transmission</td>
                <td>{carss[activeID - 1].transmission}</td>
              </tr>
              <tr>
                <td>Fuel</td>
                <td>{carss[activeID - 1].fuel}</td>
              </tr>
            </table>
            <button className="bg-primary text-white w-full">
              Reserve Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VehicleFleet;
