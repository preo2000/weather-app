import React, { Fragment} from "react";
import LocationWeatherCard from "../components/Locations/LocationWeatherCard"

const Locations = () => {
  const locations = [
    {
      locationName: 'Monterrey',
      weatherType: 'Thunderstorm',
      currentDegrees: 17,
      high: 20,
      low: 12
    },
    {
      locationName: 'Veracruz',
      weatherType: 'Scattered clouds',
      currentDegrees: 27,
      high: 27,
      low: 22
    },
    {
      locationName: 'Colima',
      weatherType: 'Broken clouds',
      currentDegrees: 36,
      high: 31,
      low: 22
    },
    {
      locationName: 'CDMX',
      weatherType: 'Scattered clouds',
      currentDegrees: 13,
      high: 24,
      low: 13
    },
    {
      locationName: 'Houston',
      weatherType: 'Clear sky',
      currentDegrees: 14,
      high: 19,
      low: 12
    },
  ]
  return (
    <>
    <div className="h-[100%] w-[100%] bg-slate-200/80 pl-4 pr-4 sm:pt-8 sm:pb-8 md:pt-16 md:pb-16">
      <p className="text-left text-4xl font-bold ml-3 mb-7">Locations</p>
      <div className="flex sm:flex-row xs:overflow-x-auto md:flex-col">
        {locations.map(location => {
          return <LocationWeatherCard location={location} />
        })}
      </div>
    </div>
    </>
  )
}

export default Locations;