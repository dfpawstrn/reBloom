window.onload = function () {
    // Configuração de som ambiente
    let ambiente_jardim = new Audio("assets/media/ambiente_jardim.mp4");
    ambiente_jardim.play();
    ambiente_jardim.loop = true;

    const footerContent = document.getElementById("footer");

    const link3 = document.createElement("a");
    const link4 = document.createElement("a");
    const link5 = document.createElement("a");
    const link6 = document.createElement("a");

    link3.innerHTML = "Cultivo em micro escala";
    link3.href = "micro_escala.html";
    link4.innerHTML = "Cultivo em pequena escala";
    link4.href = "pequena_escala.html";
    link5.innerHTML="Calendário de cultivo";
    link5.href ="calendário_colheita.html";
    link6.innerHTML = "Adivinha a planta!"
    link6.href="flora_guesser.html";

    footerContent.appendChild(link3);
    footerContent.appendChild(link4);
    footerContent.appendChild(link5);
    footerContent.appendChild(link6);
    // Video element
    const videoElement = document.getElementById("video");

    // Btn's do html
    const videoButton = document.getElementById("video-btn");
    const soundButton = document.getElementById("sound-btn");
    const startGameButton = document.getElementById("start-game-btn");

    // Pontuação jogo plant guesser
    const gameScore = document.getElementById("score");
    let score = 0;

    // Toggle video play/pause
    videoButton.onclick = function () {
        if (videoElement.paused) {
            videoElement.play();
            videoButton.textContent = "⏸"; // Update button icon
        } else {
            videoElement.pause();
            videoButton.textContent = "▶"; // Update button icon
        }
    };

    // Toggle som mute/unmute
    soundButton.onclick = function () {
        if (ambiente_jardim.muted) {
            ambiente_jardim.muted = false;
            soundButton.textContent = "🔊";
        } else {
            ambiente_jardim.muted = true;
            soundButton.textContent = "🔇";
        }
    };

    const guessPool = [
        { name: "alfazema", images: ["assets/img/guesser/alfazema.jpg"] },
        { name: "amieiro", images: ["assets/img/guesser/amieiro.jpg"] },
        { name: "armeria maritima", images: ["assets/img/guesser/armeria_maritima.jpg"] },
        { name: "azevinho", images: ["assets/img/guesser/azevinho.jpg"] },
        { name: "carvalho", images: ["assets/img/guesser/carvalho.jpg"] },
        { name: "estevinha", images: ["assets/img/guesser/estevinha.jpg"] },
        { name: "marmeleiro", images: ["assets/img/guesser/marmeleiro.jpg"] },
        { name: "nespereira", images: ["assets/img/guesser/nespereira.jpg"] },
        { name: "romanzeira", images: ["assets/img/guesser/romanzeira.jpg"] },
        { name: "teixo", images: ["assets/img/guesser/teixo.jpg"] }
    ];

    const opcoesErradas = [
        "Espada de São Jorge",
        "Planta Jade",
        "Costela de Adão",
        "Flor da fortuna",
        "Dracena",
        "Sobreiro",
        "Oliveira",
        "Jiboia",
        "Pinastre",
        "Hera"
    ];

    startGameButton.onclick = function () {

        let rounds = 5; // Número de rondas de cada jogo
        score = 0; // Reset o score ao começar novo jogo
        gameScore.textContent = score;
        startGameButton.style.display = "none"; // esconder o start button
        function playRound(round) {
            if (round > rounds) {
                // terminar o jogo após a ronda nº5
                alert(`Fim do jogo! Sua pontuação total é ${score}.`);
                startGameButton.style.display = "block"; // Voltar a mostrar o start button
                return;
            }
            const randomPlant = guessPool[Math.floor(Math.random() * guessPool.length)];
            document.getElementById("game-content").innerHTML = ""; // limpar conteúdo prévio

            // Display the selected plant image
            const imageGuess = document.createElement("img");
            imageGuess.src = randomPlant.images[0];
            imageGuess.id="randomImage"
            imageGuess.style.height = "800px";
            imageGuess.style.width = "1200px";
            imageGuess.style.objectFit = "cover";
            imageGuess.style.margin = "0 auto"; // Centrar horizontalmente
            imageGuess.style.display = "block"; //

            document.getElementById("game-content").appendChild(imageGuess);

            //Configuração de timer para "smooth" scrolling
            setTimeout(() => {
                const imageElement = document.getElementById("randomImage");
                imageElement.scrollIntoView({ behavior: "smooth", block: "center" });
            }, 500);


            // Esperar que a imagem faça render antes de começar o jogo, caso contrário a imagem fica invisível durante o jogo
            setTimeout(() => {
                const respostaCerta = randomPlant.name;
                const respostasErradas = [];
                while (respostasErradas.length < 2) {
                    const respostaErradaRandom =
                        opcoesErradas[Math.floor(Math.random() * opcoesErradas.length)];
                    if (
                        !respostasErradas.includes(respostaErradaRandom) &&
                        respostaErradaRandom !== respostaCerta
                    ) {
                        respostasErradas.push(respostaErradaRandom);
                    }
                }
                // combinar respostas corretas e incorretas, shuffle todas entre si
                //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
                const respostas = [respostaCerta, ...respostasErradas];
                respostas.sort(() => Math.random() - 0.5);
                // Prompt por resposta do utilizador
                const respostaUtilizador = prompt(
                    `Rodada ${round} de ${rounds} - Qual é a planta?\n1. ${respostas[0]}\n2. ${respostas[1]}\n3. ${respostas[2]}`
                );
                // Validar resposta do utilizador
                if (respostaUtilizador >= 1 && respostaUtilizador <= 3) {
                    const respostaEscolhida = respostas[parseInt(respostaUtilizador) - 1];
                    if (respostaEscolhida === respostaCerta) {
                        alert("Resposta correta!");
                        score++;
                        gameScore.textContent = score; // Update score
                    } else {
                        alert(`Resposta incorreta! A resposta certa era: ${respostaCerta}`);
                    }
                } else {
                    alert("Por favor, insira uma resposta válida (1, 2 ou 3).");
                }

                // Proceed to the next round
                playRound(round + 1);
            }, 1000);
        }

        // Start the first round
        playRound(1);
    };
};
