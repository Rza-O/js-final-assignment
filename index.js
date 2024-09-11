function calculateTax(income, expenses) {
    if(income, expenses < 0 || expenses > income){
        return 'Invalid Input'
    }
    const saving = income - expenses;
    const taxAmount = saving * .20;
    return taxAmount;
}


function sendNotification(email) {
    if(email.indexOf('@') === -1){
        return 'Invalid Email'
    }
    const nameAndDomain = email.split("@")
    const notification = nameAndDomain[0] + ' sent you an email from ' + nameAndDomain[1]
    return notification
}


function checkDigitsInName(name) {
    if(typeof name !== 'string'){
        return 'Invalid Input'
    }
    name = name.replace(' ', '')
    for(const char of name){
        if(isNaN(char) === false){
            return true
        }
    }
    return false
}


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


function  waitingTime(waitingTimes, serialNumber) {
    if(!Array.isArray(waitingTimes) || typeof serialNumber !== 'number'){
        return 'Invalid Input';
    }
    let sumOfTimes = 0;
    for(let time of waitingTimes){
        sumOfTimes = sumOfTimes + time;
    }
    let averageTime =  Math.round(sumOfTimes/ waitingTimes.length);
    let peopleBeforeIsrat = (serialNumber - 1 ) - waitingTimes.length;
    let timeRemains = averageTime * peopleBeforeIsrat;
    return timeRemains;
}