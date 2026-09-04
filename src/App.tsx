import { useState } from "react";
import "./App.css";

import "./widgetBg.jpg"
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main className="bg-black w-screen h-screen  flex flex-col items-center justify-evenly">
        <div className="flex justify-center items-center flex-wrap flex-col">
          <h1 className="text-4xl font-bold">Interface-Widgets</h1>
          <h3 className="text-xl">Made by Guilherme Severo</h3>
        </div>

        <div className="flex justify-start  w-screen  bg-gray-800/70 p-2  rounded-2xl">
          <div className="flex flex-col justify-center items-center bg-blue-600/80 rounded-2xl p-2 size-100 gap-1">
            <div className="w-[100%] h-100 bg-[url('widgetBg.jpg')] bg-no-repeat bg-cover rounded-t-4xl rounded-b-xl bg-center" ></div>
            <div className="size-[80%] text-3xl font-bold text-left tracking-tighter">Widget Title</div>
            <div className="size-[80%] text-2xl  text-left tracking-wide">Widget Description</div>
            <button className="rounded-2xl size-30 bg-black p-2 font-bold hover:rounded-3xl hover: hover:italic transition-all hover:tracking-widest">Acessar</button>
            
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
