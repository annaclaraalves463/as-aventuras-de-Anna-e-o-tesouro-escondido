// script.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. Seleciona todos os botões de avanço na página
    const botoesProximo = document.querySelectorAll('.btn-proximo');

    // 2. Adiciona um 'ouvinte de evento' (event listener) de clique a cada botão
    botoesProximo.forEach(botao => {
        botao.addEventListener('click', (event) => {
            // Pega o número do próximo passo que deve ser exibido,
            // que está armazenado no atributo 'data-proximo' do botão
            const proximoPassoId = event.target.dataset.proximo;
            
            // Chama a função para mudar o passo
            mudarPasso(proximoPassoId);
        });
    });
});

/**
 * Função principal para gerenciar a transição entre os passos da história.
 * @param {string} proximoPassoId - O ID do passo que deve ser exibido (e.g., '3', '7', '11').
 */
function mudarPasso(proximoPassoId) {
    // 1. Oculta o passo atualmente visível
    const passoAtual = document.querySelector('.passo.ativo');
    if (passoAtual) {
        passoAtual.classList.remove('ativo');
    }

    // 2. Constrói o ID completo do novo passo (e.g., 'passo-3')
    const novoPassoElemento = document.getElementById(`passo-${proximoPassoId}`);

    // 3. Verifica se o novo passo realmente existe
    if (novoPassoElemento) {
        // Exibe o novo passo adicionando a classe 'ativo'
        novoPassoElemento.classList.add('ativo');

        // Opcional: Rola a página para o topo da nova tela,
        // garantindo que o usuário veja o novo conteúdo imediatamente.
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    } else {
        // Mensagem de erro caso um ID de passo inválido seja passado
        console.error(`Erro: O passo com ID passo-${proximoPassoId} não foi encontrado.`);
    }
}
