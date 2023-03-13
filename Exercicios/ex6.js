let usuarios= [{
    nome: "João",
    habilidades: ["Javascript", "ReactJS", "Redux"]
},
{
    nome: "Maria",
    habilidades: ["Java", "Ruby onRails", "Laravel"]
}];

resultados(usuarios)

function resultados(usuarios) {
    usuarios.forEach(usuario => {
        console.log(`O ${usuario.nome} possui as habilidades: ${habilidades(usuario)}`)
    });
    
}

function habilidades(usuario) {

    let habilidades = ''
    let qtd = usuario.habilidades.length

    usuario.habilidades.forEach(habilidade => {
        if(qtd>1){
            habilidades += habilidade + ", "
        }
        else{
            habilidades += habilidade + "."
        }

        qtd--
    })

    return habilidades
}