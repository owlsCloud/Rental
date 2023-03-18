import React from "react";
import car from "../assets/car.png";
function Home() {
  return (
    <section id="home" className="h-screen w-full relative">
      <div id="container" className="my-0 px-10 max-w-[133rem]">
        <div
          id="hero-content"
          className="items-center flex relative h-screen w-full"
        >
          <div
            id="hero-text"
            className="flex flex-col max-w-[50rem] w-[30rem] z-3"
          >
            <h4 className="font-medium">Plan your trip now</h4>
            <h1 className="text-[2em]">
              Save <span className="text-primary"> big</span> with our car
              rental
            </h1>
            <p>
              Rent the car of your dreams. Unbeatable prices, unlimited miles,
              flexible pick-up options and much more.
            </p>
            <div id="buttons" className="flex ml-0 mt-4 gap-2.5">
              <a
                href="/"
                className="font-bold text-white bg-primary px-7 py-4 rounded-md"
              >
                Book Ride
              </a>
              <a href="/">Learn More</a>
            </div>
          </div>
          <img src={car} className="width-[65%] mt-20" alt="car z-2" />
        </div>
      </div>
    </section>
  );
}

export default Home;
