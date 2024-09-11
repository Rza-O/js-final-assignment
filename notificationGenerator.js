function sendNotification(email) {
    if(email.indexOf('@') === -1){
        return 'Invalid Email'
    }
    const nameAndDomain = email.split("@")
    const notification = nameAndDomain[0] + ' sent you an email from ' + nameAndDomain[1]
    return notification
}
console.log(sendNotification('hello@gmail.com'))
console.log(sendNotification('farhan34@yahoo.com'))
console.log(sendNotification('nadim.naem5@outlook.com'))
console.log(sendNotification('fahim234.hotmail.com'))
console.log(sendNotification('sadia8icloud.com'))
console.log(sendNotification('ssdajd'))