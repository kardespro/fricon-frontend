import Hd from '../components/Header'
import axios from 'axios'
import { useState , useEffect } from 'react'
import { Badge, Grid } from "@nextui-org/react";
import  Json  from '../json/packs.json'
export default function Nego(){
  const [data,setData] = useState([])
  const [search,setSearch] = useState("")
  // Search API

   const handleSearch = async (event) => {
    event.preventDefault()
      let d = await axios.get("/api/external/emojis")
      const emo = Json;
      const aranacak = emo.find(a => a.name === `${search}`) || emo.find(a => a.name.includes(search)) || emo.find(a => a.name === "Cheeini Special Gradient Icons")
     setData([{"id": aranacak.id, "name": aranacak.name}] || [])
   }
  
  
  const filterGradient = async (event) => {
    event.preventDefault()
     let d =  await axios.get("/api/external/emojis")
    const emo = Json
    const filtr = emo.filter(a => a.type === "gradient")
    setData(filtr || null)
    
  }


    
  useEffect(() => {
   setTimeout(async() => {
    const emo = JSON.stringify(Json)
    setData(Json)
   
   },2000)
        }, []);
    return(
    <>
      <br/>
      <div className="">
      <form className="" onSubmit={handleSearch}>
       <input className="rounded-2xl w-128 bg-gray-50 border-2 hover:border-3 hover:border-green-300 py-5 px-3 focus:border-indigo-500 focus:ring-indigo-500 border-r-0 text-sm border-indigo-500" name="search" placeholder="Search Here : Anime" onChange={(e) => setSearch(e.target.value)} />
        </form>
      {search &&
      <p className="text-sm">Searching {search} ...</p>
      }
      </div>
      <br />
       <Grid.Container gap={1}>
      <Grid>
      <form onSubmit={filterGradient}>
        <button onChange={(e) => filterr({type: "animated"})}><Badge>Gradient</Badge>
</button>  
        </form>
             
      </Grid>
      
    </Grid.Container>

         <div className="grid md:grid-cols-4 gap-5 pt-6 sm:grid-cols-2">
            
      {data.map((emojinego,index) => 
     

  <div class="rounded-md border-2 border-indigo-500 bg-gray-200 blurple mt-10 shadow-2xl w-39 py-5 px-5 bg-blue-700 pr-4 pl-4 pt-6 text-center bg-[#e5e7eb]" key={index}>
  <div className="objec-cover  items-center"><center><img src={JSON.stringify(emojinego.image).replace(/"/g, '') || "null"} /></center></div>
    <div className="text-center py-5 pr-4"><p className="text-gray-500">{JSON.stringify(emojinego.name).replace(/"/g, '') || "null"}</p></div>
    <br />
    <p className="text-gray-500">{emojinego.description}</p>
    <br />
     <div className="text-center rounded-md bg-[#5865F2] text-gray-50 pt-6 py-5 px-2"><a href={emojinego.download_url} className="text-gray-50">Download</a></div>
  </div>
            
                )}
      <br/>
  </div>
 </>
  )
}
