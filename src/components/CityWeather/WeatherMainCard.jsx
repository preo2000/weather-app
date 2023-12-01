import React, { Fragment} from "react";
import { MdOutlineThunderstorm } from "react-icons/md";

const WeatherMainCard = () => {
  return (
    <>
      <div className="col-span-2 flex flex-col items-center">
        <MdOutlineThunderstorm className="text-black text-9xl" />
        <p className="text-black text-lg font-bold">Thunderstorm</p>
      </div>
      <div className="col-span-10 flex flex-col items-start justify-center h-[100%] ml-4">
        <div className="h-[50%] flex items-center">
          <p className="text-black text-6xl font-bold">Monterrey</p>
        </div>
        <div className="grid grid-cols-12 h-[50%] flex items-center">
          <div className="col-span-4">
            <p className="text-black text-5xl font-bold flex items-start">17°</p>
          </div>
          <div className="col-span-5 flex flex-col">
            <div className="grid grid-cols-2">
              <p className="col-span-1 flex items-start ml-3 text-xl font-bold">H:20°</p>
              <p className="col-span-1 flex items-start ml-3 text-xl font-bold">L:12°</p>
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