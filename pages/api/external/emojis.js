import axios from 'axios'
export default async function handler(req, res) {
  let d = await axios.get(`https://discordapp.com/api/v9/guilds/1026571370940874942/emojis`, {headers: { "Authorization": "Bot MTAzNTQ0ODc2NDM4NDY4MTk4NA.GmYj_-.PGUj86VZom09QhJO9e_iFKfTebeMi22q-DUDkw"}})
  let data = d.data
  res.status(200).json(d.data)
}
