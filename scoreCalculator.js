const _ = require('lodash');
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

const scoreCalculatorCascade = (scoreArray) => {
    const scoreObject = {
        score: 0
    }
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
        scoreObject["score"] = scoreObject[String(i+1)].reduce( sum, scoreObject["score"])
    }
    console.log(scoreObject)
    return scoreObject
}

const scoreCalculator = (scoreArray) => {
    if (!Array.isArray(scoreArray)) throw new TypeError("Array Input Required!")
    const scoreObject = {
        score: 0
    }
    let frame  = []
    let flag = 1
    for(let i = 0; i < scoreArray.length; i++){
        if (!_.isNumber(scoreArray[i])) throw new TypeError()
        frame.push(scoreArray[i])
        if( scoreArray[i] == 10 && frame.length == 1) {
            scoreObject[flag] = [...frame, ...scoreArray.slice(i+1, i+3)]
            scoreObject["score"] = scoreObject[String(flag)].reduce( sum, scoreObject["score"])
            frame = []
            flag += 1
        } else if( frame.reduce(sum, 0) == 10){
            scoreObject[flag] = [...frame, ...scoreArray.slice(i+1, i+2)]
            scoreObject["score"] = scoreObject[String(flag)].reduce( sum, scoreObject["score"])
            frame = []
            flag += 1
        } else if( frame.length === 2 ){
            scoreObject[flag] = frame
            scoreObject["score"] = scoreObject[String(flag)].reduce( sum, scoreObject["score"])
            frame = []
            flag += 1
        } if (flag === 10) {
            scoreObject[flag] = scoreArray.slice(i+1, i+4)
            scoreObject["score"] = scoreObject[String(flag)].reduce( sum, scoreObject["score"])
            break
        }
    }
    console.log(scoreObject)
    return scoreObject.score
}

console.log(scoreCalculator([10, 5, 5, 10, 10, 10]))

module.exports = { scoreCalculator }