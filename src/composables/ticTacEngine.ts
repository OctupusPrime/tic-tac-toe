const win = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

export default function isWin(board: string[][], round: number) {
    let whoWin = ''

    const list: number[] = []
    let listIndex = 0

    if (round === 9)
        whoWin = 'Draw'

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
        if (board[i][j] === 'X')
            list[listIndex] = 1
        else if (board[i][j] === 'O')
            list[listIndex] = 0
        else 
            list[listIndex] = NaN
        listIndex++
        }
    }

    for (let i = 0; i < win.length; i++) {
        const sum = list[win[i][0]] + list[win[i][1]] + list[win[i][2]]
        if (sum === 3) 
        whoWin = 'X win'
        if (sum === 0)
        whoWin = 'O win'
    }

  return whoWin
}