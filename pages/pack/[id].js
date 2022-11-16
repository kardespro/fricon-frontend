import { useRouter } from 'next/router'
import { useState }  from 'react'
import axios from 'axios'
import Head from '../../components/Header'
import NotFound from '../../components/Errors/NotFound'
import Json from '../../json/packs.json'
export default function Emoji(){
  const [data,setData] = useState()
  const router = useRouter()
//  const { id } = router.query
  const { id } = useRouter().query;
  const timeout = 3000
  const findP = Json.find(a => a.id !== id)
  console.log(id)
  if(!id) return(<><Head /><NotFound /></>)
  if(id !== "13") return(<><Head /><Head /><NotFound /></>)
  if(!findP) return(<><Head /><NotFound /></>)
  return(
     <>
       
     </>
  )
}