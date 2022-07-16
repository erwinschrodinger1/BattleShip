import React, { useState } from 'react'
import axios from 'axios'
import BaseURL from '../../../common/httpConfig/baseUrl'
import {useNavigate} from 'react-router-dom'
export default function LoginPage() {
  const navigate = useNavigate()
  const [matchId, setMatchId] = useState(0)
  function createMatch(){
    axios.get(BaseURL+"/createMatch").then((res)=>{
      navigate(`/board/${res.data}`)
    })
  }
  function joinMatch(){
    axios.post(BaseURL+"/joinMatch", {matchId}).then(res=>{
      console.log(res);
      navigate(`/board/${res.data}`)
    })
  }
  return (
    <>
    <div>LoginPage</div>
    <button onClick={createMatch}>Create A match</button>
    <input type="text" placeholder="Enter the code" onChange={(e)=>{
      setMatchId(e.target.value)
    }}/>
    <button onClick={joinMatch}>Join a match</button>
    </>
  )
}
