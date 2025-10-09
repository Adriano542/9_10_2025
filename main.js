let nazwiska = [
  "Kowal","Lis","Nowak","Nowakowski","Iksiński","Milewski",
  "Kamińska","Lasik","Burzyński","Nowankowski","Woźnicka"
];

let $ = id => document.getElementById(id);
let licznik = () => $("info").innerHTML = "lista osób zawiera " + nazwiska.length + " osób";
let pokaz = (el, arr) => el.innerHTML = arr.join(", ");

function dodaj() {
  let n = $("nazwisko").value.trim();
  if (!n) return;
  nazwiska.push(n);
  $("nazwisko").value = "";
  pokaz($("lista"), nazwiska);
  licznik();
}

function losowanie() {
  if (!nazwiska.length) return alert("Brak nazwisk!");
  $("sekcjaLos").classList.remove("ukryj");
}

function zatwierdz() {
  let ile = parseInt($("ile").value);
  if (!ile || ile > nazwiska.length) return alert("Nieprawidłowa liczba!");
  $("sekcjaAkt").classList.remove("ukryj");
  $("sekcjaWynik").classList.remove("ukryj");
  pokaz($("aktualna"), nazwiska);
  $("losuj").onclick = () => losuj(ile);
}

function losuj(ile) {
  let wylosowane = [];
  while (wylosowane.length < ile && nazwiska.length > 0) {
    let i = Math.floor(Math.random() * nazwiska.length);
    wylosowane.push(nazwiska.splice(i, 1)[0]);
  }
  $("wyniki").innerHTML = wylosowane.map(n => `<li>${n}</li>`).join("");
  pokaz($("aktualna"), nazwiska);
  pokaz($("lista"), nazwiska);
  licznik();
  $("koniec").innerHTML = "brak nazwisk do losowania";
}

// zdarzenia
$("dodaj").onclick = dodaj;
$("losowanie").onclick = losowanie;
$("zatwierdz").onclick = zatwierdz;

// start
pokaz($("lista"), nazwiska);
licznik();
