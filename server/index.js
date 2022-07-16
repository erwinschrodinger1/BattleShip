const express = require("express")
const app = express();
const cors = require ("cors")
const mongoose = require("mongoose")

app.use(cors());
app.use(express.json());

// const DBURL  = ""//your url
// mongoose.connect('DBURL')

app.post("/api", (req, res) => {
  console.log(req.body);
});

app.get('/api/createMatch',(req,res)=>{
  let matchId = Math.floor(Math.random()*10000+10000).toString();
  res.send(matchId)
  console.log("Match Created of id "+matchId);
})

app.post('/api/joinMatch', (req,res)=>{
  console.log("someone joined to matchid ", req.body);
  res.send(req.body.matchId)
})

app.listen(5000, () => {
  console.log("Server Started at port 5000");
});
