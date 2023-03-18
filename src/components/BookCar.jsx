import React from "react";
const cars = [
  "Honda Accord",
  "Nissan Sentra",
  "Toyota Camry",
  "Chevrolet Camero",
  "Ford Mustang",
  "Ford Expedition",
];
const locations = ["Mission", "McAllen", "Edinburg"];
const inputStyles = "py-2 px-4 border-solid border-2 w-full";
function BookCar() {
  return (
    <div id="booking-container" className="mx-auto px-10 max-w-[133rem]">
      <div id="book-content" className=" mb-[20rem] ">
        <div id="book-box" className="rounded-[5px] flex flex-col ">
          <h2 className="text-xl font-semibold">Book A Car</h2>
          <form className="grid gap-8 grid-cols-3 grid-rows-2">
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
            <div className="flex flex-col px-8">
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
            <div className="flex flex-col px-8">
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
            <div className="flex flex-col px-8">
              <label htmlFor="" className="text-xl">
                <i></i>
                Pickup Date <b>*</b>
              </label>
              <input type="date" value="d" className={inputStyles} />
            </div>
            <div className="flex flex-col px-8 ">
              <label htmlFor="" className="text-xl">
                <i></i>
                Drop Off Date <b>*</b>
              </label>
              <input type="date" value="d" className={inputStyles} />
            </div>
            <button
              type="submit"
              className="bg-primary text-white h-fit px-20 py-4 m-auto"
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
