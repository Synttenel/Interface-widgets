import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";

import type { Screens } from "./Screens";

import App from './App'
import ReturnButton from "./ReturnButton";

interface Props{
  changeScreen: Dispatch<SetStateAction<Screens>>,
}

function WeatherWidget({changeScreen}: Props){

  return(
    <>
       <main className=" w-screen h-screen justify-center items-center  flex flex-col gap-10 ">

        <div className="w-65 h-65 flex relative bg-linear-to-t  from-cyan-400  to-blue-500  justify-center items-center rounded-4xl p-2">
          <div className="text-2xl absolute left-5 top-5 ">Rio de Janeiro</div>
          <div className="text-6xl absolute left-5 top-20 ">23°</div>
          <img className="absolute left-3 bottom-10" src="https://img.icons8.com/?size=50&id=0qNdJPsoGkQ9&format=png&color=fcc419"/>
          <div className="text-xl absolute left-5 bottom-5">Ensolarado</div>
        </div>

        <ReturnButton changeScreen={changeScreen}/>
       </main>
    </>
  )
}

export default WeatherWidget;