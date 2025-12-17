import Player from "./Player";

const Players = ({ playerOne, setPlayerOne, playerTwo, setPlayerTwo, activePlayer }) => {
  return (
    <div className="flex justify-center gap-10 mt-10">
      <Player playerName={playerOne} setPlayerName={setPlayerOne} activePlayer={activePlayer === "X"} playerSymbol="X" />
      <Player playerName={playerTwo} setPlayerName={setPlayerTwo} activePlayer={activePlayer === "O"} playerSymbol="O" />
    </div>
  );
}
export default Players;