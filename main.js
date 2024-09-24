// main.js

// Função para criar o céu estrelado
function criarCéuEstrelado() {
    const numEstrelas = 100; // Número de estrelas

    for (let i = 0; i < numEstrelas; i++) {
        // Cria um elemento para cada estrela
        const estrela = document.createElement('div');
        estrela.style.position = 'absolute';
        estrela.style.width = '2px';
        estrela.style.height = '2px';
        estrela.style.backgroundColor = 'white';
        estrela.style.borderRadius = '50%';
        estrela.style.opacity = Math.random(); // Opacidade aleatória para brilho
        estrela.style.transition = 'opacity 0.5s';

        // Posiciona a estrela aleatoriamente na tela
        estrela.style.top = `${Math.random() * 100}vh`;
        estrela.style.left = `${Math.random() * 100}vw`;

        // Adiciona a estrela ao corpo do documento
        document.body.appendChild(estrela);

        // Animação de brilho
        setInterval(() => {
            estrela.style.opacity = Math.random();
        }, 500);
    }

    // Estiliza o fundo
    document.body.style.backgroundColor = 'black';
    document.body.style.overflow = 'hidden'; // Para evitar barras de rolagem
}

// Chama a função quando o documento estiver pronto
document.addEventListener('DOMContentLoaded', criarCéuEstrelado);
