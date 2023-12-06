import React, { Fragment} from "react";
import { IoMdCloudOutline } from "react-icons/io";

const IndividualDayWeather = ({ day }) => {
  return (
    <>
      <div className="grid grid-cols-12 w-[100%] xs:min-w-[290px] md:min-w-[100%] py-3 px-3.5 hover:bg-slate-50 rounded-lg">
        <div className="col-span-1 flex justify-center flex-col">
          <IoMdCloudOutline className="xs:text-2xl sm:text-3xl" />
        </div>
        <div className="col-span-6 flex flex-col">
          <p className="text-start xs:text-sm sm:text-base font-bold">{day ? getDayFromWeatherDay(day.dt_txt) : ''}</p>
          <p className="text-start xs:text-xs sm:text-sm">{day && day.weather ? day.weather[0].description.charAt(0).toUpperCase() + day.weather[0].description.slice(1) : '' }</p>
        </div>
        <div className="col-span-2 flex justify-center mb-1 flex-row items-end">
          <p className="text-start text-xs">H:{day && day.main ? day.main.temp_max : ''}°</p>
          <p className="text-start text-xs ml-2">L:{day && day.main ? day.main.temp_max : ''}°</p>
        </div>
      </div>
    </>
  )
}

const getDayFromWeatherDay = (date) => {
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let dateFormat = new Date(date)
  return dayNames[dateFormat.getDay()]
}

export default IndividualDayWeather;