const personagens = document.querySelectorAll('.personagem');

personagens.forEach((personagem) => {
    personagem.addEventListener('click', () => {

        if(window.innerWidth< 450){
            window.scrollTo({top: 0, behavior:'smooth'});
        }

        removerSelecaoPersonagem();
        personagem.classList.add('selecionado');
        alterarDescricao(personagem);
        alterarNomePersonagem(personagem);
        alterarImagemPersonagem(personagem);
    })
})

function removerSelecaoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}

function alterarDescricao(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function alterarNomePersonagem(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarImagemPersonagem(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-ampliado')
    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./src/images/card-${idPersonagem}.png`;
}


