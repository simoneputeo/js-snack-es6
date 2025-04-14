/* Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.*/



// creo l'array

const raceBikes = [
{ nome: 'Pinarello Dogma F', peso: 6.77},
{ nome: 'Bianchi Oltre RC', peso: 6.78},
{ nome: 'Look 795 Blade RS Proteam', peso: 6.79},
{ nome: 'Wilier Triestina 0 SLR', peso: 6.80},
{ nome: 'Colango V4Rs', peso: 6.81},
{ nome: 'Cervelo S5', peso: 6.82},
{ nome: 'Canyon Ultimate CF SL R101', peso: 6.83},
{ nome: 'Merida Reacto Team', peso: 6.84},
{ nome: 'Specialized Tarmac SL7', peso: 6.85},
{ nome: 'Trek Madone SLR', peso: 6.86},
]

// trovo la bici con peso minore
let lightestBike = raceBikes[0];
for (let i = 1; i < raceBikes.length; i++) {
  if (raceBikes[i].peso < lightestBike.peso) {
    lightestBike = raceBikes[i];
  }
}

// stampo la bici più leggera
console.log("La bici più leggera è:", lightestBike);