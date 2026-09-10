import { useState } from "react";

import type { Widgets } from "./Widgets";

import WidgetBg from './widgetBg.jpg'

interface Props{
    widgets: Widgets[],
}

function MainMenu({widgets}: Props){

  return(
    <>
      <main className=" w-screen h-screen  flex flex-col gap-10 ">
        <div className="flex justify-center items-center flex-wrap flex-col mt-5">
          <h1 className="text-4xl font-bold">Interface-Widgets</h1>
          <h3 className="text-xl">Made by Guilherme Severo</h3>
        </div>

        <div className="grid grid-flow-col  justify-start items-center  w-screen  bg-gray-800/70 p-5  rounded-2xl gap-10 overflow-x-auto snap-x snap-mandatory md:grid-flow-row md:justify-center">
          {widgets.map((widget, _) => (
            <div className="flex flex-col justify-center items-center  bg-blue-600/80 rounded-2xl p-2 w-75 h-100 gap-1 snap-center"
            key={widget.id}>
            <img className="w-full h-100 bg-no-repeat bg-cover rounded-t-4xl rounded-b-xl bg-center"
            src={widget.image}/>
            <div className="size-[80%] text-3xl font-bold text-left tracking-tighter">{widget.title}</div>
            <div className="size-[80%] text-2xl  text-left tracking-wide">{widget.description}</div>
            <button className="rounded-2xl size-30 bg-black p-2 font-bold hover:rounded-3xl hover: hover:italic transition-all hover:tracking-widest"
            onClick={() => {widget.redirect()}}>Acessar</button>
            
          </div>
          ))}
        </div>
      </main>
    </>
  )
}

export default MainMenu;