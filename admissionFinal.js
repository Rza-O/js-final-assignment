function calculateFinalScore(obj) {
    if(typeof obj !== 'object'){
        return 'Invalid Input'
    }
    let totalPoints = 0;
    for(let key in obj){
        totalPoints = obj.testScore + obj.schoolGrade;
        if(obj.isFFamily === true){
            totalPoints = totalPoints + 20;
        }
    }
    if(totalPoints >= 80){
        return true
    }
    return false
}

console.log(calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : false }))
console.log(calculateFinalScore({ name: "Rajib", testScore: 15,  schoolGrade: 25, isFFamily : true  }))
console.log(calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : true  }))
console.log(calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : false  }))
console.log(calculateFinalScore("hello"))
//ask if i have to validate every single type of and do i have to print any message for the number exceding ts and sg