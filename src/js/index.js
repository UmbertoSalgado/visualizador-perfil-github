// 1. Selecionamos os elementos que vamos usar
const btnSearch = document.getElementById('btn-search');
const inputSearch = document.getElementById('input-search');
const profileResults = document.querySelector('.profile-results');
const loading = document.getElementById('loading');

const BASE_URL = 'https://api.github.com'; // URL base da API do GitHub para buscar usuários

// 2. Adicionamos um "ouvinte de evento" (event listener) para o clique no botão
btnSearch.addEventListener('click', async () => {
    // 3. Pegamos o valor que o usuário digitou
    const userName = inputSearch.value;

    // 4. Verificamos se o usuário digitou algo antes de prosseguir
    if (userName) {
        loading.classList.add('show');
        profileResults.innerHTML = '';
        
        try {
            const response = await fetch(`${BASE_URL}/users/${userName}`);

            if (!response.ok) {
                alert('Usuário não encontrado. Por favor, tente novamente.');
            }

            const userData = await response.json();
            console.log('Dados do usuário:', userData);// Aqui você pode começar a trabalhar com os dados do usuário, como exibi-los na página

            profileResults.innerHTML = `
        <div class="profile-card">
            <img src="${userData.avatar_url}" alt="Avatar de ${userData.name}" class="profile-avatar">
            <div class="profile-info">
                <h2>${userData.name || userData.login}</h2>
                <p class="bio">${userData.bio || 'Sem bio disponível😔'}</p>
                <p><strong>Repositórios públicos:</strong> ${userData.public_repos}</p>
                <p><strong>Seguidores:</strong> ${userData.followers}</p>
                <p><strong>Seguindo:</strong> ${userData.following}</p>
                <div>
                <a href="${userData.html_url}" target="_blank">Ver perfil no GitHub</a>
                </div>
            </div>
        </div>
        `;

        } catch (error) {
            console.error('Erro ao buscar o usuário:', error);
            alert('Ocorreu um erro ao buscar o usuário. Por favor, tente novamente mais tarde.');
        } finally {
            loading.classList.remove('show');
        }

    } else {
        alert('Por favor, digite um nome de usuário!');
    }

    // Por enquanto, vamos apenas mostrar no console para confirmar que funcionou
    console.log('Usuário digitado:', userName);

    // Aqui é onde você chamaria a função para buscar os dados na API do GitHub futuramente
});

// Dica extra: Adicionar evento para quando o usuário apertar "Enter" no teclado
inputSearch.addEventListener('keyup', (e) => {
    const key = e.which || e.keyCode;
    if (key === 13) { // 13 é o código da tecla Enter
        btnSearch.click(); // Isso "simula" o clique no botão de busca
    }
});
