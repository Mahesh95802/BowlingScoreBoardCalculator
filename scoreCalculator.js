const sum = (total, element) => total + element

const scoreCalculator = (scoreArray) => {
    const scoreSheet = []
    let frame  = []
    for(let i = 0; i < scoreArray.length; i++){
        frame.push(scoreArray[i])
        if( scoreArray[i] == 10 && frame.length == 1 || frame.length == 2) {
            scoreSheet.push(frame)
            frame = []
        }
    }
    console.log(scoreSheet)
    let score = 0
    for(let i = 0; i < scoreSheet.length; i++){
        let flag = 0
        score += scoreSheet.reduce((frameScore, element) => {
            frameScore += element.reduce(sum, 0)
            // if(flag == 1)
            if(element.includes(10)) { flag = 2 }
            else if(element.reduce(sum, 0) === 10) { flag = 1 }
            if( flag === 0 ) { arr.splice(1); } 
            return frameScore
        }, 0)
    }

}

console.log(scoreCalculator([10, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]))

module.exports = {scoreCalculator}