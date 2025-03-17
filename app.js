//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Array para armazenar os nomes dos amigos
let listaDeAmigos = [];
let nomesSorteados = []; // Array para armazenar os nomes já sorteados

// Função para adicionar um nome à lista
function adicionarAmigos() {
    const nomeInput = document.getElementById('amigo');
    const nome = nomeInput.value.trim();

    // Verifica se o campo de entrada está vazio
    if (nome === "") {
        alert("Por favor, digite um nome válido!");
        return;
    }

    // Verifica se o nome já está na lista
    if (listaDeAmigos.includes(nome)) {
        alert("Esse nome já foi adicionado à lista!");
        nomeInput.value = "";  // Limpa o campo de entrada
        return;
    }

    // Adiciona o nome à lista de amigos
    listaDeAmigos.push(nome);
    nomeInput.value = "";  // Limpa o campo de entrada

    // Atualiza a lista de amigos na interface
    exibirLista();
}

// Função para exibir a lista de amigos na tela
function exibirLista() {
    const listaElement = document.getElementById('listaAmigos');
    listaElement.innerHTML = "";  // Limpa a lista existente

    // Cria um item de lista para cada nome
    listaDeAmigos.forEach(function(nome) {
        const li = document.createElement('li');
        li.textContent = nome;
        listaElement.appendChild(li);
    });
}

// Função para sortear um amigo aleatório
function sortearAmigo() {
    // Verifica se há amigos na lista
    if (listaDeAmigos.length === 0) {
        alert("A lista está vazia. Adicione nomes primeiro!");
        return;
    }

    // Verifica se todos os nomes foram sorteados
    if (nomesSorteados.length === listaDeAmigos.length) {
        alert("O sorteio acabou! Todos os amigos foram sorteados.");
        const reiniciar = confirm("Deseja começar um novo sorteio? \nClique em 'OK' para adicionar novos nomes aos existentes ou 'Cancelar' para recomeçar do zero.");
        if (reiniciar) {
            reiniciarSorteio(false); // Adicionar nomes aos existentes
        } else {
            reiniciarSorteio(true); // Começar do zero
        }
        return;
    }

    // Sorteia um nome aleatório que ainda não foi sorteado
    let sorteado;
    do {
        sorteado = listaDeAmigos[Math.floor(Math.random() * listaDeAmigos.length)];
    } while (nomesSorteados.includes(sorteado)); // Garante que o nome não foi sorteado antes

    // Marca o nome como sorteado
    nomesSorteados.push(sorteado);

    // Exibe o nome sorteado
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = "";  // Limpa o resultado anterior

    const li = document.createElement('li');
    li.textContent = `O amigo sorteado é: ${sorteado}`;
    resultadoElement.appendChild(li);
}

// Função para reiniciar o sorteio
function reiniciarSorteio(comecarDoZero) {
    if (comecarDoZero) {
        // Limpa a lista e o sorteio, começando do zero
        listaDeAmigos = [];
        nomesSorteados = [];
        const resultadoElement = document.getElementById('resultado');
        resultadoElement.innerHTML = "";  // Limpa o resultado anterior
        alert("O sorteio foi reiniciado! Você pode adicionar novos nomes.");
    } else {
        // Apenas limpa os nomes sorteados e mantém a lista de amigos
        nomesSorteados = [];
        const resultadoElement = document.getElementById('resultado');
        resultadoElement.innerHTML = "";  // Limpa o resultado anterior
        alert("Agora você pode adicionar novos nomes à lista.");
    }
    exibirLista();  // Atualiza a lista na interface
}
