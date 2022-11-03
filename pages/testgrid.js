import Hd from '../components/Header'
import axios from 'axios'
import { useState , useEffect } from 'react'
import json from '../json/emojis.json'
export default function Nego(){
  const [data,setData] = useState([])

  useEffect(() => {
   setTimeout(async() => {
      let d = await axios.get("/api/external/emojis")
    const emo = d.data
   setData(emo)
    
   },2000)
        }, []);
    return(
    <>
    <Hd />
         <div class="grid grid-cols-2 gap-5 pt-6">
      {data.map((emojinego,index) => 
     

  <div class="rounded-md border-2 border-cyan-200 shadow-2xl w-39 py-5 px-5 bg-blue-700 pr-4 pl-4 pt-6 text-center " key={index}>
  <div className="objec-cover  items-center"><center><img src={`https://cdn.discordapp.com/emojis/${emojinego.id}.png`}/></center></div>
    <div className="text-center py-5 pr-4"><p className="text-gray-50">{JSON.stringify(emojinego.name).replace(/"/g, '').split("fricon_") || "null"}</p></div>
    <div className="text-center rounded-md bg-emerald-500 text-gray-50 py-5 px-2"><button className="text-gray-50">View</button></div>
  </div>
            
                )}
      <br/>
  </div>
 </>
  )
}