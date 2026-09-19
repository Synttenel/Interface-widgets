import { useState } from "react";
import "./App.css";

import type { Screens } from "./Screens";

import MainMenu from "./MainMenu";
import WeatherWidget  from "./weatherWidget/WeatherWidget";


import widgetBg from './widgetBg.jpg'
function App() {


  
  const [screen, setScreen] = useState<Screens>("main");
  const [widgets, setWidgets] = useState([
    {
      id: 0,
      title: "Weather",
      description: "Weather phone widget",
      image: widgetBg,
      redirect: () => {setScreen("weather")}
    },
    {
      id: 1,
      title: "Weather",
      description: "Weather phone widget",
      image: widgetBg,
      redirect: () => {}
    },
    {
      id: 2,
      title: "Weather",
      description: "Weather phone widget",
      image: widgetBg,
      redirect: () => {}
    },
    {
      id: 3,
      title: "Weather",
      description: "Weather phone widget",
      image: widgetBg,
      redirect: () => {}
    },

  ]);

  switch(screen){
    case "main":
      return <MainMenu widgets={widgets} />;
      break;
    case "weather":
      return <WeatherWidget changeScreen={setScreen}/>
  }


  
}

export default App;
