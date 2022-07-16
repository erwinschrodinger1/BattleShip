import React, { useState } from "react";
import "./Board.sass";
import BaseURL from "../../../common/httpConfig/baseUrl";
import axios from "axios";
export default function Board() {
  const [boardState, setBoardState] = useState([
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ]);

  function sendData() {
    console.log(boardState);
    axios.post(BaseURL, boardState).then((res)=>{
      
    });
  }

  return (
    <div className="Board">
      {boardState.map((dataRow, indexRow) => (
        <>
          <div className="eachRows" key={indexRow}>
            {boardState[indexRow].map((dataColumn, indexColumn) => {
              return (
                <div
                  key={indexColumn}
                  className={
                    dataColumn === 0 ? "eachShell" : "eachShell active"
                  }
                  onClick={() => {
                    let boardData = boardState.slice();
                    boardData[indexRow][indexColumn] = 1;
                    setBoardState(boardData);
                  }}
                ></div>
              );
            })}
          </div>
        </>
      ))}
      <button onClick={sendData}>Send Data</button>
    </div>
  );
}
