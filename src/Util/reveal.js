const dirs = [[-1,0],[-1,1],[1,0],[1,1],[0,1],[0,-1],[-1,-1],[1,-1]];
export const revealed = (arr, x, y, newNonMinesCount) =>{
    if(arr[x][y].revealed) return;
    let flipped = [];
    flipped.push(arr[x][y]);
    while (flipped.length !== 0){
        let single = flipped.pop();

        if(!single.revealed){
            newNonMinesCount--;
            single.revealed = true;
        }
        if(single.value !== 0) break;

        //setimeout()
        for(let k = 0; k < 8; k ++){
            let i = single.x + dirs[k][0];
            let j = single.y + dirs[k][1];
            if(i >= 0 && i < arr.length && j >= 0 && j < arr[0].length && arr[i][j].value === 0 && !arr[i][j].revealed){
                flipped.push(arr[i][j]);
            }
        }

        //start revealing items
        for(let k = 0; k < 8; k ++){
            let i = single.x + dirs[k][0];
            let j = single.y + dirs[k][0];
            if(i >= 0 && i < arr.length && j >= 0 && j < arr[0].length && !arr[i][j].revealed){
                arr[i][j].revealed = true;
                newNonMinesCount --;
            }
        }


    }
    return {arr, newNonMinesCount};
};
