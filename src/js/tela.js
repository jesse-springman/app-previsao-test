
const tela = {
    search: document.querySelector('#input-search'),
    cityCond: document.querySelector('#city'),
    temp: document.querySelector('#temperature'),
    humidade: document.querySelector('#humidade'),
    vento: document.querySelector('#vento'),
    cidade: document.querySelector('.loc'),
    imgNuvem: document.querySelector('#icon-cond'),

    cityNotExist(){
        this.cityCond.classList.add('api');
        this.cityCond.innerHTML = "Erro";
        this.cidade.innerHTML = '--';
        this.temp.innerHTML = '--';
        this.imgNuvem.style.display='none';
        this.vento.innerHTML = '--'; 
        this.humidade.innerHTML ='--';
       
    },

    dataCond(data){
        this.cidade.innerHTML = data.cidade;
        this.cityCond.innerHTML = data.condicao;
        this.temp.innerHTML = `${data.temperatura} °C`;
        this.humidade.innerHTML = data.humidade;
        this.vento.innerHTML = `${data.veloVento} km/h`;
        
    }
}

export{ tela }