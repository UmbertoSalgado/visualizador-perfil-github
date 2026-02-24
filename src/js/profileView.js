// profileView.js - Módulo responsável por renderizar o perfil na tela

/**
 * Renderiza o perfil do usuário no DOM
 * @param {Object} userData - Dados do usuário do GitHub
 * @param {HTMLElement} container - Container onde o perfil será renderizado
 */
export function render(userData, userRepos, container) {

    const repositoriesHTML = userRepos && userRepos.length > 0 ? userRepos.map(repo => `
        <div class="repository-card">
            <a href="${repo.html_url}" target="_blank">
                <h3>${repo.name}</h3>
                <div class ="repository-stats">
                    <span>⭐Stars: ${repo.stargazers_count}</span>
                    <span>🍴 Forks: ${repo.forks_count}</span>
                    <span>👀 Watchers: ${repo.watchers_count}</span>
                    <span>💻 Language: ${repo.language || 'Não informado'}</span>
                </div> 
            </a>
        </div>
        `).join('\n') : '<p>Sem repositórios disponíveis.</p>';

    container.innerHTML = `
        <div class="profile-card">
            <img src="${userData.avatar_url}" alt="Avatar de ${userData.name}" class="profile-avatar">
            <div class="profile-info">
                <h2>${userData.name || userData.login}</h2>
                <p class="bio">${userData.bio || 'Sem bio disponível😔'}</p>
                <p><strong>Repositórios públicos:</strong> ${userData.public_repos}</p>
                <div>
                <a href="${userData.html_url}" target="_blank">Ver perfil no GitHub</a>
                </div>
            </div>
        </div>
        <div class="profile-counters">
            <div class="followers">
            <h4>👥 Seguidores</h4>
            <span>${userData.followers}</span>
            </div>
            <div class="following">
            <h4>👥 Seguindo</h4>
            <span>${userData.following}</span>
            </div>
        </div>

        <div class="profile-repositories">
            <h2>Repositórios</h2>
            <div class="repositories">
                ${repositoriesHTML}
            </div>
        </div>
    `;
}

/**
 * Limpa o conteúdo do container
 * @param {HTMLElement} container - Container a ser limpo
 */
export function clear(container) {
    container.innerHTML = '';
}

/**
 * Mostra o indicador de carregamento
 * @param {HTMLElement} loadingElement - Elemento de carregamento
 */
export function showLoading(loadingElement) {
    loadingElement.classList.add('show');
}

/**
 * Esconde o indicador de carregamento
 * @param {HTMLElement} loadingElement - Elemento de carregamento
 */
export function hideLoading(loadingElement) {
    loadingElement.classList.remove('show');
}
