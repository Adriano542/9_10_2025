let names = [
  'Kowal',
  'Lis',
  'Nowak',
  'Nowakowski',
  'Iksiński',
  'Milewski',
  'Kamińska',
  'Lasik',
  'Burzyński',
  'Nowankowski',
  'Woźnicka'
];

let lista = document.querySelector("#lista");
let wynik = document.querySelector("#wynik");
let przycisk = document.querySelector("#losuj");

function pokaz(tab, el) {
  el.innerHTML = tab.map(e => `<li>${e}</li>`).join("");
}

function losuj(n) {
  return names.sort(() => Math.random() - 0.5).slice(0, n);
}

function filtrujKrotsze(tab) {
  return tab.filter(e => e.length < 8);
}

// pokaż całą tablicę od razu
pokaz(names, lista);

// po kliknięciu – losuj i pokaż krótsze nazwiska
przycisk.onclick = () => {
  let wylosowane = losuj(5);
  let krotsze = filtrujKrotsze(wylosowane);
  pokaz(krotsze, wynik);
};
