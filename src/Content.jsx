import { PlayersIndex } from "./PlayersIndex";
import { PlayersShow } from "./PlayersShow";
import { PlayersNew } from "./PlayersNew";
import { Modal } from "./Modal";
import axios from "axios";
import { useState, useEffect } from "react";

export function Content() {
  const [players, setPlayers] = useState([]);
  const [isPlayerShowVisible, setIsPlayerShowVisible] = useState(false);
  const [currentPlayer,setCurrentPlayer] = useState({});

  const handleIndexPlayers = () => {
    console.log("handleIndexPlayers");
    axios.get("http://localhost:3000/players.json").then((response) => {
      console.log(response.body);
      setPlayers(response.data);
    });
  };  

  const handleCreatePlayer = (params, successCallback) => {
    console.log("handleCreatePhoto", params);
    axios.post("http://localhost:3000/players.json", params).then((response) => {
      setPlayers([...players, response.data]);
      successCallback();
    });
  }

  const handleUpdatePlayer = (id, params, successCallback) => {
    console.log("Player updated", params);
    axios.patch(`http://localhost:3000/players/${id}.json`, params).then((response) => {
      setPlayers(
        players.map((player) => {
          if (player.id === response.data.id) {
            return response.data;
          } else {
            return player;
          }
        })
      );
      successCallback();
      handleClose();
    });
  }

  const handleShowPlayer = (player) => {
    console.log("handleShowPlayer", player);
    setIsPlayerShowVisible(true);
    setCurrentPlayer(player);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsPlayerShowVisible(false);
  }

  useEffect(handleIndexPlayers, []);
  
  return (
    <div>
      <PlayersNew onCreatePlayer={handleCreatePlayer}/>
      <PlayersIndex players={players} onShowPlayer={handleShowPlayer}/>
      <Modal show={isPlayerShowVisible} onClose={handleClose}>
       <PlayersShow player={currentPlayer} onUpdatePlayer={handleUpdatePlayer}/>
      </Modal>
    </div>
  );
}