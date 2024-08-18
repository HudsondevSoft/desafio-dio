function determinarNivelXP(nome, xp) {
    let nivel;

    // Estrutura de decisão para determinar o nível com base no XP
    if (xp < 1000) {
        nivel = "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
        nivel = "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
        nivel = "Prata";
    } else if (xp >= 5001 && xp <= 7000) {
        nivel = "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
        nivel = "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
        nivel = "Imortal";
    } else if (xp >= 10001) {
        nivel = "Radiante";
    } else {
        nivel = "Desconhecido"; // Caso não caia em nenhum dos intervalos
    }

    return nivel;
}

// Função principal
function exibirMensagem(nome, xp) {
    // Determina o nível do herói
    const nivel = determinarNivelXP(nome, xp);

    // Exibe a mensagem com o nome e o nível
    console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
}

// Testa o programa com um exemplo
const nomeHeroi = "Hudson";
const xpHeroi = 3500;

// Exibe a mensagem
exibirMensagem(nomeHeroi, xpHeroi);