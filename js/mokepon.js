let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3;
let vidasEnemigo = 3;

function iniciarJuego()
{
    let sectionSeleccionarAtaque = document.getElementById("seleccion-ataque")
    sectionSeleccionarAtaque.style.display = "none"

    let sectionBotonReiniciar= document.getElementById("boton-reiniciar")
    sectionBotonReiniciar.style.display = "none"

    let botonMokepon = document.getElementById("Select-mokepon");
    botonMokepon.addEventListener("click", seleccionarMokeponJugador);

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener("click", ataqueFuego)

    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener("click", ataqueAgua)

    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.addEventListener("click", ataqueTierra)

    let botonReiniciar = document.getElementById("boton-reiniciar")
    botonReiniciar.addEventListener("click", reiniciarJuego)
}


window.addEventListener("load", iniciarJuego);



function seleccionarMokeponJugador()
{
    let sectionSeleccionarMokepon = document.getElementById("seleccionar-mascota")
    sectionSeleccionarMokepon.style.display = "none"

    let sectionSeleccionarAtaque = document.getElementById("seleccion-ataque")
    sectionSeleccionarAtaque.style.display = "flex"

    let Charmander = document.getElementById("Charmander");
    let Piplup = document.getElementById("Piplup");
    let Gengar = document.getElementById("Gengar");
    let MokeponJugador = document.getElementById("mokepon-jugador")


    if(Charmander.checked)
    { 
       MokeponJugador.innerHTML = "Charmander"
    }
    else if(Piplup.checked)
    {
        MokeponJugador.innerHTML = "Piplup"
    }
    else if(Gengar.checked)
    {
        MokeponJugador.innerHTML = "Gengar"
    }
    else
    {
        alert("⛔ERROR⛔, Selecciona primero a un mokepon")
    }

    mokeponEnemigo();
}

function mokeponEnemigo()
{
    let ataqueAleatorio = aleatorio(3, 1);
    let mokeponEnemigo = document.getElementById("mokepon-enemigo")
    if(ataqueAleatorio == 1)
    {
        mokeponEnemigo.innerHTML = "Charmander"
    }
    else if(ataqueAleatorio == 2)
    {
        mokeponEnemigo.innerHTML = "Piplup"
    }
    else
    {
        mokeponEnemigo.innerHTML = "Gengar"
    }

}

function ataqueFuego()
{
    ataqueJugador = "FUEGO 🔥"
    ataqueAleatorioEnemigo()
}

function ataqueAgua()
{
    ataqueJugador = "AGUA 💧"
    ataqueAleatorioEnemigo();
}

function ataqueTierra()
{
    ataqueJugador = "TIERRA 🌱"
    ataqueAleatorioEnemigo();
}

function ataqueAleatorioEnemigo()
{
    let ataqueAleatorioE = aleatorio (3, 1)

    if(ataqueAleatorioE == 1)
    {
        ataqueEnemigo = "FUEGO 🔥"
    }
    else if(ataqueAleatorioE == 2)
    {
        ataqueEnemigo = "AGUA 💧"
    }
    else 
    {
        ataqueEnemigo = "TIERRA 🌱"
    }

    combate()
}

function combate()
{
    let spanVidasJugador = document.getElementById("vidas-jugador");
    let spanVidasEnemigo = document.getElementById("vidas-enemigo");
    if(ataqueEnemigo == ataqueJugador)
    {
        crearMensaje("EMPATE ⚔️");
        
    }
    else if((ataqueJugador ==  "FUEGO 🔥" && ataqueEnemigo == "TIERRA 🌱") || (ataqueJugador == "AGUA 💧" && ataqueEnemigo == "FUEGO 🔥") || (ataqueJugador == "TIERRA 🌱" && ataqueEnemigo == "AGUA 💧"))
    {
        crearMensaje("GANASTE 🎉");
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }
    else
    {
        crearMensaje("perdiste 💔🗡️");
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador

    }

    revisarVidas()
}

function revisarVidas()
{
    if(vidasEnemigo==0)
    {
        crearMensajeFinal("🎉🎉GANASTES🎉🎉")
    } 
    else if(vidasJugador==0)
    {
        crearMensajeFinal("💔🗡️GAME OVER💔🗡️")
    }
}

function crearMensaje(resultado)
{
    let seleccionMensajes = document.getElementById("resultado");
    let ataquesDeJugador = document.getElementById("ataques-de-jugador");
    let ataquesDeEnemigo = document.getElementById("ataques-de-enemigo");

    let nuevoAtaqueDelJugador = document.createElement("p")
    let nuevoAtaqueDelEnemigo = document.createElement("p")

    seleccionMensajes.innerHTML = resultado;
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo
    
    
    ataquesDeJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDeEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal)
{
    let seleccionMensajes = document.getElementById("resultado");

    seleccionMensajes.innerHTML = resultadoFinal


    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.disabled = true

    let botonAgua = document.getElementById("boton-agua")
    botonAgua.disabled = true

    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.disabled = true

    let sectionBotonReiniciar= document.getElementById("boton-reiniciar")
    sectionBotonReiniciar.style.display = "flex"
}

function reiniciarJuego()
{
    
    location.reload()
}

function aleatorio(max, min)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}