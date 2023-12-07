import React, { Fragment } from "react";
import IndividualDayWeather from "./IndividualDayWeather";

const ForecastCard = ({ forecast }) => {
  return (
    <>
      <div className="h-[100%]">
        <div className="h-[100%] col-span-12 flex flex-col justify-start items-start">
          {forecast &&
            forecast.map((day) => {
              return <IndividualDayWeather day={day} />;
            })}
        </div>
      </div>
    </>
  );
};

export default ForecastCard;
