{ 
    const currencyInputElement = document.querySelector(".js-currencyInput");
    const currencyOutputElement = document.querySelector(".js-currencyOutput");
    let currencyInputLast = currencyInputElement.value
    let currencyOutputLast = currencyOutputElement.value

    const symbolSelection = () => {
        switch (convertToCurrency) {
            case "PLN":
                return " zł";
            case "EUR":
                return " €";
            case "USD":
                return " $";
            case "GBP":
                return " £";
        }
    }

    const rateSelectionInputCurrency = (rateEUR, rateUSD, rateGBP) => {
        convertFromCurrency = currencyInputElement.value
        switch (convertFromCurrency) {
            case "PLN":
                return 1
            case "EUR":
                return rateEUR
            case "USD":
                return rateUSD
            case "GBP":
                return rateGBP
        }
    }

    const calculateResult = (convertToCurrency) => {
        const rateEURElement = document.querySelector(".js-rateEUR");
        const rateUSDElement = document.querySelector(".js-rateUSD");
        const rateGBPElement = document.querySelector(".js-rateGBP");
        const rateEUR = rateEURElement.value
        const rateUSD = rateUSDElement.value
        const rateGBP = rateGBPElement.value
        const sumElement = document.querySelector(".js-sum");
        const amount = +sumElement.value;
        const rateInput = rateSelectionInputCurrency(rateEUR, rateUSD, rateGBP);

        switch (convertToCurrency) {
            case "PLN":
                return amount * rateInput
            case "EUR":
                return amount * rateInput / rateEUR
            case "USD":
                return amount * rateInput / rateUSD
            case "GBP":
                return amount * rateInput / rateGBP
        }
    }

    const displayResult = (convertToCurrency) => {
        const resultElement = document.querySelector(".js-result");
        const result = calculateResult(convertToCurrency);
        const symbolCurrency = symbolSelection(convertToCurrency);
        resultElement.innerHTML = `${result.toFixed(2)}${symbolCurrency}`;
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        convertToCurrency = currencyOutputElement.value
        displayResult(convertToCurrency);
    }

    const saveDifferentRates = () => {
        currencyInputLast = currencyInputElement.value;
        currencyOutputLast = currencyOutputElement.value;
    }

    const eventOnForm = (event) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerHTML = ("");

        if (currencyInputElement.value !== currencyOutputElement.value) {
            saveDifferentRates();
        }

        if (currencyInputElement.value === currencyOutputElement.value) {
            if (currencyInputElement.value === currencyOutputLast) {
                currencyOutputElement.value = currencyInputLast;
                saveDifferentRates();
            }
            else {
                currencyInputElement.value = currencyOutputLast;
                saveDifferentRates();
            }
        }
    }

    const init = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("input", eventOnForm)
        formElement.addEventListener("submit", onFormSubmit);
    }
    init();
}