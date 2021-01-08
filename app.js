let priceInput = document.querySelector('#start-value');

let calcBtn = document.getElementById('calc-btn');

calcBtn.addEventListener('click', function () {

    let chosenCurrency = document.getElementById('check-currency');
    let displayCurrency = chosenCurrency.options[chosenCurrency.selectedIndex].text;
    console.log(displayCurrency);

    let moneyToChangeValue = Number(document.getElementById('start-value').value);
    if (!isNaN(moneyToChangeValue)) {
        console.log('Podałeś liczbę');
    } else {

        alert('Nie możesz podać tekstu! Upewnij się, że nie wpisałeś kwoty z przecinkiem (separatorem dziesiętnym jest kropka)!');
        return

    };

    fetch(`http://api.nbp.pl/api/exchangerates/rates/a/${displayCurrency}/`).then((response) => {
        return response.json();
    }).then((response) => {

        let midValue = (response.rates[0].mid);
        let calculatedMoney = moneyToChangeValue * midValue;
        let calculatedMoneyUpText = document.getElementById('calculated-money')

        if (moneyToChangeValue < 0) {
            calculatedMoneyUpText.innerText = ' Podaj liczbę większą od zera!'
        } else {
            calculatedMoneyUpText.innerText = `To: ${calculatedMoney.toFixed(2)} PLN`
        }
    });
});








































//FUNKCJA NIE JEST POTRZEBAN, WYSTARCZY Wstawić wyrane value


// function currencyChcked() {
//     if (currencyValue.value == 'EUR') {
//         console.log('euro');

//             //

//     } else if (currencyValue.value == 'USD') {
//         console.log('dolary');
//     } else (currencyValue.value == 'CHF') {
//         console.log('franki');
//     }
// }

