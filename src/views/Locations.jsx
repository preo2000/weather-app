import React, { Fragment} from "react";
import LocationWeatherCard from "../components/Locations/LocationWeatherCard"

const Locations = ( { locationsWeather, setMainWeather } ) => {
  return (
    <>
    <div className="h-[100%] w-[100%] bg-slate-200/80 pl-4 pr-4 xs:pt-8 xs:pb-8 md:pt-16 md:pb-16">
      <p className="text-left text-4xl font-bold ml-3 mb-7">Locations</p>
      <div className="flex sm:flex-row xs:overflow-x-auto md:flex-col">
        {locationsWeather && locationsWeather.map(location => {
          return <LocationWeatherCard location={location} setMainWeather={setMainWeather} />
        })}
      </div>
    </div>
    </>
  )
}

export default Locations;