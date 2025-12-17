const GameResultModal = ({ isOpen, winner, onRestart }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative w-full max-w-md p-4">
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <h3 className="mb-6 text-body text-lg font-medium">
            {winner ? `${winner} won the game 🎉` : "Game is a Draw 🤝"}
          </h3>
          <button
            onClick={onRestart}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Restart Game
          </button>

        </div>
      </div>
    </div>
  );
};

export default GameResultModal;
