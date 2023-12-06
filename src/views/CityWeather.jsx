import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import WeatherMainCard from "../components/CityWeather/WeatherMainCard";
import SecondaryCard from "../components/SecondaryCard";
import Locations from "./Locations"
import IndividualDayWeather from "../components/Forecast/IndividualDayWeather";
import { FaWind, FaRegCalendar, FaRegSun, FaEye } from "react-icons/fa";
import { MdOutlineThunderstorm } from "react-icons/md";
import { WiHumidity } from "react-icons/wi";
import { GiHeavyRain } from "react-icons/gi";
import { IoMdCloudOutline } from "react-icons/io";
import { MdOutlineTireRepair } from "react-icons/md";



const CityWeather = () => {
  const [MonterreyForecast, setMonterreyForecast] = useState([])
  const [locationsWeather, setLocationsWeather] = useState([])
  const [mainWeather, setMainWeather] = useState({})
  const [weatherRetrieved, setWeatherRetrieved] = useState(false)
  
  useEffect(() => {
    axios.get('https://api.openweathermap.org/data/2.5/forecast?q=Monterrey&appid=2d01c70ee65ad0f2d6c2d40d5d9ac229&units=metric').then(response =>{
      setMonterreyForecast(response.data.list.filter((res, index) => index == 1 || index == 9 || index == 17 || index == 25 || index == 33))
    })
  }, [true])
  useEffect(() => {
    const weatherListByLocation = ['Monterrey', 'Veracruz', 'Colima', 'Texcoco', 'Houston']
    let weatherPromises = []
    weatherListByLocation.forEach(city => {
      weatherPromises.push(getWeather(city))
    });

    const promisesResolved = Promise.all(weatherPromises).then(weathers => {
      setLocationsWeather(weathers)
      setMainWeather(weathers.find(weather => weather.name == "Monterrey"))
      setWeatherRetrieved(true)
    })

  }, [MonterreyForecast])

  const getWeather = (city) => {
    return new Promise((resolve, reject) => {
      try {
        const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2d01c70ee65ad0f2d6c2d40d5d9ac229&units=metric`
        axios.get(weatherUrl).then(response =>{
          resolve(response.data)
        })
      } catch (error) {
        console.log(error);
        reject(error)
      }
    })
  }
  return(
    <>
    <div className="bg-[url('/src/assets/cloudy.jpeg')] w-[100%] h-[100%] min-h-full grid grid-cols-12">
      <div className="min-h-[100%] xs:col-span-12 sm:col-span-12 md:col-span-9 lg:col-span-9 xl:col-span-9 2xl:col-span-9 grid grid-cols-12">
        <div className="h-[100%] col-span-12 grid grid-cols-12 p-6">
          <WeatherMainCard mainWeather={mainWeather} />
        </div>
        <div className="min-h-[100%] col-span-12 grid grid-cols-12 p-6">
          <div className="h-40 min-h-40 xs:col-span-12 sm:col-span-8 px-3 my-3">
            <SecondaryCard
              Icon={FaWind}
              title={"Wind"} 
              content={
                <>
                  <div className="h-[100%] grid grid-cols-12">
                    <div className="xs:col-span-6 sm:col-span-4 flex flex-col items-start">
                      <p className="font-bold xs:text-sm sm:text-sm md:text-md lg:text-lg xl:text-lg">Speed</p>
                      <p className="xs:text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl lg:font-bold">{mainWeather && mainWeather.wind ? mainWeather.wind.speed : ''} km/h</p>
                    </div>
                    <div className="h-[100%] xs:col-span-6 sm:col-span-4 flex flex-col items-start">
                      <p className="font-bold xs:text-sm sm:text-sm md:text-md lg:text-lg xl:text-lg">Direction</p>
                      <p className="xs:text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl lg:font-bold">{mainWeather && mainWeather.wind ? mainWeather.wind.deg : ''}°</p>
                    </div>
                    <div className="h-[100%] xs:col-span-8 sm:col-span-4 flex flex-col items-start">
                      <p className="font-bold xs:text-sm sm:text-sm md:text-md lg:text-lg xl:text-lg">Gust</p>
                      <p className="xs:text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl lg:font-bold">{mainWeather && mainWeather.wind ? mainWeather.wind.gust : ''} km/h</p>
                    </div>
                  </div>
                </>
              }/>
          </div>
          <div className="h-40 min-h-40 xs:col-span-12 sm:col-span-4 px-3 my-3">
            <SecondaryCard
              Icon={WiHumidity}
              title={"Humidity"}
              content={
                <>
                  <div className="h-[100%] col-span-12 flex flex-col justify-start items-start">
                    <p className="xs:text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl lg:font-bold">{mainWeather && mainWeather.main ? mainWeather.main.humidity : ''}%</p>
                  </div>
                </>
              }/>
          </div>
          <div className="h-40 min-h-40 xs:col-span-12 sm:col-span-5 px-3 my-3">
            <SecondaryCard
              Icon={GiHeavyRain}
              title={"Precipitation"} 
              content={
                <>
                  <div className="h-[100%] grid grid-cols-12">
                    <div className="h-[100%] col-span-6 flex flex-col items-start">
                      <p className="font-bold xs:text-sm sm:text-sm md:text-md lg:text-lg xl:text-lg">Last hour</p>
                      <p className="xs:text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl lg:font-bold">0mm</p>
                    </div>
                    <div className="h-[100%] col-span-6 flex flex-col items-start">
                      <p className="font-bold xs:text-sm sm:text-sm md:text-md lg:text-lg xl:text-lg">Last 3 hours</p>
                      <p className="xs:text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl lg:font-bold">0mm</p>
                    </div>
                  </div>
                </>
              }/>
          </div>
          <div className="h-40 min-h-40 xs:col-span-12 sm:col-span-4 px-3 my-3">
            <SecondaryCard
              Icon={IoMdCloudOutline}
              title={"Cloudiness"}
              content={
                <>
                  <div className="h-[100%] col-span-12 flex flex-col justify-start items-start">
                    <p className="xs:text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl lg:font-bold">{mainWeather && mainWeather.clouds ? mainWeather.clouds.all : ''}%</p>
                  </div>
                </>
              }/>
          </div>
          <div className="h-40 min-h-40 xs:col-span-12 sm:col-span-3 px-3 my-3">
            <SecondaryCard
              Icon={FaRegSun}
              title={"UV"}
              content={
                <>
                  <div className="h-[100%] col-span-12 flex flex-col justify-start items-start">
                    <p className="xs:text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl lg:font-bold">1.8</p>
                  </div>
                </>
              }/>
          </div>
          <div className="h-40 min-h-40 xs:col-span-12 sm:col-span-3 sm:hidden md:block px-3 my-3">
            <SecondaryCard
              Icon={FaRegCalendar}
              content={
                <>
                  <div className="h-[100%] col-span-12 flex flex-col justify-start items-start">
                    <p className="xs:text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl font-bold text-left">5-day-forecast</p>
                  </div>
                </>
              }/>
          </div>
          <div className="h-40 min-h-40 xs:col-span-12 sm:col-span-6 md:col-span-4 px-3 my-3">
            <SecondaryCard
              Icon={FaEye}
              title={"Visibility"}
              content={
                <>
                  <div className="h-[100%] col-span-12 flex flex-col justify-start items-start">
                    <p className="xs:text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl lg:font-bold">{mainWeather && mainWeather.visibility ? mainWeather.visibility : ''} km</p>
                  </div>
                </>
              }/>
          </div>
          <div className="h-40 min-h-40 xs:col-span-12 sm:col-span-6 md:col-span-5 px-3 my-3">
            <SecondaryCard
              Icon={MdOutlineTireRepair}
              title={"Pressure"}
              content={
                <>
                  <div className="h-[100%] col-span-12 flex flex-col justify-start items-start">
                    <p className="xs:text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl lg:font-bold">1023hPa</p>
                  </div>
                </>
              }/>
          </div>
          <div className="xs:col-span-12 sm:col-span-12 md:col-span-12 sm:block md:hidden px-3 my-3">
            <SecondaryCard
              Icon={MdOutlineTireRepair}
              title={"5-day-forecast"}
              content={
                <>
                  <div className="h-[100%] col-span-12 flex flex-col justify-start items-start">
                    {MonterreyForecast && MonterreyForecast.map(day => {
                      return <IndividualDayWeather day={day} />
                    })}
                  </div>
                </>
              }/>
          </div>
        </div>
      </div>
      <div className="xs:col-span-12 sm:col-span-12 md:col-span-3 lg:col-span-3 xl:col-span-3 2xl:w-[20%]">
        <Locations locationsWeather={locationsWeather} setMainWeather={setMainWeather} />
      </div>
    </div>
    </>
  )
}
export default CityWeather;