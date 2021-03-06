
// import "./getblock.css";
import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function BlockHash() {
  const blockNum = useLocation();

  const [getBlock, setGetBlock] = useState([]);
  const [getDifficulty, setGetDifficulty] = useState("");

  const url = "http://218.147.82.106:20000/getBlock?hash=" + blockNum.state;

  useEffect(() => {
    axios.get(url).then((response) => {
      setGetBlock(response.data[0]);
    });
  }, []);

  //   if(getBlock != 'undefined' && getBlock != null) {
  //     setGetDifficulty(getBlock[0].Difficulty)
  //  }

  console.log(blockNum.state);
  console.log(getBlock);
  console.log(getBlock.Difficulty);
  return (
    <div className="getBlock-container">
      <div className="getBlock-inside-container">
        <div className="block-header"># Block Hash</div>
        <div className="block-info-box">
          <div>Hash : {getBlock.Hash}</div>
          <div>Difficulty : {getBlock.Difficulty}</div>
          <div>Number : {getBlock.Number}</div>
          <div>GasLimit : {getBlock.GasLimit}</div>
          <div>GasUsed : {getBlock.GasUsed}</div>
          <div>Miner : {getBlock.Miner}</div>
          <div>Nonce : {getBlock.Nonce}</div>
          <div>Size : {getBlock.Size}</div>
          <div>TotalDifficulty : {getBlock.TotalDifficulty}</div>
          <div>TransactionsRoot : {getBlock.TransactionsRoot}</div>
        </div>
        <Stack spacing={2} direction="row" justifyContent="center">
          <Button variant="outlined" size="large">
            <Link to = "/">
            HOME
            </Link>
          </Button>
        </Stack>
      </div>
    </div>
  );
}

export default BlockHash;
