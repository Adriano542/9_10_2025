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

let lista = document.querySelector("ul");
let przycisk = document.querySelector("button");

function losuj(n) {
  return names.sort(() => Math.random() - 0.5).slice(0, n);
}

function filtrujKrotsze(tab) {
  return tab.filter(e => e.length < 8);
}

function pokaz(tab) {
  lista.innerHTML = tab.map(e => `<li>${e}</li>`).join("");
}

przycisk.onclick = () => {
  let wylosowane = losuj(5);
  let krotsze = filtrujKrotsze(wylosowane);
  pokaz(krotsze);
};
