import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";

import type { Screens } from "./Screens";

import App from './App'

interface Props{
  changeScreen: Dispatch<SetStateAction<Screens>>,
}

function WeatherWidget({changeScreen}: Props){

  return(
    <>
       <main className=" w-screen h-screen  flex flex-col gap-10 ">
        <div className="flex justify-center items-center flex-wrap flex-col mt-5">
          <h1 className="text-4xl font-bold">Interface-Widgets</h1>
          <h3 className="text-xl"
          onClick={() =>{changeScreen("main")}}>Made by Guilherme Severo</h3>
        </div>
       </main>
    </>
  )
}

export default WeatherWidget;