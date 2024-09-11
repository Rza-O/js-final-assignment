/*function signature/sample */
function calculateTax(income, expenses) {
    if(income, expenses < 0 || expenses > income){
        return 'Invalid Input'
    }
    const saving = income - expenses;
    const taxAmount = saving * .20;
    return taxAmount;
}
console.log(calculateTax(10000, 3000));
console.log(calculateTax(34000, 1753));
console.log(calculateTax(5000, 1500));
console.log(calculateTax(7000, 7000));
console.log(calculateTax(-5000, 2000));
console.log(calculateTax(6000, -1500));
console.log(calculateTax(-6000, -1500));
console.log(calculateTax(2000, 15000));