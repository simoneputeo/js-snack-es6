/* Snack2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l'unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà "punti" fatti e "falli subiti".
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. */

// creo l'array

const soccerTeams = [
    {nome: 'Inter', punti: 0, falliSubiti: 0},
    {nome: 'Napoli', punti: 0, falliSubiti: 0},
    {nome: 'Atalanta', punti: 0, falliSubiti: 0},
    {nome: 'Bologna', punti: 0, falliSubiti: 0},
    {nome: 'Juve', punti: 0, falliSubiti: 0},
    {nome: 'Lazio', punti: 0, falliSubiti: 0},
    {nome: 'Roma', punti: 0, falliSubiti: 0},
    {nome: 'Fiorentina', punti: 0, falliSubiti: 0},
    {nome: 'Milan', punti: 0, falliSubiti: 0},
]

// genero numeri random per i punti fatti impostando un range credibile (18 - 102)

for (let i = 0; i < soccerTeams.length; i++) {
    soccerTeams[i].punti = Math.floor(Math.random() * (102 - 18 + 1)) + 18;
}

// genero numeri random per i falli subiti impostando un range credibile (102 - 254)

for (let i = 0; i < soccerTeams.length; i++) {
    soccerTeams[i].falliSubiti = Math.floor(Math.random() * (254 - 102 + 1)) + 102;
}

// creo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampo tutto in console

const soccerTeamsFouls = [];
for (let i = 0; i < soccerTeams.length; i++) {
    soccerTeamsFouls.push({
        nome: soccerTeams[i].nome,
        falliSubiti: soccerTeams[i].falliSubiti
    });
}

console.table(soccerTeamsFouls)



/* top8 classifica finale anno 2077

const classifica = soccerTeams.sort(function(a, b) {
    return b.punti - a.punti;})

console.table(classifica)

*/