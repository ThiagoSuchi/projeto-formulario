const btnCadastro = document.querySelector('.botao-cadastrar');
const formInput = document.querySelector('.input-button');
const cadastroAdicionado = document.querySelector('.lista__cadastros');


let listaCadastros = []


function addNovoCadastro(event) {
    
    event.preventDefault()// quando for acionado o evento, ou seja, quando o botao cadastrar for clicado, a pagina não sera recarregada.
    const form = new FormData(event.target).entries()// aqui contém a lista de pares chave/valor dos dados do formulário 
    const data = Object.fromEntries(form)// aqui pega o form e o transforma em objeto exe: name: 'Alice'.
    
    
    listaCadastros.push({
        nome: data.name,
        email: data.email,
        telefone: data.tel,
        cpf: data.cpf
    })
    

    cadastros()
}

function cadastros() {
    let cadNovo = ''

    listaCadastros.forEach((item, index) => {
        cadNovo = cadNovo + `
        <li class="cadastrosAdd" ${item.apagar && "done"}>
        <p>${item.nome}</p>
        <img src="./imgs/lixera.png" alt="apagar cadastro" onclick="apagarCadastro(${index})"
        </li>
    `
    })
    cadastroAdicionado.innerHTML = cadNovo

    localStorage.setItem('list', JSON.stringify(listaCadastros))
}

function apagarCadastro(index) {
    listaCadastros.splice(index,1)
    cadastros()
}

function cadastroSalvo() {
    const cadastroLocalStorage = localStorage.getItem('list')

    if (cadastroLocalStorage) {
        listaCadastros = JSON.parse(cadastroLocalStorage)
    }

    cadastros()
}

cadastroSalvo()
formInput.addEventListener('submit', addNovoCadastro)

