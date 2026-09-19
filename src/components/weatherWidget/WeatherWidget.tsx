import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";

import type { Screens } from "../Screens";

import weatherData from "./weatherData";

import App from '../App'
import ReturnButton from "../ReturnButton";

interface Props{
  changeScreen: Dispatch<SetStateAction<Screens>>,
}

function WeatherWidget({changeScreen}: Props){

  console.log(weatherData);

  return(
    <>
       <main className=" w-screen h-screen justify-center items-center  flex flex-col gap-10 ">
          <div className="w-screen h-screen flex flex-col justify-center gap-5 bg-linear-to-b from-blue-100 to-blue-700">
            <div className="flex flex-col justify-top mt-30 items-center">
              <h2 className="text-center text-3xl text-shadow-lg text-shadow-gray-500">Brasília</h2>
              <h1 className="text-center text-5xl text-shadow-lg text-shadow-gray-500">{Math.floor(weatherData.current.temperature_2m)}°</h1>
              <h2 className="text-center text-1xl mt-10 text-shadow-lg text-shadow-gray-500">Sensação térmica: {Math.floor(weatherData.current.apparent_temperature)}°</h2>
              <p className="text-center text-1xl text-shadow-lg text-shadow-gray-500">Precipitação: {weatherData.current.precipitation?
              weatherData.current.precipitation:
              "nenhuma"}</p>
            </div>
            <div className="flex p-5 rounded-2xl flex-col justify-top items-center bg backdrop-blur-2xl h-1/4 w-full bg-transparent">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate facilis soluta necessitatibus perferendis libero quod alias voluptatibus quis, esse facere iure, nulla debitis quibusdam eius sequi tempora officia magnam. Dolore?
            </div>
          </div>

        <ReturnButton changeScreen={changeScreen}/>
       </main>
    </>
  )
}

export default WeatherWidget;