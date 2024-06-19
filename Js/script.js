alert("Bienvenido a una simulación de pelea de boxeo, elige tu boxeador y enfrentate a un rival aleatorio por el título mundial.");

const boxeador1 = {
    nombre: "Deontay Wilder",
    vitalidad: 91,
    energia: 86,
    velocidad: 86,
    fuerza: 92,
    defensa: 86,
    tenacidad: 87,
}

const boxeador2 = {
    nombre: "Oleksandr Usyk",
    vitalidad: 92,
    energia: 92,
    velocidad: 92,
    fuerza: 89,
    defensa: 87,
    tenacidad: 90,
}

const boxeador3 = {
    nombre: "Tyson Fury",
    vitalidad: 90,
    energia: 90,
    velocidad: 91,
    fuerza: 90,
    defensa: 87,
    tenacidad: 94,
}

const boxeador4 = {
    nombre: "Rocky Marciano",
    vitalidad: 90,
    energia: 92,
    velocidad: 94,
    fuerza: 90,
    defensa: 87,
    tenacidad: 92,
}

const boxeador5 = {
    nombre: "Joe Frazier",
    vitalidad: 92,
    energia: 94,
    velocidad: 89,
    fuerza: 88,
    defensa: 87,
    tenacidad: 93,
}

const boxeador6 = {
    nombre: "Joe Louis",
    vitalidad: 89,
    energia: 91,
    velocidad: 91,
    fuerza: 90,
    defensa: 87,
    tenacidad: 88,
}

const boxeador7 = {
    nombre: "Muhammad Ali",
    vitalidad: 93,
    energia: 94,
    velocidad: 96,
    fuerza: 90,
    defensa: 93,
    tenacidad: 93,
}

const boxeador8 = {
    nombre: "Mike Tyson",
    vitalidad: 88,
    energia: 91,
    velocidad: 98,
    fuerza: 99,
    defensa: 89,
    tenacidad: 87,
}

let listaDeBoxeadores = [boxeador1, boxeador2, boxeador3, boxeador4, boxeador5, boxeador6, boxeador7, boxeador8];

let indexBoxeadorUsuario = parseInt(prompt("Elige tu boxeador:\n1- " + boxeador1.nombre + "\n2- " + boxeador2.nombre + "\n3- " + boxeador3.nombre + "\n4- " + boxeador4.nombre + "\n5- " + boxeador5.nombre + "\n6- " + boxeador6.nombre + "\n7- " + boxeador7.nombre + "\n8- " + boxeador8.nombre)) - 1;

alert("Elegiste a " + listaDeBoxeadores[indexBoxeadorUsuario].nombre);

let boxeadoresOponentes = listaDeBoxeadores.filter((value, index) => indexBoxeadorUsuario != index);

let indexOponente = Math.floor(Math.random() * boxeadoresOponentes.length);

alert("Se enfrentan: \n" + listaDeBoxeadores[indexBoxeadorUsuario].nombre + " Vs. " + boxeadoresOponentes[indexOponente].nombre);

function pelea(jugador, oponente) {
    let victorias = [0,0];
    let ganadorKnokOut = null;
    let round = 1;
    
    let tenacidadMaxima = Math.max(jugador.tenacidad, oponente.tenacidad);

    const bonusPorDerrota = 1.5;
    const comparador = [jugador.vitalidad >= oponente.vitalidad, jugador.energia >= oponente.energia, jugador.velocidad >= oponente.velocidad, jugador.fuerza >= oponente.fuerza, jugador.defensa >= oponente.defensa];
    do {
        let indexComparador = Math.floor(Math.random() * 5);
        if (comparador[indexComparador]){
            victorias [0]++;
            if (oponente.tenacidad - victorias[0] * bonusPorDerrota < Math.random() * tenacidadMaxima) {
                ganadorKnokOut = 0;
            }
        }else{
            victorias [1]++;
            if (jugador.tenacidad - victorias [1] * bonusPorDerrota < Math.random() * tenacidadMaxima) {
                ganadorKnokOut = 1;
            }
        }
        round ++;
    }while (round <= 12 && ganadorKnokOut === null)

    alert(jugador.nombre + " ganó " + victorias[0] + " Rounds\n" + oponente.nombre + " ganó " + victorias[1] + " Rounds\n");

    if (ganadorKnokOut === 0) {
        alert("Ganador por Knockout, en el round número " + (round - 1) + ": "  + jugador.nombre);
    }else if (ganadorKnokOut === 1) {
        alert("Ganador por Knockout, en el round número " + (round - 1) + ": "  + oponente.nombre);
    }else if (victorias[0]>victorias[1]){
        alert("Ganador por puntos: " + jugador.nombre);
    }else if (victorias[0]<victorias[1]){
        alert("Ganador por puntos: " + oponente.nombre);
    }else{
        alert("Empate");
    }
}

pelea(listaDeBoxeadores[indexBoxeadorUsuario],boxeadoresOponentes[indexOponente]);


