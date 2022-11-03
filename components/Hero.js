import axios from 'axios'
import { Badge, Grid } from "@nextui-org/react";


export default function Hero(){
  return(
    <div className="hero min-h-screen bg-base-200 blurple">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold"><img src="./logo-no-text.png" className="w-16 h-16 max-w-md mx-auto rounded-2xl blurple bg-blue-700 " /> 
        <br />
        Fricon</h1>
      <p className="py-6">Fricon is Discord Emoji & Icons Land . A Million Of Emojis and Icons Avaliable in Fricon</p>
      <button className="btn btn-primary"><i class="fa-brands fa-discord pr-4"></i> Discord</button>
    </div>
  </div>
</div>
  )
}