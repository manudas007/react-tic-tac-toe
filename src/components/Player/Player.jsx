import { useState } from "react";

const Player = ({ playerName, setPlayerName, activePlayer, playerSymbol }) => {
  const [isEditable, setIsEditable] = useState(false);
  let playerNameSection = '';
  const handleEdit = () => {
    setIsEditable((prev) => !prev);
  }
  const handlePlayerNameChange = (e) => {
    setPlayerName(e.target.value);
  }
  if (isEditable) {
    playerNameSection = <input type="text" className="border-2 border-gray-300 rounded-md p-2" placeholder="Enter Player Name" onChange={handlePlayerNameChange} value={playerName} />
  } else {
    playerNameSection = <span className="text-xl font-semibold">{playerName}</span>
  }
  return (
    <div className="flex flex-col items-center">
      <div className={`p-3 rounded-md border-2 transition ${activePlayer ? "active-player" : ""} `} >
        {playerNameSection}
        <button className="ml-2 p-2 bg-blue-500 text-white rounded-md" onClick={handleEdit}>{isEditable ? "Save" : "Edit"}</button>
      </div>
      <span className="mt-2 text-gray-600">Symbol: {playerSymbol}</span>
    </div>

  )
}
export default Player;