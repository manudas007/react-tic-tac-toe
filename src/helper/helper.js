const calculateWinner = (board) =>{
    const winningCombinations = [
        // Rows
        [[0,0],[0,1],[0,2]],
        [[1,0],[1,1],[1,2]],
        [[2,0],[2,1],[2,2]],
        // Columns
        [[0,0],[1,0],[2,0]],
        [[0,1],[1,1],[2,1]],
        [[0,2],[1,2],[2,2]],
        // Diagonals
        [[0,0],[1,1],[2,2]],
        [[0,2],[1,1],[2,0]]
    ];

    for (let i = 0; i < winningCombinations.length; i++) {
        const [a,b,c] = winningCombinations[i];
        const value = board[a[0]][a[1]];
        if (
            value &&
            value === board[b[0]][b[1]] &&
            value === board[c[0]][c[1]]
        ) {
            return value;
        }
    }
    return null;
}

export { calculateWinner };