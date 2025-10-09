const display = document.querySelector('#output');
const numbers = [1, 3, 24, 5, 6, 13, 8, 19];
const listElem = document.querySelector('ol');

// 1. Mnożenie przez 2 (map)
const doubled = numbers.map(function (elem) {
    return elem * 2;
});
display.innerHTML += `<p>Tablica *2: ${doubled}</p>`;

// 2. Wyświetlenie oryginalnej tablicy
display.innerHTML += `<p>Oryginalna tablica: ${numbers}</p>`;

// 3. Filtr: tylko liczby nieparzyste
const oddNumbers = numbers.filter(function (num) {
    return num % 2 !== 0;
});
display.innerHTML += `<p>Liczby nieparzyste: ${oddNumbers}</p>`;

// 4. Filtr + map: liczby < 10 -> mapowanie na <li>
const arr = numbers
    .filter(function (elem) {
        return elem < 10;
    })
    .map(function (elem) {
        listElem.innerHTML += `<li>Liczba: ${elem}</li>`;
        return elem;
    });
