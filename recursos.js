
let trabajadores = document.getElementById("trabajadores")

let llanura = document.getElementById("llanura")  // bonificacion de terreno nivel 1  (x2)
let bosque = document.getElementById("bosque")  // "" (x3)

let edTier1 = document.getElementById("edTier1") // +1 D20
let edTier2 = document.getElementById("edTier2")   // +2 D20

let terrenoUno = document.getElementById("terrenoUno") // +1 D20
let terrenoDos = document.getElementById("terrenoDos")  // +2 D20

let hierro = document.getElementById("hierroTier1");
let hierroDos = document.getElementById("hierroTier2");

let oro = document.getElementById("oroTier1");
let oroDos = document.getElementById("oroTier2");


let recursoFinal = document.getElementById("recursoFinal")

let buttonCalcular = document.getElementById("calcular");

let recursoTotal = 0;

//DADOS
let dadoTrabajador = document.getElementById("dadoTrabajador");
let dadoEdificios = document.getElementById("dadoEdificios");
let dadoDadoTerreno = document.getElementById("dadoDadoTerreno");

// BOTON

let randomD20 = () => Math.floor(Math.random()*20)+1;
let randomD10 = () => Math.floor(Math.random()*10)+1
let randomD6 = () => Math.floor(Math.random()*6)+1

const boniTerreno = () => {
  if(llanura.checked === true){
    return recursoTotal * 1
  } else if (bosque.checked === true){
    return recursoTotal * 2
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
  if(terrenoUno.checked === true)
  {
    let x = randomD20()
    dadoDadoTerreno.innerHTML = x
    return x
  } 
  else if(terrenoDos.checked === true)
  {
    let x = randomD20()
    let y = randomD20()
    dadoDadoTerreno.innerHTML = x + y
    return x + y
  }
}

const metalFunction = () => {
  if(hierro.checked === true)
    {
      let x = randomD10()
      dadoHierro.innerHTML = x;
      return x;
    }
    else if(oro.checked === true){
      let x = randomD6()
      dadoOro.innerHTML = x;
      return x;
    }
    else if(hierroDos.checked === true)
    {
      let x = randomD10()
      let y = randomD10()
      dadoHierro.innerHTML = x + y
      return x + y
      
    } 
    else if(oroDos.checked === true)
    {
      let x = randomD6()
      let y = randomD6()
      dadoOro.innerHTML = x + y
      return x + y
    } 
}

buttonCalcular.addEventListener("click", function(){
  
  
  recursoTotal = Number(trabajadores.value);
  let dadosBonus = 0;

  let countLeñadores =  Math.floor(recursoTotal / 10)
  
  
  
  if(llanura.checked || bosque.checked){
    recursoTotal += boniTerreno()
    
  }

  if(edTier1.checked || edTier2.checked){
    recursoTotal += edificios()
  }

  if(terrenoUno.checked || terrenoDos.checked){
    recursoTotal += dadoTerreno()
  } 

  if(hierro.checked || hierroDos.checked)
  {
    recursoTotal += metalFunction();
  } 

  if(oro.checked || oroDos.checked)
  {
    recursoTotal += metalFunction();

  }
  


  for(let i=0; i < countLeñadores; i++)
  {
    if(!hierro.checked || !oro.checked || !hierroDos.checked || !oroDos.checked)
    {
      let x = randomD20()
      recursoTotal += x;
      dadosBonus += x;
      dadoTrabajador.innerHTML = dadosBonus
    } 
    else if(hierro.checked)
    {
      let x = randomD10()
      recursoTotal += x;
      dadosBonus += x;
      dadoHierro.innerHTML = x;
    }
    else if(oro.checked){
      let x = randomD6()
      recursoTotal += x;
      dadosBonus += x;
      dadoOro.innerHTML = x;
    }
    else if(hierroDos.cheked)
    {
      let x = randomD10()
      let y = randomD10()
      dadoHierro.innerHTML = x + y
      recursoTotal += x
      recursoTotal += y
    } 
    else if(oroDos.checked)
    {
      let x = randomD6()
      let y = randomD6()
      dadoOro.innerHTML = x + y
      recursoTotal += x
      recursoTotal += y
    } 
  }

  
  recursoFinal.innerHTML = (recursoTotal)
 
})

