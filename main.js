let names = ['Kowal', 'Lis', 'Nowak', 'Nowakowski', 'Iksiński', 'Milewski', 'Kamińska', 'Lasik', 'Burzyński', 'Nowankowski', 'Woźnicka' ];

let nInput = document.getElementById('nazwisko');
let btnDodaj = document.getElementById('dodaj');
let btnLosowanie = document.getElementById('losowanie');
let listaEl = document.getElementById('lista');
let losSek = document.getElementById('losowanieSekcja');
let ileInput = document.getElementById('ile');
let btnZatwierdz = document.getElementById('zatwierdz');
let aktSek = document.getElementById('aktualnaSekcja');
let aktEl = document.getElementById('aktualna');
let wynSek = document.getElementById('wynikiSekcja');
let btnLosuj = document.getElementById('losuj');
let wylEl = document.getElementById('wylosowane');
let koniecEl = document.getElementById('koniec');

// wyświetlanie głównej tablicy
function renderMain() {
  listaEl.innerHTML = names.map(x => `<li>${x}</li>`).join('');
}

// wyświetlanie aktualnej tablicy
function renderAktualna() {
  aktEl.innerHTML = names.map(x => `<li>${x}</li>`).join('');
}

// dodawanie osoby
function dodajOsobe() {
  let v = nInput.value.trim();
  if (!v) return;
  names.push(v);
  nInput.value = '';
  renderMain();
  if (!aktSek.classList.contains('ukryj')) renderAktualna();
}

// rozpoczęcie losowania
function rozpocznijLosowanie() {
  if (names.length === 0) return alert('Brak nazwisk!');
  losSek.classList.remove('ukryj');
}

// po zatwierdzeniu liczby osób
function zatwierdz() {
  let n = parseInt(ileInput.value);
  if (!n || n > names.length) return alert('Nieprawidłowa liczba!');
  aktSek.classList.remove('ukryj');
  wynSek.classList.remove('ukryj');
  renderAktualna();
  btnLosuj.onclick = () => losujN(n);
}

// losowanie n osób przy użyciu Math.random + Math.floor
function losujN(n) {
  let wylosowane = [];

  // losuj unikalne indeksy
  while (wylosowane.length < n && names.length > 0) {
    let idx = Math.floor(Math.random() * names.length); // losowy indeks
    let osoba = names[idx];
    if (!wylosowane.includes(osoba)) {
      wylosowane.push(osoba);
      names.splice(idx, 1); // usuń z tablicy
    }
  }

  // wyświetl listę wylosowanych
  wylEl.innerHTML = wylosowane.map(x => `<li>${x}</li>`).join('');

  // zaktualizuj aktualną tablicę
  renderMain();
  renderAktualna();

  // komunikat końcowy
  koniecEl.innerHTML = 'brak nazwisk do losowania';
}

// zdarzenia
btnDodaj.onclick = dodajOsobe;
btnLosowanie.onclick = rozpocznijLosowanie;
btnZatwierdz.onclick = zatwierdz;

// pokaż listę na start
renderMain();
