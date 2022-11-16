import axios from 'axios'
export default async function handler(req, res) {
  let q = req.query.id;
  if(!q) return res.json({message: "Invalid Parameters Provided"})
  let d = await axios.get(`https://discordapp.com/api/v9/guilds/1026571370940874942/emojis/${q}`, {headers: { "Authorization": "Bot MTAzNTQ0ODc2NDM4NDY4MTk4NA.GUooKw.XuFIx3fYWwedYegaaO7TXHCMTath1xB20ET6aA"}}).catch(err => res.json({isAvaliable:"f", error_detalis: null}))
  //if(d.status === "400") return res.json({avaliable: false})
  let data = d.data
 
  res.status(200).json({avaliable: true , data: data})
}
