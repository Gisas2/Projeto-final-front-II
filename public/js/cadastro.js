"use strict";
let inputNome = document.getElementById("nome");
let inputEmail = document.getElementById("email");
let inputSenha = document.getElementById("senha");
let inputRepSenha = document.getElementById("repsenha");
let formularioCadastro = document.getElementById("formulario");
formularioCadastro.addEventListener('submit', (event) => {
    event.preventDefault();
    verificarCampos();
});
function verificarCampos() {
    if (inputNome.value === '' || inputNome.value.length < 3) {
        inputNome.focus();
        inputNome.value = '';
        inputNome.setAttribute('style', 'outline: thin solid red;');
    }
    else if (inputEmail.value === '' || inputEmail.value.length < 10) {
        inputEmail.focus();
        inputEmail.value = '';
        inputEmail.setAttribute('style', 'outline: thin solid red;');
    }
    else if (inputSenha.value === '' || inputSenha.value.length < 8)
        inputSenha.focus();
    inputSenha.value = '';
    inputSenha.setAttribute('style', 'outline: thin solid red;');
}
{
    if (inputRepSenha.value === '' || inputSenha.value.length < 8)
        inputRepSenha.focus();
    inputRepSenha.value = '';
    inputRepSenha.setAttribute('style', 'outline: thin solid red;');
}
{
    inputNome.removeAttribute('style');
    inputEmail.removeAttribute('style');
    inputSenha.removeAttribute;
    inputRepSenha.removeAttribute;
    let novoUsuario = {
        nome: inputNome.value,
        login: inputEmail.value,
        senha: inputSenha.value,
        repsenha: inputRepSenha.value,
        recados: []
    };
    formularioCadastro.
        cadastrarUsuario;
}
function cadastrarUsuario(novoUsuario) {
    let usuarios = buscarUsuariosStorage();
    let existe = usuarios.some(());
    return usuario.login;
}
if (let)
    confirma = confirm;
if (container.classList.remove)
    ;
return;
usuarios.push(novoUsuario);
localStorage.setItem('usuarios', JSON.stringify(usuarios));
alert("Conta criada com sucesso!");
setTimeout((container.classList.remove(function buscarUsuariosStorage() {
    return JSON.parse(localStorage.getItem('usuarios') ||
    );
})));
