let nazwiska = [
  'Kowal','Lis','Nowak','Nowakowski','Iksiński','Milewski',
  'Kamińska','Lasik','Burzyński','Nowankowski','Woźnicka'
];

let $ = id => document.getElementById(id);
let pole = $('nazwisko'), lista = $('lista'), akt = $('aktualna'),
    ile = $('ile'), koniec = $('koniec');

function pokaz(el, dane){ el.innerHTML = dane.map(x=>`<li>${x}</li>`).join(''); }
function odswiez(){ pokaz(lista, nazwiska); pokaz(akt, nazwiska); }

$('dodaj').onclick = () => {
  let n = pole.value.trim();
  if(n){ nazwiska.push(n); pole.value=''; odswiez(); }
};

$('losowanie').onclick = () => {
  if(!nazwiska.length) return alert('Brak nazwisk!');
  $('losowanieSekcja').classList.remove('ukryj');
};

$('zatwierdz').onclick = () => {
  let n = parseInt(ile.value);
  if(!n || n>nazwiska.length) return alert('Nieprawidłowa liczba!');
  $('aktualnaSekcja').classList.remove('ukryj');
  $('wynikiSekcja').classList.remove('ukryj');
  odswiez();
  $('losuj').onclick = () => losuj(n);
};

function losuj(n){
  let wynik=[];
  while(wynik.length<n && nazwiska.length){
    let i = Math.floor(Math.random()*nazwiska.length);
    wynik.push(nazwiska.splice(i,1)[0]);
  }
  $('wylosowane').innerHTML = wynik.map(x=>`<li>${x}</li>`).join('');
  odswiez();
  koniec.innerHTML = 'brak nazwisk do losowania';
}

odswiez();
