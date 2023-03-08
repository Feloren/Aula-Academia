let botaoAdicionar = document.querySelector('#adicionar-paciente')
botaoAdicionar.addEventListener('click', function(evento){
    evento.preventDefault()
    
    // atribui ao vetor form os valores inseridos no formulário do site
    let form = document.querySelector('#form-adiciona')
    
    // atribui ao vetor paciente os dados do formulário categorizados
    let paciente = obterValoresForm(form)
    
    // armazena os erros do formulário se houver
    let erros = validaPaciente(paciente)
    if(erros.length > 0){
        exibeMensagemDeErro(erros)
        return
    }

    let mensagensErro = document.querySelector("#mensagens-erro")
    mensagensErro.innerHTML = ''
    
    adicionaPacienteNaTabela(paciente)

})

function obterValoresForm(form){
    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente
}

// avalia se os valores inseridos no formulário são válidos, e retorna quaisquer erros que houverem
function validaPaciente(paciente){
    let erros = []

    if(paciente.nome.length == 0){
        erros.push('O nome não pode estar em branco')
    }
    if(paciente.gordura.length == 0){
        erros.push('A gordura não pode estar em branco')
    }
    if(paciente.peso.length == 0){
        erros.push('O peso não pode estar em branco')
    }
    if(paciente.altura.length == 0){
        erros.push('A altura não pode estar em branco')
    }
    if(!validaPeso(paciente.peso)){
        erros.push('peso Invalido')
    }
    if(!validaAltura(paciente.altura)){
        erros.push('altura invalida')
    }

    return erros
}

//recebe mensagens de erro e as atribui a uma lista no html
function exibeMensagemDeErro(erros){
    let mensagensErro = document.querySelector('#mensagens-erro')
    mensagensErro.innerHTML = ''

    erros.forEach(function(erros){
        let mensagem = document.createElement('li')
        mensagem.textContent = erros
        mensagensErro.appendChild(mensagem)
    })
}

function adicionaPacienteNaTabela(paciente){
    let pacienteTr = montarTr(paciente)
    let tabela = document.querySelector('#tabela-pacientes')

    tabela.appendChild(pacienteTr)
}

function validaPeso(peso){
    if (peso >= 0 && peso <= 1000){
        return true
    } else{
        return false
    }
}

function validaAltura(altura){
    if(altura >= 0 && altura <= 3.00){
        return true
    } else{
        return false
    }
}

//  cria uma tr (fileira da tabela)
function montarTr(paciente){
    let pacienteTr = document.createElement('tr')
    pacienteTr.classList.add('paciente')

    pacienteTr.appendChild(montarTd(paciente.nome, 'info-nome'))
    pacienteTr.appendChild(montarTd(paciente.peso, 'info-peso'))
    pacienteTr.appendChild(montarTd(paciente.altura, 'info-altura'))
    pacienteTr.appendChild(montarTd(paciente.gordura, 'info-gordura'))
    pacienteTr.appendChild(montarTd(paciente.imc, 'info-imc'))

    return pacienteTr
}

// cria uma td (dado da tabela)
function montarTd(dado, classe){
    let td = document.createElement('td')
    td.textContent = dado
    td.classList.add(classe)

    return td
}