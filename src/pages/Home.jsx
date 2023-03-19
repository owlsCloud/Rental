import React from "react";
import car from "../assets/car.png";
import BookCar from "../components/BookCar";
import VehicleFleet from "../components/VehicleFleet";
function Home() {
  return (
    <>
      <section id="home" className="h-screen w-full relative ">
        <div id="container" className="my-0 px-10 max-w-[133rem] ">
          <div
            id="hero-content"
            className="items-center flex justify-center relative h-screen w-full "
          >
            <div
              id="hero-text"
              className="flex flex-col gap-4 mr-0 max-w-[50rem] w-[30rem] z-3"
            >
              <h4 className="font-medium text-xl">Plan your trip now</h4>
              <h1 className="text-5xl">
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
                <a
                  href="/"
                  className="font-bold text-white bg-black px-7 py-4 rounded-md hover:bg-white hover:text-black hover:border "
                >
                  Learn More
                </a>
              </div>
            </div>
            <img src={car} className="ml-0 width-[65%]" alt="car z-2" />
          </div>
        </div>
      </section>
      <BookCar />

      <section id="plan">
        <div id="container" className=" px-10 flex ">
          <div className="flex flex-col items-center ">
            <div id="plan-title" className="text-center">
              <h3 className="text-2xl font-semibold">Plan Your Trip Now</h3>
              <h2 className="text-4xl font-bold">Quick & easy car rental</h2>
            </div>
            <div
              id="container-boxes"
              className="mt-20 grid gap-8 grid-cols-3 px-12 m-auto"
            >
              <div id="box" className="text-center w-1/2 m-auto">
                <img src="" alt="" />
                <h3 className="font-semibold text-xl">Select Car</h3>
                <p>
                  We offer a big range of vehicles for all your driving needs.
                  We have the perfect car to meet your needs
                </p>
              </div>
              <div id="box" className="text-center w-1/2 m-auto">
                <img src="" alt="" />
                <h3 className="font-semibold text-xl">Contact Operator</h3>
                <p>
                  Our knowledgeable and friendly operators are always ready to
                  help with any questions or concerns
                </p>
              </div>
              <div id="box" className="text-center w-1/2 m-auto">
                <img src="" alt="" />
                <h3 className="font-semibold text-xl">Let's Drive</h3>
                <p>
                  Whether you're hitting the open road, we've got you covered
                  with our wide range of cars
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <VehicleFleet />
    </>
  );
}

export default Home;
