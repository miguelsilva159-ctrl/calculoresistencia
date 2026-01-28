//L = comprimento [m]
//A = area de seção tranversal [mm²]
//mat = material => resistividade de material => ro
//se for cobre = 0.017
// se for aluminio = 0.028

function calcularResistencia(L, A, mat){
    return (mat * L) / A
    }
    
    
    function verTipoMaterial(material){
    const cobre = 0.017
    const aluminio = 0.028
    if(mat === 'cobre'){
        return cobre
    }else if(mat === 'aluminio'){
        return aluminio
    }else{
        return 'material invalido'
    }
    }

let resposta = document.getElementById('resposta')
let calcular = document.getElementById('calcular')

calcular.addEventListener('click', ()=>{  // funcao principal

let material = document.getElementById('material').value  // cobre, aluminio 


let comprimento = Number(document.getElementById('comprimento').value)

let area = Number(document.getElementById('area').value)

let resistencia = 0.0

let mensagem = ''

let mat = verTipoMaterial(material)


resistencia = calcularResistencia(comprimento, area, mat)
console.log(`a resistencia do resistor é ${resistencia.toFixed(3)}Ω`)

resposta.innerHTML = ''
resposta.innerHTML += `a resistencia do condutor é ${resistencia.toFixed(3)}Ω`
resposta.style.fontSize = '2rem'
resposta.style.fontWeight = 'bold'
resposta.style.fontFamily = 'Verdana'
resposta.innerHTML += '<hr>'


})
     
   