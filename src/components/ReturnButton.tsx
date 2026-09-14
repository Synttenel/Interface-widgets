import { useState } from "react";

import type { Dispatch, SetStateAction } from "react";

import type { Screens } from "./Screens";

interface Props{
    changeScreen: Dispatch<SetStateAction<Screens>>
}

function ReturnButton({ changeScreen}: Props){

  return(
    <>
      <div className="rounded-full bg-orange-500 w-auto text-center absolute bottom-2 right-2  h-auto p-3"
      onClick={() => {changeScreen("main")}}>Retornar</div>
    </>
  )
}

export default ReturnButton;