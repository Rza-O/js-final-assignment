function checkDigitsInName(name) {
    if(typeof name !== 'string'){
        return 'Invalid Input'
    }
    name = name.replace(' ', '')
    console.log(name)
    for(const char of name){
        if(!isNaN(char)){
            return true
        }
    }
    return false
}
// console.log(checkDigitsInName('Raj123'))
console.log(checkDigitsInName('Suman'))
console.log(checkDigitsInName('Name2024'))
// console.log(checkDigitsInName('!@#'))
console.log(checkDigitsInName('shah reza 45 ahmed'))
// console.log(checkDigitsInName('shah232reza '))
// console.log(!isNaN(' '))

console.log(checkDigitsInName(["Raj"]))
// checkDigitsInName('hello123')

