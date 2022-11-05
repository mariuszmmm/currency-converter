let formElement = document.querySelector(".js-form");
let sumElement = document.querySelector(".js-sum");
let currencyInputElement = document.querySelector(".js-currencyInput");
let currencyOutputElement = document.querySelector(".js-currencyOutput");
let resultElement = document.querySelector(".js-result");
let rateEUR_Element = document.querySelector(".js-rateEUR");
let rateUSD_Element = document.querySelector(".js-rateUSD");
let rateGBP_Element = document.querySelector(".js-rateGBP");
let currencyInputLast;
let currencyOutputLast;

if (currencyInputElement.value !== currencyOutputElement.value) {
    currencyInputLast = currencyInputElement.value
    currencyOutputLast = currencyOutputElement.value
}

formElement.addEventListener("input", () => {
    resultElement.innerText = ("")
    if (currencyInputElement.value !== currencyOutputElement.value) {
        currencyInputLast = currencyInputElement.value
        currencyOutputLast = currencyOutputElement.value
    }
})

currencyInputElement.addEventListener("input", () => {
    if (currencyInputElement.value === currencyOutputElement.value) {
        currencyOutputElement.value = currencyInputLast
    }
})

currencyOutputElement.addEventListener("input", () => {
    if (currencyInputElement.value === currencyOutputElement.value) {
        currencyInputElement.value = currencyOutputLast
    }
})

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    let amount = +sumElement.value;
    let rateEUR = +rateEUR_Element.value;
    let rateUSD = +rateUSD_Element.value;
    let rateGBP = +rateGBP_Element.value;
    let result;
    let rateIn;
    const ratePLN = 1;
    let currencyChar;

    switch (currencyInputElement.value) {
        case "PLN":
            rateIn = ratePLN
            break;
        case "EUR":
            rateIn = rateEUR
            break;
        case "USD":
            rateIn = rateUSD
            break;
        case "GBP":
            rateIn = rateGBP
            break;
    }

    switch (currencyOutputElement.value) {
        case "PLN":
            currencyChar = " zł";
            result = amount * rateIn / ratePLN
            break;
        case "EUR":
            currencyChar = " €";
            result = amount * rateIn / rateEUR
            break;
        case "USD":
            currencyChar = " $";
            result = amount * rateIn / rateUSD
            break;
        case "GBP":
            currencyChar = " £";
            result = amount * rateIn / rateGBP
            break;
    }
    resultElement.innerHTML = `${result.toFixed(2)}${currencyChar}`;
})

