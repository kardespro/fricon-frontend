import express from 'express';
import next from 'next';
import axios from 'axios'
const app = express();

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const nextHandler = nextApp.getRequestHandler();

nextApp.prepare().then(() => {

  // Message Sending
  app.get("/custom-route", (req, res) => {
    res.send("Custom Route!!")
  })
  app.get("/api/resources/moderationEmojis", async(req,res) => {
   // let $inc = ["hammer", "ban", "shield", "guard", "moderate", "secure", "web", "protect"]
    let $inc = ["fricon_hammer","fricon_admin"]
    let $start = "fricon_"
    let d = await axios.get(`https://discordapp.com/api/v9/guilds/1026571370940874942/emojis`, {headers: { "Authorization": "Bot tokenhere"}})
  let data = d.data
 let filtered = data.filter(a => a.name.includes($inc))
  //let filtered = data.find(a => $inc.includes(a.name))
  //res.json([{"id": filtered.id, "name": filtered.name}])
    res.json(filtered)
  })
  app.get("*", nextHandler)
  app.post('*', nextHandler)

  app.listen(port, err => {
    if (err) throw err
    console.log(`Listening on port ${port}`)
  })
})
