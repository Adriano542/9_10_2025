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

// renderuje główną tablicę na stronie
function renderMain(){
  listaEl.innerHTML = names.map(x=>`<li>${x}</li>`).join('');
}

// renderuje aktualną (po zatwierdzeniu)
function renderAktualna(){
  aktEl.innerHTML = names.map(x=>`<li>${x}</li>`).join('');
}

// dodaj osobę z inputa
function dodajOsobe(){
  let v = nInput.value.trim();
  if(!v) return;
  names.push(v);
  nInput.value = '';
  renderMain();
  if(!aktSek.classList.contains('ukryj')) renderAktualna();
}

// pokaz sekcję do podania ile wylosować
function rozpocznijLosowanie(){
  if(names.length===0) return alert('Brak nazwisk!');
  losSek.classList.remove('ukryj');
}

// zatwierdź liczbę i przygotuj sekcję wyników
function zatwierdz(){
  let n = parseInt(ileInput.value,10);
  if(!n || n<1 || n>names.length) return alert('Nieprawidłowa liczba!');
  aktSek.classList.remove('ukryj');
  wynSek.classList.remove('ukryj');
  renderAktualna();
  // przypisz handler losowania (nadpisuje poprzedni)
  btnLosuj.onclick = ()=>losujN(n);
}

// losuj n osób, pokaż i usuń z tablicy
function losujN(n){
  // tasowanie + wybór n
  let picked = names.slice().sort(()=>Math.random() - 0.5).slice(0,n);
  // wyświetl wylosowane
  wylEl.innerHTML = picked.map(x=>`<li>${x}</li>`).join('');
  // usuń wylosowane (po jednym wystąpieniu każdego)
  picked.forEach(p=>{
    let i = names.indexOf(p);
    if(i>-1) names.splice(i,1);
  });
  // zaktualizuj listy
  renderMain();
  renderAktualna();
  koniecEl.textContent = 'brak nazwisk do losowania';
}

// zdarzenia
btnDodaj.onclick = dodajOsobe;
btnLosowanie.onclick = rozpocznijLosowanie;
btnZatwierdz.onclick = zatwierdz;

// pokaż listę na starcie
renderMain();
