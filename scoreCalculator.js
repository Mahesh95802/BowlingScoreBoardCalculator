const scoreObject = {
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: [],
    10: [],
}

const scoreSheet = []

const sum = (total, element) => total + element

function frameCalculator(flag, i){
    if (i+1 >= scoreSheet.length) { 
        if(flag === 1 ){
            return [scoreSheet[i][0]]
        } 
        return scoreSheet[i]
    }
    if( scoreSheet[i].length === 1){
        return [ ...scoreSheet[i], ...frameCalculator( 2, i+1) ]
    } else if( scoreSheet[i].reduce(sum, 0) === 10 ){
        return [ ...scoreSheet[i], ...frameCalculator( 1, i+1) ]
    }
    if(flag === 1 ){
        return [scoreSheet[i][0]]
    } else if(flag === 2){
        return scoreSheet[i]
    } return scoreSheet[i]
}

const scoreCalculator = (scoreArray) => {
    let frame  = []
    for(let i = 0; i < scoreArray.length; i++){
        frame.push(scoreArray[i])
        if( scoreArray[i] == 10 && frame.length == 1 || frame.length == 2) {
            scoreSheet.push(frame)
            frame = []
        }
    }
    console.log(scoreSheet)
    for(let i = 0; i < scoreSheet.length; i++){
        console.log( frameCalculator(0, i) )
        scoreObject[String(i+1)] = frameCalculator(0, i)
    }
    console.log(scoreObject)
}

console.log(scoreCalculator([10, 5, 5, 9, 0]))