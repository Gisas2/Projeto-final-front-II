let inputNome = document.getElementById("nome") as HTMLInputElement;
let inputEmail = document.getElementById("email") as HTMLInputElement;
let inputSenha = document.getElementById("senha") as HTMLInputElement;
let btnCriarConta = document.getElementById("criar-conta") as HTMLButtonElement;

interface Usuario {
    nome:string;
    login: string;
    senha: string;
    recados: Array<any>
}

btnCriarConta.addEventListener('submit', (event) => {
    event.preventDefault();
    verificarCampos();
});


function verificarCampos(): void {
    if (inputNome.value === '' || inputNome.value.length < 3) {
        inputNome.focus();
        inputNome.value = '';
        inputNome.setAttribute('style', 'outline: thin solid red;');

    } else

    if  (inputEmail.value === '' ||  inputEmail.value.length < 10) {   
        inputEmail.focus();
        inputEmail.value = '';
        inputEmail.setAttribute('style', 'outline: thin solid red;');

    } else 

        if (inputSenha.value === '' || inputSenha.value.length < 5) {  
        inputSenha.focus();
        inputSenha.value = '';
        inputSenha.setAttribute ('style', 'outline: thin solid red;');

    } else {

            inputNome.removeAttribute('style');
            inputEmail.removeAttribute('style');
            inputSenha.removeAttribute('style');

            let novoUsuario: Usuario = {
                nome: inputNome.value,
                login: inputEmail.value,
                senha: inputSenha.value,
                recados: []
            }
                cadastrarUsuario();
        }
}

function cadastrarUsuario(novoUsuario: Usuario): void {

    let usuarios: Array<Usuario> = buscarUsuariosStorage();

    let existe: boolean = usuarios.some((usuario) => {
        return usuario.login === inputEmail.value && usuario.senha === inputSenha.value
    });

    if (existe) {
        let confirma = confirm("Este email já está cadastrado. Deseja ir para a página de login?");
        
        if (confirma) {
            container.classList.remove('painel-direito-ativo');
        }

        return
    }

    usuarios.push(novoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    alert('Conta criada com sucesso!');

    setTimeout(() => {
        container.classList.remove('painel-direito-ativo');
    }, 1000);
}

function buscarUsuariosStorage(): Array<Usuario> {
    return JSON.parse(localStorage.getItem('usuarios') || '[]');
}
