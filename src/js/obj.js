const meuObj ={
    condicao:'',
    temperatura:'',
    humidade:'',
    veloVento:'',
    cidade:'',
    inexistente:'',


    setUserData(cond){
       this.condicao = cond.current.condition.text;
       this.temperatura = cond.current.temp_c;
       this.humidade = cond.current.humidity;
       this.veloVento = cond.current.wind_kph;
       this.cidade = cond.location.name;
    }
}


export {meuObj};