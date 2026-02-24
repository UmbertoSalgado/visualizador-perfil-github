// index.js - Módulo principal que integra os outros módulos e manipula eventos

import * as githubApi from './githubApi.js';
import * as profileView from './profileView.js';

// Selecionamos os elementos do DOM
const btnSearch = document.getElementById('btn-search');
const inputSearch = document.getElementById('input-search');
const profileResults = document.querySelector('.profile-results');
const loading = document.getElementById('loading');

// Função que executa a busca
async function handleSearch() {
    const userName = inputSearch.value.trim();

    // Validamos se o usuário digitou algo
    if (!userName) {
        alert('Por favor, digite um nome de usuário!');
        return;
    }

    // Mostramos o carregamento e limpamos resultados anteriores
    profileView.showLoading(loading);
    profileView.clear(profileResults);

    try {
        // Buscamos os dados do usuário na API
        const userData = await githubApi.fetchUser(userName);
        const userRepos = await githubApi.fetchGithubUserRepos(userName);

        // Renderizamos o perfil na tela
        profileView.render(userData, userRepos, profileResults);

    } catch (error) {
        console.error('Erro ao buscar o usuário:', error);
        alert('Ocorreu um erro ao buscar o usuário. Por favor, tente novamente mais tarde.');
    } finally {
        // Escondemos o indicador de carregamento
        profileView.hideLoading(loading);
    }
}

// Evento de clique no botão de busca
btnSearch.addEventListener('click', handleSearch);

// Evento para buscar ao apertar "Enter" no teclado
inputSearch.addEventListener('keyup', (e) => {
    const key = e.which || e.keyCode;
    if (key === 13) { // 13 é o código da tecla Enter
        handleSearch();
    }
});
