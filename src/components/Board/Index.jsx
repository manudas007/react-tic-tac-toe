const Board = ({handleBoardClick,board}) => {


  return (
    <div className="flex justify-center items-center mt-8">
      <ol className="grid grid-rows-3 gap-2 list-none p-0 m-0">
        {board.map((row, rowIndex) => (
          <li key={rowIndex}>
            <ol className="grid grid-cols-3 gap-2 list-none p-0 m-0">
              {row.map((cell, cellIndex) => (
                <li key={cellIndex}>
                  <button
                  onClick={()=>handleBoardClick(rowIndex,cellIndex)}
                    className="w-20 h-20 border-2 border-blue-700
                               flex items-center justify-center
                               text-3xl font-bold
                               hover:bg-gray-200 transition"
                  >
                    {cell}
                  </button>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Board;
