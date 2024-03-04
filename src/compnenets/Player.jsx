import React from "react";
import { useState } from "react";

function Player({ initialName, symbol,isActive }) {
  const [playerName, setplayerName] = useState(initialName);
  const [isEditing, setisEditing] = useState(false);
  let editablePlayerName = <span className="player-name">{playerName}</span>;
  function handleEditClick() {
    setisEditing((editing) => !editing);
  }

  function handleChange(event) {
    setplayerName(event.target.value);
  }

  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }
  return (
    <>
      <li className={isActive ? 'active' : undefined}>
        <span className="player">
          <span className="player-name">{editablePlayerName}</span>
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
      </li>
    </>
  );
}

export default Player;
