import { ExpresionConverter } from "./ExpresionConverter.js";

function handleCalculateButtonClick() {
    const expresionConverter = new ExpresionConverter();
    const expresionInfija = document.getElementById('expresion').value;
    const expresionPrefija = expresionConverter.infijoAPrefijo(expresionInfija);
    
    document.getElementById('expresionInf').textContent = "Infija: " + expresionInfija;
    document.getElementById('expresionPref').textContent = "Prefija: " + expresionPrefija;
}

document.getElementById('calculateButton').addEventListener('click', handleCalculateButtonClick);
