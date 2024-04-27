import { tela } from "./tela.js";


async function searchDataCity(city){
    try{
        const keyApi = 'b16277699b164d58a3d220327232411';
        const url = ` http://api.weatherapi.com/v1/current.json?key=${keyApi}&q=${city}&aqui=no&lang=pt`;
        const response = await fetch(url);
        


        if(!response.ok){
            throw new Error(`Status de erro : ${response.statusText}`);
        }
        else{
            document.querySelector('#city').classList.remove('api');
            document.querySelector('#icon-cond').style.display='block'
        }

        return await response.json();
    }

    catch(error){
       
      tela.cityNotExist()
    }

    
   
    
}

export{searchDataCity};