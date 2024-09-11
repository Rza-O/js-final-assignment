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

console.log(waitingTime([ 3, 5, 7, 11, 6 ], 10))
console.log(waitingTime([13, 2], 6))
console.log(waitingTime([13, 2, 6, 7, 10], 6))
console.log(waitingTime([6], 4))
console.log(waitingTime(7 , 10))
console.log(waitingTime("[6,2]", 9))
console.log(waitingTime([7, 8, 3, 4, 5], "9"))




//do i have to provide this Serial Number >  length of array  into a code