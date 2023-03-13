const read= require('readline-sync')

while(true){
    
    let hora = read.question('Digite o valor da hora (24h): ')
    let minuto = read.question('Digite o valor da do minuto: ')
    
    const [hora12, minuto12, periodo]  = converte(hora, minuto)
    saidaHora(hora12, minuto12, periodo)
    
    let opcao = read.question('Deseja converter outra hora? (s/n): ')

    if(opcao.toLowerCase() == 'n'){
        break
    }
}



function converte(hora, minuto) {
    
    let periodo

    if(hora === 0){
        hora = 12
        m = 'A'
    }
    else if(hora < 12){
        periodo = 'A'
    }
    else if(hora === 12){
        periodo = 'P'
    }
    else{
        hora -= 12
        periodo = 'P'
    }

    return [hora, minuto, periodo]
}

function saidaHora(hora, minuto, periodo) {
    console.log(`${hora}:${minuto.toString().padStart(2, '0')} ${periodo}.M.`);
}