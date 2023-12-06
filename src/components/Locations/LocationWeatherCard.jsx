import React, { Fragment} from "react";
import { IoMdCloudOutline } from "react-icons/io";

const LocationWeatherCard = ({location, setMainWeather}) => {
  return (
    <>
      <div onClick={() => setMainWeather(location)} className="grid grid-cols-12 w-[100%] xs:min-w-[290px] md:min-w-[100%] py-3 px-3.5 hover:bg-slate-50 rounded-lg">
        <div className="col-span-6 flex flex-col">
          <p className="text-start md:text-sm lg:text-base font-bold">{location.name}</p>
          <p className="text-start md:text-xs lg:text-sm">{location && location.weather ? location.weather[0].description.charAt(0).toUpperCase() + location.weather[0].description.slice(1) : ''}</p>
        </div>
        <div className="col-span-2 flex justify-center flex-col">
          <IoMdCloudOutline className="md:text-lg lg:text-xl" />
        </div>
        <div className="col-span-2 flex justify-center flex-col">
          <p className="text-start md:text-lg lg:text-xl font-bold">{location && location.main ? location.main.temp.toString().slice(0,2) : ''}°</p>
        </div>
        <div className="col-span-2 flex justify-center ml-1 flex-col">
          <p className="text-start text-xs">H:{location && location.main ? location.main.temp_max.toString().slice(0,2) : ''}°</p>
          <p className="text-start text-xs">L:{location && location.main ? location.main.temp_min.toString().slice(0,2) : ''}°</p>
        </div>
      </div>
    </>
  )
}

export default LocationWeatherCard;