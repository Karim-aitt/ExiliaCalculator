
let trabajadores = document.getElementById("trabajadores")

let llanura = document.getElementById("llanura")  // bonificacion de terreno nivel 1  (x2)
let bosque = document.getElementById("bosque")  // "" (x3)

let edTier1 = document.getElementById("edTier1") // +1 D20
let edTier2 = document.getElementById("edTier2")   // +2 D20

let terrenoUno = document.getElementById("terrenoUno") // +1 D20
let terrenoDos = document.getElementById("terrenoDos")  // +2 D20


let recursoFinal = document.getElementById("recursoFinal")

let buttonCalcular = document.getElementById("calcular");

let recursoTotal = 0;

//DADOS
let dadoTrabajador = document.getElementById("dadoTrabajador");
let dadoEdificios = document.getElementById("dadoEdificios");
let dadoDadoTerreno = document.getElementById("dadoDadoTerreno");

// BOTON

let randomD20 = () => Math.floor(Math.random()*20)+1;

const boniTerreno = () => {
  if(llanura.checked === true){
    return recursoTotal * 2
  } else if (bosque.checked === true){
    return recursoTotal * 3
  }
}

const edificios = () => {
  if(edTier1.checked === true){
    let x = randomD20()
    dadoEdificios.innerHTML = x
    return x;
  } else if(edTier2.checked === true){
    let x = randomD20()
    let y = randomD20()
    dadoEdificios.innerHTML = x + y
    return x + y
  }
}

const dadoTerreno = () => {
  if(terrenoUno.checked === true){
    let x = randomD20()
    dadoDadoTerreno.innerHTML = x
    return x
  } else if(terrenoDos.checked === true){
    let x = randomD20()
    let y = randomD20()
    dadoDadoTerreno.innerHTML = x + y
    return x + y
  }
}

buttonCalcular.addEventListener("click", function(){
  
  
  recursoTotal = Number(trabajadores.value);
  let dadosBonus = 0;

  let countLeñadores =  Math.floor(recursoTotal / 10)
   
  for(let i=0; i < countLeñadores; i++){
    let x = randomD20()
    recursoTotal += x;
    dadosBonus += x;
  }

  dadoTrabajador.innerHTML = dadosBonus
  recursoFinal.innerHTML = (recursoTotal+boniTerreno()+edificios()+dadoTerreno())
 
})

