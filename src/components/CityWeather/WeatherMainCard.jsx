import React, { Fragment} from "react";
import { MdOutlineThunderstorm } from "react-icons/md";

const WeatherMainCard = () => {
  return (
    <>
      <div className="col-span-2 flex flex-col items-center">
        <MdOutlineThunderstorm className="text-black xs:text-7xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-9xl" />
        <p className="text-black xs:text-sm sm:text-sm md:text-md lg:text-lg xl:text-lg font-bold">Thunderstorm</p>
      </div>
      <div className="col-span-10 flex flex-col items-start justify-center h-[100%] xs:ml-7 lg:ml-4">
        <div className="h-[50%] flex items-center">
          <p className="text-black xs:text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold">Monterrey</p>
        </div>
        <div className="grid grid-cols-12 h-[50%] flex items-center">
          <div className="col-span-4">
            <p className="text-black xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold flex items-start">17°</p>
          </div>
          <div className="col-span-5 flex flex-col">
            <div className="grid grid-cols-2">
              <p className="col-span-1 flex items-start ml-3 xs:text-md sm:text-md md:text-lg lg:text-xl xl:text-xl font-bold">H:20°</p>
              <p className="col-span-1 flex items-start ml-3 xs:text-md sm:text-md md:text-lg lg:text-xl xl:text-xl font-bold">L:12°</p>
            </div>
            <div className="grid grid-cols-1">
              <p className="col-span-1 flex items-start ml-3 text-lg font-bold">Feels like: 16°</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WeatherMainCard;