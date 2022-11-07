{
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
        const currencyInputElement = document.querySelector(".js-currencyInput");
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
        const rateEUR_Element = document.querySelector(".js-rateEUR");
        const rateUSD_Element = document.querySelector(".js-rateUSD");
        const rateGBP_Element = document.querySelector(".js-rateGBP");
        const rateEUR = rateEUR_Element.value
        const rateUSD = rateUSD_Element.value
        const rateGBP = rateGBP_Element.value
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
        const currencyOutputElement = document.querySelector(".js-currencyOutput");
        convertToCurrency = currencyOutputElement.value
        displayResult(convertToCurrency);
    }

    const eventOnForm = (event) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerHTML = ("");
    }

    const init = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("input", eventOnForm)
        formElement.addEventListener("submit", onFormSubmit);
    }
    init();
}