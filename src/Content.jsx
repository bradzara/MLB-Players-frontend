import { PlayersIndex } from "./PlayersIndex";
import { PlayersShow } from "./PlayersShow";
import { Modal } from "./Modal";
import axios from "axios";
import { useState, useEffect } from "react";

export function Content() {
  const [players, setPlayers] = useState([]);
  const [setIsPlayerShowVisible, setIsPlayerShowVisible] 

  const handleIndexPlayers = () => {
    console.log("handleIndexPlayers");
    axios.get("http://localhost:3000/players.json").then((response) => {
      console.log(response.body);
      setPlayers(response.data);
    });
  };  

  const handleShowPlayer = (player) => {
    console.log("handleShowPlayer", player);
    setIsPlayerShowVisible(true);
    setCurrentPlayer(player);
  };

  useEffect(handleIndexPlayers, []);
  
  return (
    <div>
      <PlayersIndex players={players} onShowPlayer={handleShowPlayer}/>
      <PlayersShow player={currentPlayer} />
      <Modal show={setIsPlayerShowVisible} onClose={handleClose}>
        <h1>test</h1>
      </Modal>
    </div>
  );
}