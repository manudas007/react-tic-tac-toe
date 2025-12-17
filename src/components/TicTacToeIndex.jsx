import { useState } from "react";
import Players from "./Player/Index";
import Board from "./Board/Index";
import { calculateWinner } from "../helper/helper";
import GameResultModal from "./common/GameResultModal";

const TicTacToeIndex = () => {
    const [playerOne, setPlayerOne] = useState("Player One");
    const [playerTwo, setPlayerTwo] = useState("Player Two");
    const [activePlayer, setActivePlayer] = useState("X");
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [winner, setWinner] = useState(null);
    const [board,setBoard] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
    ]);
    const handleBoardClick = (rowIndex,cellIndex) => {
        if (board[rowIndex][cellIndex] !== null){
            return; 
        }
        const newBoard = [...board];
        newBoard[rowIndex][cellIndex] = activePlayer;
        setBoard(newBoard);
        const newWinner = calculateWinner(newBoard);
        if (newWinner){            
            if(newWinner === "X"){
                setWinner(playerOne);
            }else{
                setWinner(playerTwo);
            }
            setIsOpenModal(true);
            return;
        }
        const draw = newBoard.flat().every(cell => cell !== null);
        if (draw) {
            setWinner(null);
            setIsOpenModal(true);
            return;
        }
        setActivePlayer((prev)=> prev === "X" ? "O" : "X");
    }
    const handleRestart = () =>{
                setBoard([
                    [null, null, null],
                    [null, null, null],
                    [null, null, null],
                ]);
                setActivePlayer("X");
                setIsOpenModal(false);
                setWinner(null);
    }
    return (
        <>
            <div>
                <h1>Welcome to Tic Tac Toe Game</h1>
            </div>
            <Players 
                playerOne={playerOne}
                setPlayerOne={setPlayerOne}
                playerTwo={playerTwo}
                setPlayerTwo={setPlayerTwo} 
                activePlayer={activePlayer}
            />
            <Board handleBoardClick={handleBoardClick} board={board} />
            <GameResultModal isOpen={isOpenModal} winner={winner} onRestart={handleRestart} />
        </>

    );
}
export default TicTacToeIndex;