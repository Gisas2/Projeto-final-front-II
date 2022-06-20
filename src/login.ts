let email = document.getElementById('email') as HTMLInputElement;
let senha = document.getElementById('senha') as HTMLInputElement;
let btnEntrar = document.getElementById('entrar') as HTMLButtonElement;


btnEntrar.addEventListener('submit', () => {
    console.log(email.value);
    console.log(senha.value);

    logarNoSistema();
});
  
function logarNoSistema(): void { 
    let usuarios: Array<Usuario> = buscarUsuariosStorage();

    let existe: boolean = usuarios.some((usuario) => { 
        return usuario.login === email.value && usuario.senha === senha.value
    });

    if (! existe) {
        alert("Email ou senha inválidos.");
        return
    }
    sessionStorage.setItem('usuarioLogado', email.value);
    window.location.href = 'public/home.html';
}