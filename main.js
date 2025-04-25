const botoes =document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-contedo");
const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2025-12-19T00:00:00");
let tempoAtual = new Date ();

const tempo [0].textcontent = tempoObjetivo1-tempoAtual
 
for(let i=0; i < botoes.length;i++){
    botoes[i].onclick = function(){
    
        for (let j =0; j < botoes.length; j++){
            botoes[j].classList.remove('ativo');
            textos[j].classList.remove('ativo');
        }
        botoes[i].classList.add('ativo')
        textos[i].classList.add('ativo')
        }
    }



    function calculaTempo(tempoObjetivo){
        let tempoAtual= new Date ();
        let tempofinal= tempoObjetivo-tempoAtual;

        let segundo= Math.floor(tempofinal/1000)
        let minuto= Math.floor(segundo/60)
        let horas= Math.floor(minuto/60)
        let dias= Math.floor(horas/24)

        segundos %=60;
        minutos %=60;
        hora %=24;

        return dias + "dias" + horas + "horas" + minutos+ "minutos"+ segundos +"segundos;"

    }
