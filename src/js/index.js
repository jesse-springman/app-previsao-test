import { searchDataCity } from "./request.js";
import { meuObj } from "./obj.js";
import { tela } from "./tela.js"

document.querySelector('.button').addEventListener('click', async()=>{
    const city = document.querySelector("#input-search").value;

    if(campoVazio(city))return;

    management(city);
});

document.querySelector('#input-search').addEventListener('keyup', (e)=>{
   const citySearch = e.target.value;
   const key = e.which || e.keyCode;
   const numeroTecla = key === 13;

   
   if(campoVazio(citySearch))return;

  else if(numeroTecla)
    management(citySearch);
   
})


function campoVazio(city){
    const vazio =document.querySelector('.erro')

    if(city.length === 0){
       vazio.style.display= 'block';
       return true;
    }
    else{
        vazio.style.display= 'none'
    }
}




async function management(city){
    const data = await searchDataCity(city);
  
        meuObj.setUserData(data);
        tela.dataCond(meuObj);


    
}





