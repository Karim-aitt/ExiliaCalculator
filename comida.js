// VARIABLES

// dados de muestreo

let dadosWorkers = document.getElementById("dadosWorkers");
let dadosEdificioBasico = document.getElementById("dadosEdificioBasico");
let dadosEdificioEspecial = document.getElementById("dadosEdificioEspecial");
let dadosTerreno = document.getElementById("dadosTerreno");

// INPUTS

let trabajadores = document.getElementById("trabajadores");  // INPUT TEXT
let recursoTotal;

// bonificacion de Casilla
let llanura = document.getElementById("llanura");
let bosque = document.getElementById("bosque");

// Edificios basicos

let edi1 = document.getElementById("edi1");
let edi2 = document.getElementById("edi2");
let edi3 = document.getElementById("edi3");
let masd20 = document.getElementById("masd20");  // INPUT TEXT

// Edificios especiales

let especial1 = document.getElementById("especial1");
let especial2 = document.getElementById("especial2");
let especial3 = document.getElementById("especial3");

// Dados de terreno

let terrenoUno = document.getElementById("terrenoUno");
let terrenoDos = document.getElementById("terrenoDos");

// Calcular

let buttonCalcular = document.getElementById("calcular");
let recursoFinal = document.getElementById("recursoFinal");  // H1 con el resultado

//------------------------------------------------------------------LOGICA

// FUNCIONES

let randomD20 = () => Math.floor(Math.random()*20)+1;

const boniCasilla = () => {
    if(llanura.checked === true)
    {
      return recursoTotal * 1
    } 
    else if (bosque.checked === true)
    {
      return recursoTotal * 2
    }
}

const edificioEspecial = () => {
    if(especial1.checked === true)
    {
        return recursoTotal * 1
    } 
    else if (especial2.checked === true)
    {
        return recursoTotal * 2
    }
    else if (especial3.checked === true)
    {
        return recursoTotal * 3
    }
}

const dadoTerreno = () => {
    if(terrenoUno.checked === true)
    {
      let x = randomD20()
      dadosTerreno.innerHTML = x
      return x
    } 
    else if(terrenoDos.checked === true)
    {
      let x = randomD20()
      let y = randomD20()
      dadosTerreno.innerHTML = x + y
      return x + y
    }
}

const edificioBasico = () => {
    if(edi1.checked === true)
    {
        let x = randomD20()
        dadosEdificioBasico.innerHTML = x
        return x
    }
    else if(edi2.checked === true)
    {
        let x = randomD20() + randomD20()
        dadosEdificioBasico.innerHTML = x
        return x
    }
    else if(edi3.checked === true)
    {
        let x = randomD20() + randomD20() + randomD20()
        dadosEdificioBasico.innerHTML = x
        return x
    }
    else
    {
        let x = Number(masd20.value)
        let masDados = 0;

        for(let i=0; i < x; i++)
        {
            masDados += randomD20();
        }
        dadosEdificioBasico.innerHTML = masDados
        return masDados
    }
}

const diezWorkers = (pam) => {
    let x = 0;
    for(let i=0; i < pam; i++)
    {
        x += randomD20()
        recursoTotal += x
        dadosWorkers.innerHTML = x
    }

}

buttonCalcular.addEventListener("click", function()
{

recursoTotal = Number(trabajadores.value)
let cada10workers = Math.floor(recursoTotal / 10)

diezWorkers(cada10workers)


if(llanura.checked || bosque.checked)
{
    recursoTotal += boniCasilla()
}

if(edi1.checked || edi2.checked || edi3.checked || masd20.value != "")
{
    recursoTotal += edificioBasico()
}

if(especial1.checked || especial2.checked || especial3.checked)
{
    recursoTotal += edificioEspecial()
}

if(terrenoUno.checked || terrenoDos.checked)
{
    recursoTotal += dadoTerreno()
}

recursoFinal.innerHTML = recursoTotal

})