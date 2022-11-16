import axios from 'axios'
export default async function handler(req, res) {
  let d = await axios.get(`https://discordapp.com/api/v9/guilds/1026571370940874942/emojis`, {headers: { "Authorization": "Bot tokenhere"}})
  let data = d.data
  res.status(200).json(d.data)
}
