
window.onload= function microEscala() {

    //Lista de frutos e vegetais adequados para cultivo em micro && pequena escala
    //

    const plantas_micro = [

        { name: "Alface", images: ["assets/img/icons/lettuce.PNG"], id:"0"},
        { name: "Rabanete", images: ["assets/img/icons/radish.PNG"],id:"1"},
        { name: "Pepino", images: ["assets/img/icons/cucumber.PNG"],id:"2"},
        {name: "Tomate", images:["assets/img/icons/tomato.PNG"],id:"3"},
        {name: "Morango", images:["assets/img/icons/strawberry.PNG"],id:"4"},
        {name: "Limão", images:["assets/img/icons/plant.PNG"],id:"5"},
        {name: "Manjericão", images:["assets/img/icons/basil.PNG"],id:"6"},
        {name: "Hortelã", images:["assets/img/icons/mint.PNG"],id:"7"},
        {name: "Salsa", images:["assets/img/icons/parsley.PNG"],id:"8"},
        {name: "Cebolinho", images:["assets/img/icons/chives.PNG"],id:"9"},
        {name: "Cenoura", images:["assets/img/icons/carrot.PNG"],id:"10"},
        {name: "Pimento", images:["assets/img/icons/red-pepper.PNG"],id:"11"},
        {name: "Espinafre", images:["assets/img/icons/Spinach.PNG"],id:"12"},
        {name: "Malagueta", images:["assets/img/icons/pepper.PNG"],id:"13"},
        // Add more plants as needed
    ]

    const instru_culti = [
        "A alface é um bom exemplo de um vegetal muito fácil de plantar num vaso/canteiro na varanda do seu apartamento. As sementes de alface crescem em quase todas as condições, e são por essa razão um dos vegetais mais simples que pode cultivar no seu apartamento.\n" +
        "\n" +
        "Adquira umas sementes de alface  e comece a plantar! Em pouco tempo pode ter as suas alfaces prontas a serem consumidas, precisando apenas de um local que receba bastante luz solar para colocar os recipientes  onde vai semear ou plantar esta cultura. Pode escolher várias variedades de alface e produzi-las no mesmo espaço e não há qualquer problema.",
        "Os rabanetes são também um exemplo de vegetais que têm um crescimento e desenvolvimento rápido e que podem ser colhidos após cerca de 1 mês.\n" +
        "\n" +
        "Uma vez que os rabanetes não gostam de temperaturas muito altas, deve escolher um local na sua varanda menos exposto à luz solar.",
        "Os pepinos são uma óptima opção para elaborar um salada e servir de acompanhamos em pratos diversos.\n" +
        "\n" +
        "Culturalmente, crescem rapidamente  e perfeitamente em vasos, e podem também necessitar um um suporte para os auxiliar no seu crescimento e desenvolvimento.\n" +
        "\n" +
        "São um bom exemplo de um vegetal que se adapta bem a uma horta em apartamento.",
        "O tomate-cereja é uma espécie de tomate cujo tamanho é menor e, que tem normalmente um sabor mais adocicado quando comparado com o tomate mais comum.\n" +
        "\n" +
        "Usualmente, é utilizado em saladas ou até mesmo para embelezamento de pratos  e tem vindo a “ganhar” cada vez mais apreciadores para fins culinários.\n" +
        "\n" +
        "Este tipo de tomates caracteriza-se por ter boas produções uma vez que um  pé de tomate-cereja pode dar muitos frutos.\n" +
        "\n" +
        "Deve ter em consideração que este tipo de tomates deve “apanhar” pelo menos 4/5 horas de sol por dia e ser regado frequentemente para maximizar os resultados e produções\n" +
        "\n" +
        "Os tomates-cereja crescem bem em vasos, no entanto, deve apostar em mudas em detrimento das sementes para melhores resultados.\n" +
        "\n" +
        "Lembre-se que esta é uma “espécie de planta trepadeira” e por essa razão, não se pode esquecer de incluir um suporte/tutor para assegurar o seu correcto crescimento e desenvolvimento.",
        "Os morangos precisam de luz solar direta. Antes de plantar morangos certifique-se que o local tem luz e acesso fácil à água para lhe facilitar o trabalho. Se plantar morangos em vasos ou canteiros, certifique-se que têm de profundidade pelo menos 25cm a 30cm.\n" +
        "Deixe cerca de 35cm de espaço entre cada pé de morango.\n" +
        "A temperatura ideal para o cultivo de morangos ronda os 22ºC durante a frutificação.\n",
        "Para plantar um limoeiro em casa é  necessário um vaso grande (idealmente de barro), e uma boa quantidade de terra de boa qualidade. Encha o vaso com 1/4 do seu tamanho de terra e regue-a bem de modo que a fique bem húmida. Volte depois a colocar mais um pouco de terra, deixando uma borda de cerca de 6 centímetros.",
        "Pode ser cultivado em varandas ou terraços com mais do que 5-6 horas de sol por dia. Pode ser cultivado em casa todo o ano desde que tenha estas condições em qualquer vaso ou floreira com 30-40cm (comprimento ou diâmetro). Se não consumir regularmente manjericão tenha o cuidado de o aparar todos os 15 dias.",
        "A hortelã é uma planta que se adapta muito bem a diversos ambientes, gosta de locais com bastante sol, mas tolera bem a meia sombra.  É possível semear, mas é mais fácil reproduzir a planta por estaca, a partir de um caule com raiz, preferencialmente na Primavera e Outono. Podem transplantar a planta em vaso durante todo o ano.",
        "O cultivo em recipientes/vasos é uma opção ao considerar ao semear salsa. Ao semear, não coloque as sementes muito profundamente. Em vez disso, semeie a uma profundidade de sementeira não superior a 2 cm. Se colocar as sementes na superfície do solo e pressionar suavemente com o dedo para fazer uma pequena depressão no solo, poderá então depois cobrir ligeiramente com um pouco de solo/substrato por cima que as sementes de salsa não versão o seu crescimento e desenvolvimento comprometido.",
        "O cebolinho é um vegetal muito fácil de cultivar em casa, e pode ser produzido em vaso e fazer parte das culturas da sua horta em apartamento.  Apesar de ser fácil de plantar em casa, apresenta a  desvantagem de poder levar muitos meses a crescer e estar pronto para ser colhido.",
        "As cenouras crescem e desenvolvem-se muito bem em  vasos com uma maior profundidade. Apesar de fáceis de serem cultivadas nestas condições, têm um ciclo produtivo relativamente longo e podem demorar até 3 meses até estarem prontas a serem colhidas.",
        "Os pimentos podem ser perfeitamente plantados em vaso.  Deve ter em atenção que estes vegetais necessitam de  ter determinadas condições para crescerem perfeitamente e por essa razão opte por plantar mudas e não faça sementeira.\n" +
        "\n" +
        "Podem demorar algum tempo a estarem prontos para serem consumidos ( cerca de 3 meses) e por essa razão, e dada a limitação de espaço, pode optar por plantar  mini-pimentos vermelhos tais como os da imagens, que ficam prontos mais rapidamente e ocupam menos espaço.",
        "Com condições muito semelhantes às alfaces, os espinafres são um bom exemplo de um vegetal muito simples para plantar e cuidar. Assim que estejam prontos a serem consumidos, basta cortar a planta sempre que  necessita de usar nos seus cozinhados, continuam os espinafres que ficaram no vaso em contínuo crescimento.\n" +
        "\n" +
        "Garanta recipientes com uma boa drenagem e boa exposição solar para maiores produtividades.",
        " Antes de semear, é aconselhável mergulhar as sementes durante algumas horas em água morna, pois são por vezes de difícil germinação. Desta forma estimula-se a germinação e a planta pode desenvolver-se melhor. As sementes são de seguida semeadas num vaso, para esse efeito pressione-as aproximadamente um centímetro para dentro da terra e regue-as generosamente. "
    ]


    //Referenciar as listas no HTML
    const plantasLista = document.getElementById("plantas");
    const plantasInfo = document.getElementById("plantas-info");

    // Configuração de grelha | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
    plantas_micro.forEach((planta, index)=> {
        const gridItem = document.createElement("li");
        // Adicionar icon e texto
        const icon = document.createElement("img");
        icon.src = planta.images[0]; // Usar primeira imagem como default
        icon.alt = planta.name;
        const title = document.createElement("h4");
        title.textContent = planta.name;

        gridItem.appendChild(icon);
        gridItem.appendChild(title);
        gridItem.onclick = () => {
            const infoCultivo = document.getElementById("info-cultivo");
            const infoParagraph = infoCultivo.querySelector("p");
            const x_dicas = infoCultivo.querySelector("h2");
            console.log(planta.name);

            if (infoParagraph) {
                // configuração de Scroll gradual
                infoCultivo.scrollIntoView({ behavior: "smooth" });
                infoParagraph.textContent = instru_culti[index];
                x_dicas.textContent = planta.name+ " - Dicas de cultivo";
                console.log(`Updated text: ${instru_culti[index]}`);
            }
        };
        plantasLista.appendChild(gridItem);
    });

    //Objeto com os 15 elementos do carrossel, cada um com 3 propriedades: Imagem, Titulo, e parágrafo informativo
    const carrossel = document.getElementById("carrossel");
    const carrossel_content = [
        {
            image: "assets/img/hero_1.JPG",
            title: "Cultivo em micro-escala",
            text: "Aprenda a cultivar plantas e frutos em espaços reduzidos como varandas e apartamentos."
        },
        {
            image: "assets/img/alface.JPEG",
            title: "Alface",
            text: "Vitaminas - Rico em vitaminas K e A; Minerais - Contem ferro e ácido fólico"
        },
        {
            image: "assets/img/rabanete.JPEG",
            title: "Rabanete",
            text: "Vitaminas - Rico em vitamina C; Minerais - Contem potássio"
        },
        {
            image: "assets/img/pepino.JPEG",
            title: "Pepino",
            text: "Vitaminas - Contem vitamina K; Minerais - Contem potássio e magnésio"
        },
        {
            image: "assets/img/morango.JPEG",
            title: "Morango",
            text: "Vitaminas - Rico em vitamina C; Minerais - Contem manganês"
        },
        {
            image: "assets/img/limoeiro_anao.JPG",
            title: "Limão",
            text: "Vitaminas - Rico em vitamina C; Boa fonte de fibra"
        },
        {
            image: "assets/img/manjericao.JPEG",
            title: "Manjericão",
            text: "Vitaminas - Contem vitaminas K e A; Minerais -Anti-oxidantes - rico em óleos essenciais"
        },
        {
            image: "assets/img/hortela.JPEG",
            title: "Hortelã",
            text: "Vitaminas - Contem Vitamina A; Minerais - Contem ferro e manganês"
        },
        {
            image: "assets/img/salsa.JPEG",
            title: "Salsa",
            text: "Vitaminas - Rico em vitaminas K, C e A; Minerais - Contem ferro"
        },
        {
            image: "assets/img/cebolinho.JPG",
            title: "Cebolinho",
            text: "Vitaminas - Rico em vitaminas K e C; Anti-oxidantes - Contem flavonóides"
        },
        {
            image: "assets/img/tomate_cherri.JPEG",
            title: "Tomate",
            text: "Vitaminas - Excelente fonte de vitaminas C e A; Anti-oxidantes - Contem licopeno"
        },
        {
            image: "assets/img/cenoura.JPEG",
            title: "Cenoura",
            text: "Vitaminas - Excelente fonte de vitamina A ; Minerais - Contem potássio"
        },
        {
            image: "assets/img/pimento.JPEG",
            title: "Pimento",
            text: "Vitaminas - Rico em vitaminas C e A; Anti-oxidantes - Rico em diversos carotenoídes"
        },
        {
            image: "assets/img/malagueta.JPEG",
            title: "Malagueta",
            text: "PVitaminas - Contem vitaminas C e B6; Compostos químicos - Rico em capsaicina"
        },
        {
            image: "assets/img/espinafre.JPG",
            title: "Espinafres",
            text: "Vitaminas - Rico em vitaminas K, A e ácido fólico; Minerais -Contem ferro e cálcio"
        },
    ];
    // Selecionar elementos do carrossel

    const carrosselImage = document.getElementById("carrosselImage");
    const carrosselText = document.querySelector(".carrossel-text h1");
    const carrosselInforma = document.querySelector(".carrossel-text p");
    let carrossel_length = carrossel_content.length;
    // console.log(carrossel_length);
    // Declarar var com o valor do index no objeto carrossel_content, o mesmo é incrementado com um set interval atualizando cada elemento
    let currentIndex = 0;
    //Função para atualizar o conteúdo do carrossel (loop com setInterval())
    function updateCarrossel(index) {
        const currentImg = document.querySelector("#carrossel img.active");
        if (currentImg) currentImg.classList.remove("active"); //Remove a imagem ativa da const currentImg

carrosselImage.src = carrossel_content[index].image;
carrosselText.textContent = carrossel_content[index].title;    // Update o heading do carrossel
carrosselInforma.textContent = carrossel_content[index].text;   //Update a informação do carrossel
        carrosselImage.classList.add("active");
    }
//Inicializar carrossel com o primeiro Item do array
    updateCarrossel(currentIndex);
    //Ciclo sequencial pelos elementos da const "carrossel_content  de [0] a [X]
    setInterval(() => {
        currentIndex = (currentIndex + 1) % carrossel_length   // Modulo garante que o carrossel volta ao [0] no fim de cada ciclo
        updateCarrossel(currentIndex);

    }, 8000);





};
