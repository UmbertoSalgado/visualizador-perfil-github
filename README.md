# 🔍 Visualizador de Perfil do GitHub

Um projeto simples, elegante e funcional que utiliza a **API do GitHub** para buscar e exibir informações de perfis de usuários em tempo real.

## 🚀 Funcionalidades

- **Busca Instantânea**: Encontre qualquer usuário do GitHub digitando o nome no campo de busca.
- **Atalho no Teclado**: Suporte para realizar a busca pressionando a tecla **Enter**.
- **Informações do Perfil**: Exibe avatar, nome, biografia, número de seguidores e quem o usuário está seguindo.
- **Repositórios Recentes**: Lista os 10 repositórios mais recentes, mostrando:
  - ⭐ Estrelas (Stars)
  - 🍴 Forks
  - 👀 Observadores (Watchers)
  - 💻 Linguagem principal
- **Design Responsivo**: Interface que se adapta a diferentes tamanhos de tela (Celular, Tablet e Desktop).
- **Feedback Visual**: Indicador de carregamento (loading) e animações suaves.

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica da página.
- **CSS3**: Estilização personalizada com animações e layout responsivo (Vanilla CSS).
- **JavaScript (ES6+)**: 
  - Manipulação de DOM.
  - Consumo de API usando `fetch` e `async/await`.
  - Organização em **Módulos** para um código mais limpo.
- **API do GitHub**: Fonte dos dados dos usuários.
- **DevIcons**: Ícones de tecnologias.

## 📂 Estrutura do Projeto

```text
├── index.html          # Página principal
├── src/
│   ├── css/            # Estilos (Reset, Animações, Responsivo)
│   └── js/             # Lógica (API, View, Index)
└── README.md           # Documentação do projeto
```

## 🔧 Como Executar o Projeto

1. Faça o download ou clone este repositório.
2. Como o projeto utiliza **Módulos JavaScript**, é necessário rodar através de um servidor local para evitar erros de segurança do navegador (CORS).
   - Se usar o **VS Code**, recomendo a extensão [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).
3. Clique com o botão direito no `index.html` e selecione **"Open with Live Server"**.

## 📝 Licença

Este projeto foi desenvolvido para fins de estudo. Sinta-se à vontade para usar e melhorar!

---
Desenvolvido com 💙 por Richardson
