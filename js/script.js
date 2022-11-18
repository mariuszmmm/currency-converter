{
    const symbolSelection = (convertToCurrency) => {
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

    const rateSelectionInputCurrency = (rateEUR, rateUSD, rateGBP, currencyInputElement) => {
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

    const calculateResult = (convertToCurrency, currencyInputElement) => {
        const rateEURElement = document.querySelector(".js-rateEUR");
        const rateUSDElement = document.querySelector(".js-rateUSD");
        const rateGBPElement = document.querySelector(".js-rateGBP");
        const rateEUR = rateEURElement.value
        const rateUSD = rateUSDElement.value
        const rateGBP = rateGBPElement.value
        const sumElement = document.querySelector(".js-sum");
        const amount = +sumElement.value;
        const rateInput = rateSelectionInputCurrency(rateEUR, rateUSD, rateGBP, currencyInputElement);

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

    const displayResult = (convertToCurrency, currencyInputElement) => {
        const resultElement = document.querySelector(".js-result");
        const result = calculateResult(convertToCurrency, currencyInputElement);
        const symbolCurrency = symbolSelection(convertToCurrency);
        resultElement.innerHTML = `${result.toFixed(2)}${symbolCurrency}`;
    }

    const onFormSubmit = (event, currencyInputElement, currencyOutputElement) => {
        event.preventDefault();
        convertToCurrency = currencyOutputElement.value
        displayResult(convertToCurrency, currencyInputElement);
    }

    const init = () => {
        const formElement = document.querySelector(".js-form");
        const currencyInputElement = document.querySelector(".js-currencyInput");
        const currencyOutputElement = document.querySelector(".js-currencyOutput");
        let currencyInputLast = currencyInputElement.value
        let currencyOutputLast = currencyOutputElement.value

        formElement.addEventListener("submit", (event) => { onFormSubmit(event, currencyInputElement, currencyOutputElement) });
        formElement.addEventListener("input", () => {
            const resultElement = document.querySelector(".js-result");
            resultElement.innerHTML = ("");
            if (currencyInputElement.value === currencyOutputElement.value && currencyOutputLast) {
                currencyOutputElement.value = currencyInputLast
            }
            if (currencyInputElement.value === currencyOutputElement.value && currencyInputLast) {
                currencyInputElement.value = currencyOutputLast
            }
            if (currencyInputElement.value !== currencyOutputElement.value) {
                currencyInputLast = currencyInputElement.value
                currencyOutputLast = currencyOutputElement.value
            }
        })
    }
    init();
}
