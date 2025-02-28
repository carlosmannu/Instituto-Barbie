document.addEventListener('DOMContentLoaded', function() {
    const tabelaPersonagens = document.getElementById('tabelaPersonagens');
    const cadastroMensagem = document.getElementById('cadastro-mensagem');
    const formCadastro = document.getElementById('formCadastro');

    const dadosPadrao = [
        { nome: "Barbie", profissao: "Médica" },
        { nome: "Ken", profissao: "Clt" },
        { nome: "Raquelle", profissao: "Cabeleireira" },
        { nome: "Skipper", profissao: "Sketista" },
        { nome: "Stacie", profissao: "Empreendedora" },
        { nome: "Chelsea", profissao: "Problemática" },
        { nome: "Nikki", profissao: "Cantora" },
        { nome: "Teresa", profissao: "Vaqueira " },
        { nome: "Midge", profissao: "Professora" },
        { nome: "Summer", profissao: "Feliz" }
    ];

    function adicionarLinha(nome, profissao) {
        const novaLinha = document.createElement('tr');
        const celulaNome = document.createElement('td');
        celulaNome.textContent = nome;
        const celulaProfissao = document.createElement('td');
        celulaProfissao.textContent = profissao;

        novaLinha.appendChild(celulaNome);
        novaLinha.appendChild(celulaProfissao);
        tabelaPersonagens.appendChild(novaLinha);
    }

    function mostrarMensagem(mensagem, tempo = 3000) {
        cadastroMensagem.textContent = mensagem;
        cadastroMensagem.style.display = 'block';
        setTimeout(() => {
            cadastroMensagem.style.display = 'none';
        }, tempo);
    }

    dadosPadrao.forEach(personagem => {
        adicionarLinha(personagem.nome, personagem.profissao);
    });

    formCadastro.addEventListener('submit', function(event) {
        event.preventDefault();

        const nome = document.getElementById('nome').value;
        const profissao = document.getElementById('profissao').value;

        adicionarLinha(nome, profissao);
        formCadastro.reset();

        mostrarMensagem('Parabéns! Você agora faz parte da Instituição Barbie');
    });
});