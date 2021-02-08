const selectConsulta = document.getElementById('selectConsulta')
const content = document.getElementById('content')

var funcionarios = JSON.parse(localStorage.getItem('funcionarios'))

if(funcionarios == null) {
    funcionarios = []
}

function exibeFunc() {
    for(i=0;i<funcionarios.length;i++) {
        var opt = document.createElement('option')
        opt.setAttribute('value', i)
        opt.innerText = funcionarios[i].nome
        selectConsulta.appendChild(opt)
    }
}

function mostrarFunc(idFunc) {
    content.innerHTML = ""
    var p = document.createElement('p')
    var p2 = document.createElement('p')
    var p3 = document.createElement('p')
    var p4 = document.createElement('p')
    var p5 = document.createElement('p')
    var p6 = document.createElement('p')
    var p7 = document.createElement('p')

    var btn = document.createElement('button')

    p.innerText = 'Nome: ' + funcionarios[idFunc].nome
    p2.innerText = 'CPF: ' + funcionarios[idFunc].cpf
    p3.innerText = 'RG: ' + funcionarios[idFunc].rg
    p4.innerText = 'Data Nasc: ' + funcionarios[idFunc].data
    p5.innerText = 'Habilitação: ' + funcionarios[idFunc].habilitacao
    p6.innerText = 'Estado Civil: ' + funcionarios[idFunc].civil
    p7.innerText = 'Endereço: ' + funcionarios[idFunc].endereco

    btn.innerText = 'Deletar'
    btn.setAttribute('onclick', `removeFunc(${idFunc})`)

    content.appendChild(p)
    content.appendChild(p2)
    content.appendChild(p3)
    content.appendChild(p4)
    content.appendChild(p5)
    content.appendChild(p6)
    content.appendChild(p7)
    content.appendChild(btn)

}

function removeFunc(pos) {
    selectConsulta.innerHTML = ""
    var opt2 = document.createElement('option')
    opt2.innerText = 'Selecione'
    opt2.setAttribute('selected','selected')
    opt2.setAttribute('disabled', 'disabled')
    selectConsulta.appendChild(opt2)


    funcionarios.splice(pos,1)
    
    const funcionarios_json = JSON.stringify(funcionarios)
    localStorage.setItem("funcionarios", funcionarios_json);
    exibeFunc()
    mostrarFunc()
}


exibeFunc()