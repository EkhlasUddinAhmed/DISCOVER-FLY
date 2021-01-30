// Declaring global variables
let totalFirstClassNumber, totalFirstClassCost;
let totalEconomicNumber, totalEconomicCost;
let totalCost, vatTaxValue, totalGrandCost;

// All Plus-Minus Button Handiling Starting
document.getElementById('firstClassPlusBTN').addEventListener('click', function () {

    FieldIncrease('firstClassAmount', 1);
    grandTotalCalculation();
});

document.getElementById('firstClassMinusBTN').addEventListener('click', function () {

    let checkingZERO = givingCheck('firstClassAmount');
    if (checkingZERO > 0) {

        FieldIncrease('firstClassAmount', -1);
        grandTotalCalculation();
    }
});


document.getElementById('economicPlusBTN').addEventListener('click', function () {

    FieldIncrease('economicAmount', 1);
    grandTotalCalculation();
});


document.getElementById('economicMinusBTN').addEventListener('click', function () {

    let checkingZERO = givingCheck('economicAmount');
    if (checkingZERO > 0) {
        FieldIncrease('economicAmount', -1);
        grandTotalCalculation();
    }
});
// All Plus Minus Button Handiling Endinging

function FieldIncrease(id, initialValue) {

    let quantityAmount = document.getElementById(id).value;
    let quantityAmountConvert = parseInt(quantityAmount);
    let totalQuantity = quantityAmountConvert + initialValue;
    document.getElementById(id).value = totalQuantity;
}

function textFieldValue(id) {

    let presentValue = document.getElementById(id).innerText;
    let presentValueConvert = parseInt(presentValue);

    return presentValueConvert;
}

function grandTotalCalculation() {

    totalFirstClassNumber = valueConversion('firstClassAmount');
    totalFirstClassCost = totalFirstClassNumber * 150;

    totalEconomicNumber = valueConversion('economicAmount');
    totalEconomicCost = totalEconomicNumber * 100;
    totalCost = totalFirstClassCost + totalEconomicCost;
    let vatAmount = Number(totalCost * .1).toFixed(2);
    vatTaxValue = parseFloat(vatAmount);
    totalGrandCost = totalCost + vatTaxValue;

    document.getElementById('subTotal').innerText = "$" + totalCost;

    document.getElementById('vatAmount').innerText = "$" + vatTaxValue;

    document.getElementById('grandTotal').innerText = "$" + totalGrandCost;

}

function valueConversion(id) {
    let totalAmount = document.getElementById(id).value;
    let totalAmountConvert = parseInt(totalAmount);

    return totalAmountConvert;
}

function givingCheck(id) {
    let checking = valueConversion(id);
    return checking;
}

document.getElementById('bookNowBTN').addEventListener('click', function () {

    const remove = document.getElementById('removeArea');
    remove.style.display = "none";
    const displaySummery = document.getElementById('finalSummary');
    displaySummery.style.display = "block";
    let finalDisplay = "";
    let flyDate, dateFly="";

    const flyFrom = document.getElementById('flyingFrom').value;

    const flyTo = document.getElementById('flyingTo').value;

    flyDate = document.getElementById('flyingDate').value;
    if (flyDate != undefined) {
        dateFly += flyDate;
    } else {

        dateFly += "Flying Date not Fixed Yet:Fix it";
    }


    if (totalFirstClassNumber == undefined && totalEconomicNumber == undefined) {

        finalDisplay = "You have'nt chosen any One: Please Choose atleast one from Either First Class or Economic Class.";
        document.getElementById('displayFinal').innerText = finalDisplay;

    } else if (totalFirstClassNumber == 0 && totalEconomicNumber == 0) {
        finalDisplay = "You have'nt chosen any One: Please Choose atleast one from Either First Class or Economic Class.";
        document.getElementById('displayFinal').innerText = finalDisplay;
    } else {
        finalDisplay = "1.First Class Selected Numbers:" + totalFirstClassNumber + "\n" + "2.Total First Class Cost:$ " + totalFirstClassCost + "\n3.Economic Selected Numbers: " + totalEconomicNumber + "\n" + "4.Total Economic  Cost:$" + totalEconomicCost + "\n 5.Subtotal Cost:$" + totalCost + "\n 6.Total Vat:$" + vatTaxValue + "\n7.Total Final cost: $" + totalGrandCost + "\n\n\nFlying From: " + flyFrom + "\n\n" + "Flying To: " + flyTo + "\n\nFlying date: " + dateFly;
        document.getElementById('displayFinal').innerText = finalDisplay;
    }
})

// Input Field Clicking Handling Start
function firstClassHandiling() {
    grandTotalCalculation();
}

function EconomicHandiling() {
    grandTotalCalculation();
}
// Input Field Clicking Handling Ending