import Hd from '../components/Header'
import axios from 'axios'
import { useState , useEffect } from 'react'
import { Badge, Grid } from "@nextui-org/react";

export default function Nego(){
  const [data,setData] = useState([])
  const [search,setSearch] = useState("")
  // Search API

   const handleSearch = async (event) => {
    event.preventDefault()
      let d = await axios.get("/api/external/emojis")
      const emo = d.data
      const aranacak = emo.find(a => a.name === `fricon_${search}`) || emo.find(a => a.name.includes(search)) || emo.find(a => a.name === "fricon_star")
     setData([{"id": aranacak.id, "name": aranacak.name}] || [])
   }
  
  const filterMod = async (event) => {
    event.preventDefault()
     let d =  await axios.get("/api/resources/moderationEmojis")
    const emo = d.data
    setData(emo || null)
    
  }
  
  
  const filterAnimated = async (event) => {
    event.preventDefault()
     let d =  await axios.get("/api/external/emojis")
    const emo = d.data
    const filtr = d.data.filter(a => a.animated === true)
    setData(filtr || null)
    
  }
  
  const filterAll = async (event) => {
    event.preventDefault()
     let d =  await axios.get("/api/external/emojis")
    const emo = d.data
    
    setData(emo || null)
    
  }
  
  useEffect(() => {
   setTimeout(async() => {
      let d = await axios.get("/api/external/emojis")
    const emo = d.data
    setData(emo)
   
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
      <form onSubmit={filterAnimated}>
        <button onChange={(e) => filterr({type: "animated"})}><Badge>Animated</Badge>
</button>  
        </form>
             
      </Grid>
      <Grid>
        <form onSubmit={filterAll}>
        <button onChange={(e) => filterr({type: "animated"})}><Badge color="primary">All</Badge>
</button>  
        </form>
       
      </Grid>
      <Grid>
         <form onSubmit={filterMod}>
        <button onChange={(e) => filterr({type: "animated"})}><Badge color="secondary">Moderation</Badge>
</button>  
        </form>
      
      </Grid>
      <Grid>
        <Badge color="success">Success</Badge>
      </Grid>
      <Grid>
        <Badge color="warning">Warning</Badge>
      </Grid>
      <Grid>
        <Badge color="error">Error</Badge>
      </Grid>
    </Grid.Container>

         <div className="grid grid-cols-2 gap-5 pt-6">
            
      {data.map((emojinego,index) => 
     

  <div class="rounded-md border-2 border-indigo-500 bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-sky-400 to-blue-800 mt-10 shadow-2xl w-39 py-5 px-5 bg-blue-700 pr-4 pl-4 pt-6 text-center " key={index}>
  <div className="objec-cover  items-center"><center><img src={`https://cdn.discordapp.com/emojis/${emojinego.id}.png`}/></center></div>
    <div className="text-center py-5 pr-4"><p className="text-gray-50">{JSON.stringify(emojinego.name).replace(/"/g, '').split("fricon_") || "null"}</p></div>
    <div className="text-center rounded-md bg-emerald-500 text-gray-50 py-5 px-2 h-14"><button className="text-gray-50 text-center">View</button></div>
    <br />
     <div className="text-center rounded-md bg-emerald-500 text-gray-50 pt-6 py-5 px-2"><a href={`https://cachefriconfun.kardespro.repl.co/storage/emojis/download?id=${emojinego.id}`} className="text-gray-50">Download</a></div>
  </div>
            
                )}
      <br/>
  </div>
 </>
  )
}
