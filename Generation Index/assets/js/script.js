/* JavaScript é uma linguagem Case Sensitive, ou seja, reconhece as letras maíusculas e minúsculas 
Para chamar o DOM, podemos fazer das seguintes formas: 
- Por Tag: getElementByTagName ()
- Por Id: getElementById ()
- Por Nome: getElementByName ()
- Por Classe: getElementByClassName ()
- Por Seletor: querySelector () */


let nome = window.document.getElementById('nome')
let email = document.querySelector ('#email')
let mensagem = document.querySelector ('#mensagem')
let mapa = document.querySelector ("#mapa")

let nomeOk = false
let emailOk = false
let mensagemOk = false

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector ("#txtNome")
    if (nome.value.length < 3 ) {    
        txtNome.innerHTML = "Nome Inválido"
        txtNome.style.color = "red"
    }
    else {
        txtNome.innerHTML = "Nome Válido"
        txtNome.style.color = "green"
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail  = document.querySelector ("#txtEmail")

    if (email.value.indexOf ('@') == -1 || email.value.indexOf ('.') == -1) {
        txtEmail.innerHTML = "E-mail Inválido"
        txtEmail.style.color = "red"
    }
    else {
        txtEmail.innerHTML = "E-mail Válido"
        txtEmail.style.color = "green"
        emailOk = true
    }
}

function validaMensagem() {
    let txtMensagem = document.querySelector ("#txtMensagem")

    if (mensagem.value.length >=100) {
        txtMensagem.innerHTML = "Infelizmente seu texto é muito grande, o máximo são 100 carácteres"
        txtMensagem.style.color = "red"
        txtMensagem.style.display = "block"
    }
    else {
        txtMensagem.style.display = "none"
        mensagemOk = true  
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true && mensagemOk == true ){ 
        alert ("Formulário enviado com sucesso!")
    }  else {
        alert ("Preencha o formulário corretamente")
    }
}

function mapaZoom() {
    mapa.style.width = "800px"
    mapa.style.height = "600px"

}

function mapaNormal() {
mapa.style.width = "400px"
mapa.style.height = "250px"
}