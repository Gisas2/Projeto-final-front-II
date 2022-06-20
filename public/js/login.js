"use strict";
let email = document.getElementById('email');
let senha = document.getElementById('senha');
let btnEntrar = document.getElementById('entrar');
let formularioLogin = document.getElementById('formulario-login');
btnEntrar.addEventListener('click', () => {
    console.log(email.value);
    console.log(senha.value);
});
formularioLogin.addEventListener('submit', (e), e.preventDefault());
logarNoSistema;
;
usuarios: (Array) = buscarUsuariosStorage();
let existe = usuarios.some((usuario));
return usuario.login === inputLoginEmail.value && usuario.senha ===
;
;
if (!alert())
    return;
sessionStorage.setItem('usuarioLogado', inputLoginEmail.value, window.location.href = 'home.html');
