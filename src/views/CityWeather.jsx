import React, { Fragment } from "react";
import WeatherMainCard from "../components/CityWeather/WeatherMainCard";

const CityWeather = () => {
  return(
    <>
    <div className="w-[100%] min-h-full grid grid-cols-12">
      <div className="xs:col-span-12 sm:col-span-12 md:col-span-10 lg:col-span-10 xl:col-span-10 2xl:col-span-10 xs:h-[100vh] sm:h-[100vh] md:h-[100vh] bg-white grid grid-cols-12">
        <div className="h-[156px] col-span-12 grid grid-cols-12 p-6">
          <WeatherMainCard />
        </div>
      </div>
      <div className="xs:col-span-12 sm:col-span-12 md:col-span-2 lg:col-span-2 xl:col-span-2 2xl:w-[20%] bg-black">
        hola2
      </div>
    </div>
    </>
  )
}
export default CityWeather;