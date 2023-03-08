// Mudando  o titulo da página com uma variável
let titulo = document.querySelector('.titulo')  //definida usando let
titulo.textContent = 'Aparecida Nutricionsta'
//-----------------------------------------------------------

// Atribui todos os elementos da classe paciente à variável
let pacientes = document.querySelectorAll('.paciente')

// Laço de repetição para modificar cada ocorrência do vetor pacientes
for (var i = 0; i <= pacientes.length; i++) {
    // atribuo o vetor a uma variável
    let paciente = pacientes[i]

    // defino a variável peso com o conteúdo de texto da classe 
    let peso = paciente.querySelector('.info-peso').textContent

    // same
    let altura = paciente.querySelector('.info-altura').textContent

    let imcTd = paciente.querySelector('.info-imc')
    let imc = calculaImc(peso, altura)
    imcTd.textContent = imc.toFixed(2)
}

function calculaImc(peso, altura){
    return peso / (altura ** 2)
}