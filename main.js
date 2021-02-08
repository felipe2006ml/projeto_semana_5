var funcionarios = JSON.parse(localStorage.getItem('funcionarios'))

if(funcionarios == null) {
    funcionarios = []
}


function getDadosCep(cep) {
    let xhr = new XMLHttpRequest

    let url = 'https://viacep.com.br/ws/' + cep + '/json/unicode'

    xhr.open('GET', url, true)

    xhr.onreadystatechange = function () {
        if(xhr.readyState==4 && xhr.status == 200) {
            let dadosJSON = JSON.parse(xhr.responseText)

            document.getElementById('rua').value = dadosJSON.logradouro
            document.getElementById('bairro').value = dadosJSON.bairro
            document.getElementById('cidade').value = dadosJSON.localidade
            document.getElementById('estado').value = dadosJSON.uf
        }
    }

    xhr.send()
}



var cep = document.getElementById('cep')
var rua = document.getElementById('rua')
var bairro = document.getElementById('bairro')
var cidade = document.getElementById('cidade')
var estado = document.getElementById('estado')
var nCasa = document.getElementById('nCasa')
var complemento = document.getElementById('complemento')

function enviarForm() {
    funcionarios.push({
        'nome' : document.getElementById('nomeFunc').value,
        'cpf' : document.getElementById('cpfInput').value,
        'rg' : document.getElementById('rgInput').value,
        'data' : document.getElementById('data').value,
        'habilitacao' : document.getElementById('habilitacao').value,
        'civil' : document.getElementById('selectCivil').value,
        'endereco' : `${rua.value} ${nCasa.value}, ${bairro.value}, ${cidade.value} - ${estado.value}`

    })

    const funcionarios_json = JSON.stringify(funcionarios)
    localStorage.setItem("funcionarios", funcionarios_json);


    alert('Usuario cadastrado com sucesso')

    document.getElementById('nomeFunc').value = ''
    document.getElementById('cpfInput').value = ''
    document.getElementById('rgInput').value = ''
    document.getElementById('data').value = ''
    document.getElementById('habilitacao').value = ''
    document.getElementById('selectCivil').value = ''
    
}