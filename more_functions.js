"use strict"

function displayMailingLabel(name, address, city, state, zip) {
return (name + address + city + state + zip);

}

console.log(displayMailingLabel('Andrea ', '1210 E. Jahns Dr. ', 'Casa Grande ', 'Arizona ', '85122 '));

function addNumbers(num1, num2){
    return num1 +num2;
}
console.log(addNumbers(25,10));


function displayReceipt(totalDue, amountPaid) {
    // Calculate change due
    let changeDue = amountPaid - totalDue;

    // Check if change is negative (indicating insufficient payment)
    if (changeDue < 0) {
        // Calculate the additional amount needed
        let additionalAmountNeeded = totalDue - amountPaid;
        console.log("Insufficient payment. Additional amount of $" + additionalAmountNeeded.toFixed(2) + " needed.");
    } else {
        // Format the numbers
        let formattedTotalDue = "$" + totalDue.toFixed(2);
        let formattedAmountPaid = "$" + amountPaid.toFixed(2);
        let formattedChangeDue = "$" + changeDue.toFixed(2);

        // Display the receipt
        console.log("Total Due: " + formattedTotalDue);
        console.log("Amount Paid: " + formattedAmountPaid);
        console.log("Change Due: " + formattedChangeDue);
    }
}

// Example usage:
let totalDue = 50.25; // Total amount due
let amountPaid = 80; // Amount paid by the customer

// Display the receipt
displayReceipt(totalDue, amountPaid);

