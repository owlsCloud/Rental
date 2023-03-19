import React, { useState } from "react";
const cars = [
  "Honda Accord",
  "Nissan Sentra",
  "Toyota Camry",
  "Chevrolet Camero",
  "Ford Mustang",
  "Ford Expedition",
];
const locations = ["Mission", "McAllen", "Edinburg"];
const inputStyles = "py-1 px-2 border-solid border-2 rounded-md w-full";

function BookCar() {
  const [dropDate, setDropDate] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const changeDrop = (e) => {
    setDropDate(e.target.value);
  };
  const changePickup = (e) => {
    setPickupDate(e.target.value);
  };

  return (
    <div id="booking-container" className="m-auto w-2/3">
      <div id="book-content" className=" mb-[20rem] ">
        <div id="book-box">
          <h2 className="text-xl font-semibold">Book A Car</h2>
          <form className="grid gap-8 grid-cols-3 grid-rows-2 m-auto">
            <div className="flex flex-col">
              <label htmlFor="" className="text-xl mb-2">
                <i></i>
                Select your car type <b>*</b>
              </label>
              <select name="" id="" className={inputStyles}>
                {cars.map((i) => {
                  return <option value={i}>{i}</option>;
                })}
              </select>
            </div>
            <div className="flex flex-col ">
              <label htmlFor="" className="text-xl mb-2">
                <i></i>
                Pick-Up <b>*</b>
              </label>
              <select name="cars" id="" className={inputStyles}>
                {locations.map((i) => {
                  return <option value={i}>{i}</option>;
                })}
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-xl mb-2">
                <i></i>
                Drop-Off <b>*</b>
              </label>
              <select name="location" id="" className={inputStyles}>
                {locations.map((i) => {
                  return <option value={i}>{i}</option>;
                })}
              </select>
            </div>
            <div className="flex flex-col ">
              <label htmlFor="" className="text-xl mb-2">
                <i></i>
                Pickup Date <b>*</b>
              </label>
              <input
                type="date"
                value={pickupDate}
                onChange={changePickup}
                className={inputStyles}
              />
            </div>
            <div className="flex flex-col ">
              <label htmlFor="" className="text-xl mb-2">
                <i></i>
                Drop Off Date <b>*</b>
              </label>
              <input
                type="date"
                value={dropDate}
                onChange={changeDrop}
                className={inputStyles}
              />
            </div>
            <button
              type="submit"
              className=" bg-primary text-white w-full h-full "
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BookCar;
