import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import "./Hero.css";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className=" hero-container paddings innerWidth flexCenter">
        <div className="hero-left">
          <div className="hero-title">
            <div className="orange-circle"> </div>

            <h1>
              Discover <br /> Most Suitable <br /> Property
            </h1>
          </div> 
          <div className="  flexColStart hero-description">
            <span>Find a variety of properties that suit you very easily.</span>
            <span> Forget all difficulties in finding a residence for you.</span>
          </div>
          <div className="search-bar">
            {/* <HiLocationMarker className="locologo" color="var(--blue)" size={25} />
            <input className="input" />
            <button className="button">Search</button> */}
            

            <form>
      <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Houses, Places ..."
          required
        />
        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button>
      </div>
    </form>

 </div>
         

          <div className="stats">
            <div className=" stat1">
                 
                 <span className="stat-num"> <CountUp start={8800} end={9000} duration={4}/>  <span className="plus"> + </span> </span>
                <h5 className="stat-text">Products</h5>

            </div>
            <div className=" stat2">
                
                <span className="stat-num"> <CountUp start={1900} end={2000} duration={4}/> <span className="plus"> + </span></span>
                <h5 className="stat-text">Costumers</h5>

            </div>
            <div className=" stat2">
            <span className="stat-num"> <CountUp start={1} end={13} duration={4}/>  <span className="plus"> + </span> </span>
                 
                
                <h5 className="stat-text">Awards</h5>

            </div>
          </div>
        </div>

       
          <div className="image-container">
            <img src="./hero-image.png" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
