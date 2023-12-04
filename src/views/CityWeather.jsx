import React, { Fragment } from "react";
import WeatherMainCard from "../components/CityWeather/WeatherMainCard";
import SecondaryCard from "../components/SecondaryCard";
import Locations from "./Locations"
import { FaWind, FaRegCalendar, FaRegSun, FaEye } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { GiHeavyRain } from "react-icons/gi";
import { IoMdCloudOutline } from "react-icons/io";
import { MdOutlineTireRepair } from "react-icons/md";


const CityWeather = () => {
  return(
    <>
    <div className="bg-[url('/src/assets/cloudy.jpeg')] w-[100%] h-[100%] min-h-full grid grid-cols-12">
      <div className="min-h-[100%] xs:col-span-12 sm:col-span-12 md:col-span-9 lg:col-span-9 xl:col-span-9 2xl:col-span-9 grid grid-cols-12">
        <div className="h-[100%] col-span-12 grid grid-cols-12 p-6">
          <WeatherMainCard />
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
                      <p className="xs:text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl lg:font-bold">11 km/h</p>
                    </div>
                    <div className="h-[100%] xs:col-span-6 sm:col-span-4 flex flex-col items-start">
                      <p className="font-bold xs:text-sm sm:text-sm md:text-md lg:text-lg xl:text-lg">Direction</p>
                      <p className="xs:text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl lg:font-bold">189°</p>
                    </div>
                    <div className="h-[100%] xs:col-span-8 sm:col-span-4 flex flex-col items-start">
                      <p className="font-bold xs:text-sm sm:text-sm md:text-md lg:text-lg xl:text-lg">Gust</p>
                      <p className="xs:text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl lg:font-bold">22 km/h</p>
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
                    <p className="xs:text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl lg:font-bold">57%</p>
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
                    <p className="xs:text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl lg:font-bold">45%</p>
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
                    <p className="xs:text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl lg:font-bold">10 km</p>
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
          <div className="h-40 min-h-40 xs:col-span-12 sm:col-span-12 md:col-span-12 px-3 my-3">
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
        </div>
      </div>
      <div className="xs:col-span-12 sm:col-span-12 md:col-span-3 lg:col-span-3 xl:col-span-3 2xl:w-[20%]">
        <Locations />
      </div>
    </div>
    </>
  )
}
export default CityWeather;