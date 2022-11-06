{
    const formElement = document.querySelector(".js-form");
    const sumElement = document.querySelector(".js-sum");
    const currencyInputElement = document.querySelector(".js-currencyInput");
    const currencyOutputElement = document.querySelector(".js-currencyOutput");
    const resultElement = document.querySelector(".js-result");
    const rateEUR_Element = document.querySelector(".js-rateEUR");
    const rateUSD_Element = document.querySelector(".js-rateUSD");
    const rateGBP_Element = document.querySelector(".js-rateGBP");
    const ratePLN = 1;
    const rateEUR = +rateEUR_Element.value;
    const rateUSD = +rateUSD_Element.value;
    const rateGBP = +rateGBP_Element.value;
    let currencyChar;

    const setRateIn = () => {
        switch (currencyInputElement.value) {
            case "PLN":
                return ratePLN
            case "EUR":
                return rateEUR
            case "USD":
                return rateUSD
            case "GBP":
                return rateGBP
        }
    }

    const setResult = () => {
        const amount = +sumElement.value;
        const rateIn = setRateIn();
        switch (currencyOutputElement.value) {
            case "PLN":
                currencyChar = " zł";
                return amount * rateIn / ratePLN
            case "EUR":
                currencyChar = " €";
                return amount * rateIn / rateEUR
            case "USD":
                currencyChar = " $";
                return amount * rateIn / rateUSD
            case "GBP":
                currencyChar = " £";
                return amount * rateIn / rateGBP
        }
    }

    const recordCorrectRates = () => {
        if (currencyInputElement.value !== currencyOutputElement.value) {
            currencyInputLast = currencyInputElement.value
            currencyOutputLast = currencyOutputElement.value
        }
    }

    formElement.addEventListener("input", () => {
        resultElement.innerText = ("")
        recordCorrectRates();
    })

    let currencyInputLast = recordCorrectRates;
    currencyInputElement.addEventListener("input", () => {
        if (currencyInputElement.value === currencyOutputElement.value) {
            currencyOutputElement.value = currencyInputLast
        }
    })

    let currencyOutputLast = recordCorrectRates;
    currencyOutputElement.addEventListener("input", () => {
        if (currencyInputElement.value === currencyOutputElement.value) {
            currencyInputElement.value = currencyOutputLast
        }
    })
    const init = () => {
        recordCorrectRates();
        formElement.addEventListener("submit", (event) => {
            event.preventDefault();
            const result = setResult(currencyOutputElement.value);
            resultElement.innerHTML = `${result.toFixed(2)}${currencyChar}`;
        })
    }
    init();
}