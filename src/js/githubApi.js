// githubApi.js - Módulo responsável por buscar dados da API do GitHub

const BASE_URL = 'https://api.github.com';

/**
 * Busca dados de um usuário do GitHub
 * @param {string} userName - Nome do usuário do GitHub
 * @returns {Promise<Object>} Dados do usuário
 */
export async function fetchUser(userName) {
    const response = await fetch(`${BASE_URL}/users/${userName}`);

    if (!response.ok) {
        throw new Error('Usuário não encontrado');
    }

    const userData = await response.json();
    console.log('Dados do usuário:', userData);
    
    return userData;
}

export async function fetchGithubUserRepos(userName) {
    const response = await fetch(`${BASE_URL}/users/${userName}/repos?per_page=10&sort=created`);
    if (!response.ok) {
        throw new Error('Repositórios não encontrados');
    }
    return await response.json();
    
}