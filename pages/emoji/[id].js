import { useRouter } from 'next/router'
import { useState }  from 'react'
import axios from 'axios'
import Head from '../../components/Header'
import NotFound from '../../components/Errors/NotFound'
export default function Emoji(){
  const [data,setData] = useState()
  const router = useRouter()
//  const { id } = router.query
  const { id } = useRouter().query;
  const timeout = 3000
  if(!id) return(<><Head /><NotFound /></>)
  if(id !== "13") return(<><Head /><Head /><NotFound /></>)
  
  return(
     <>
       
     </>
  )
}