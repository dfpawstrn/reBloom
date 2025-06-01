
window.onload= function pequenaEscala() {

    //Lista de frutos e vegetais adequados para cultivo em micro && pequena escala
    //

    const plantas_macro = [

        {name: "Batata", images:["assets/img/icons/potato.PNG"],id:"0"},
        {name: "Cebola", images:["assets/img/icons/onion.PNG"],id:"1"},
        { name: "Uva", images: ["assets/img/icons/grape.PNG"], id:"2"},
        { name: "Azeitona", images: ["assets/img/icons/olives.PNG"],id:"3"},
        { name: "Figo", images: ["assets/img/icons/fig.PNG"],id:"4"},
        {name: "Citrinos", images:["assets/img/icons/citrus.PNG"],id:"5"},
        {name: "Romã", images:["assets/img/icons/pomegranate.PNG"],id:"6"},
        {name: "Manga", images:["assets/img/icons/mango.PNG"],id:"7"},
        {name: "Maracujá", images:["assets/img/icons/passion-fruit.PNG"],id:"8"},
        {name: "Abacate", images:["assets/img/icons/avocado.PNG"],id:"9"},
        {name: "Banana", images:["assets/img/icons/bananas.PNG"],id:"10"},
        {name: "Rosmaninho", images:["assets/img/icons/rosemary.PNG"],id:"11"},
        {name: "Lavanda", images:["assets/img/icons/lavender.PNG"],id:"12"},
        {name: "Tomilho", images:["assets/img/icons/thyme.PNG"],id:"13"},

    ]

    const instru_culti = [
        "A batata está presente em grande parte das receitas que pertencem à gastronomia portuguesa bem com em outras países do mundo",
        "Escolha um lugar com sol pleno ou semi-sombra e solo fértil, bem drenado, e rico em matéria orgânica. Tente manter o solo ligeiramente húmido e controle as ervas daninhas.",
        "Vegetal fundamental na culinária portuguesa, a cebola é utilizada numa grande variedade de pratos tradicionais, sendo um ingrediente base para um leque de fins culinários como sopas, pratos de bacalhau e refogados",
        "Os tipos de cebolas mais comuns em Portugal são a cebola branca, roxa e amarela e algumas variedades locais mais adaptadas às condições do clima dessas regiões.",
        "As videiras são das mais antigas e mais bonitas plantas cultivadas em todo o mundo.",
        "A beleza e a sombra que nos proporcionam tornam esta planta extremamente atractiva.",
        "SUma vez estabelecida, se for bem cuidada, uma videira pode produzir uvas durante mais de 40 anos.",
        "A oliveira, também conhecida por Olea europaea, é uma árvore bem nossa, emblemática e bem típica do nosso país",
        "Se quiser colher as suas próprias azeitonas, deve, em primeiro lugar, comprar uma oliveira. Pode encontrá-las em lojas de jardinagem, nalguns viveiros ou até em lojas on-line.",
        "Se for um jardineiro mais experiente, pode cultivar a árvore a partir de um caroço de azeitona, mas o processo será bem mais longo.",
        "Os figos são frutas populares que são comidas frescas ou secas e incluídas em conservas e pães.",
        "Os figos surgem nas figueiras e requerem clima quente e muito sol.",
        "Figos crescem melhor em áreas quentes, tropicais e desérticas, então a maior parte das variedades de figos será capaz de crescer nesses ambientes.",
        "Apesar de serem espécies diferentes, as condições de cultivo e a manutenção são idênticas para todos os citrinos. É necessário: Muitas horas de sol direto (5h no mínimo);Substrato bem drenado; Se cultivar em vaso, opte por um recipiente de grandes dimensões.",
        "Embora a romãzeira ser uma planta com capacidade de se adaptar a qualquer tipo de clima, ela prefere um clima mais ameno,É importante salientar que a romãzeira é uma planta que gosta de bastante sol. No que respeita a solos esta planta não é muito exigente, a realidade é que a romãzeira se adapta bastante bem em quase todo o tipos de solos.",
        "O primeiro passo para plantar manga é retirar toda a polpa possível do fruto. Durante o processo, deve evitar-se tocar o centro da fruta, dado ser o lugar onde a semente se encontra.Relativamente ao método de plantar manga, é necessário plantar a semente num vaso grande ou directamente no solo com uma mistura de terra e composto, a menos de um palmo da superfície.",
        "Pode plantar maracujá em vaso a partir de sementes,estacas, ou a partir de transplante de mudas de plantas de maracujá.Uma vez que o maracujá é uma características de climas tropicais, é fundamental que a coloque exposta frequentemente à radiação solar. Dado que esta planta gosta de calor, são recomendadas temperaturas acima de 20ºC, sendo acima de 25ºC o ideal.",
        "Para plantar abacate precisará de um caroço de abacate, tire o caroço de um abacate e limpe-o, sem retirar a casca castanha que o envolve. Este caroço dará um novo abacateiro. Espete 3/4 palitos no caroço do abacate, apenas para fazer de suporte. Estes palitos irão permitir que metade do Espete 3/4 palitos no caroço do abacate, apenas para fazer de suporte. Estes palitos irão permitir que metade do do abacate deve ficar parcialmente submerso para acelerar o processo de germinação. Após o caroço ter germinado uma planta de cerca de 20/30 cm poderá passar o pequeno abacateiro para o solo. O solo deverá ter uma boa profundidade para um bom desenvolvimento da árvore.",
        "O solo para o plantio de uma bananeira deve ter as características necessárias para o saudável crescimento e frutificação da planta. O solo deve ser bem drenado, profundo e alterado organicamente. O solo ligeiramente ácido, com um pH entre os 5.5 e os 6.5 é o ideal para cultivar bananeiras.As bananeiras são árvores tropicais - que têm origem nas florestas tropicais - , pelo que precisam de muita água e humidade no ar. Este é o clima da sua zona de origem e são estas as condições que se devem tentar criar ao plantar este tipo de árvore.",
        "O rosmaninho é uma planta espontânea em Portugal que podemos encontrar tanto no monte como a cultivar num lugar cheio de sol da varanda de casa, sem precisar de rega. Diz-se até que é das plantas mais fáceis de cuidar, pois vive bem perto do mar, em altitude ou até sob condições meteorológicas desfavoráveis e extremas",
        "A lavanda é uma das plantas aromáticas por excelência, ideal para ter no jardim, terraço ou varanda em casa, porque para além da sua bela cor violeta e do aroma característico e agradável que emite, A primeira coisa que deve saber é que pode plantar lavanda com estacas ou sementes, dependendo do tipo de ideia que tem em mente ou onde a vai plantar. ",
        "O Tomilho gosta de climas temperados e quentes, secos e com boa exposição solar. Podem atingir entre 20 a 40 cm de altura e devem ser podados no final do Verão, após floração e na Primavera, para ajudar na renovação de novos caules. À semelhança de todas as ervas deste grupo (perenes) gosta de muita luz, de preferência mais de 6h de sol direto, deve usar pouca água. Manter a terra húmida à superfície, evitando inundar",

    ]


    //Referenciar as listas no HTML
    const plantasLista = document.getElementById("plantas");
    const plantasInfo = document.getElementById("plantas-info");

    // Configuração de grelha COMPLETAR DESCRIÇÃO

    plantas_macro.forEach((planta, index)=> {
        const gridItem = document.createElement("li");
        // criar elemento <li> para cada planta
        const icon = document.createElement("img");
        icon.src = planta.images[0]; // Use first image as the icon
        icon.alt = planta.name;
        // Criar elemento para o titulo
        const title = document.createElement("h4");
        // Adicionar texto informativo
        title.textContent = planta.name;

        gridItem.appendChild(icon);
        gridItem.appendChild(title);
        // efeito de "smooth" scroll
        gridItem.onclick = () => {
            const infoCultivo = document.getElementById("info-cultivo");
            const infoParagraph = infoCultivo.querySelector("p");
            const x_dicas = infoCultivo.querySelector("h2");
            // Debug
            console.log(`clicked -> ${planta.name}`);
            console.log(`instruções atualizadas ${index}`);

            if (infoParagraph) {
                infoCultivo.scrollIntoView({ behavior: "smooth" });
                infoParagraph.textContent = instru_culti[index];
                x_dicas.textContent = planta.name+ " - Dicas de cultivo";
                console.log(`Updated text: ${instru_culti[index]}`);
            }
        };
        plantasLista.appendChild(gridItem);
    });

    //Objeto com os 15 elementos do carrossel, cada um com 3 propriedades: Imagem, Titulo, e parágrafo informativo

    const carrossel_content = [
        {
            image: "assets/img/hero_2.JPG",
            title: "Cultivo em pequena escala",
            text: "Aprenda a cultivar plantas e frutos na sua casa, horta ou jardim."
        },
        {
            image: "assets/img/batata.JPG",
            title: "Batata",
            text: "Placeholder info nutricional Placeholder info nutricional Placeholder info nutricional"
        },
        {
            image: "assets/img/cebola.JPG",
            title: "Cebola",
            text: "Placeholder info nutricional Placeholder info nutricional Placeholder info nutricional"
        },
        {
            image: "assets/img/uva.JPG",
            title: "Uva",
            text: "Placeholder info nutricional Placeholder info nutricional Placeholder info nutricional"
        },
        {
            image: "assets/img/azeitona.JPG",
            title: "Azeitona",
            text: "Placeholder info nutricional Placeholder info nutricional Placeholder info nutricional"
        },
        {
            image: "assets/img/figo.JPG",
            title: "Figo",
            text: "Placeholder info nutricional Placeholder info nutricional Placeholder info nutricional"
        },
        {
            image: "assets/img/citrino.JPG",
            title: "Citrinos",
            text: "Placeholder info nutricional Placeholder info nutricional Placeholder info nutricional"
        },
        {
            image: "assets/img/roma.JPG",
            title: "Romã",
            text: "Placeholder info nutricional Placeholder info nutricional Placeholder info nutricional"
        },
        {
            image: "assets/img/manga.JPG",
            title: "Manga",
            text: "Placeholder info nutricional Placeholder info nutricional Placeholder info nutricional"
        },
        {
            image: "assets/img/maracuja.JPG",
            title: "Maracujá",
            text: "Placeholder info nutricional Placeholder info nutricional Placeholder info nutricional"
        },
        {
            image: "assets/img/abacate.JPG",
            title: "Abacate",
            text: "Placeholder info nutricional Placeholder info nutricional Placeholder info nutricional"
        },
        {
            image: "assets/img/banana.JPG",
            title: "Banana",
            text: "Placeholder info nutricional Placeholder info nutricional Placeholder info nutricional"
        },
        {
            image: "assets/img/rosmaninho.JPG",
            title: "Rosmaninho",
            text: "Placeholder info nutricional Placeholder info nutricional Placeholder info nutricional"
        },
        {
            image: "assets/img/lavanda.JPG",
            title: "Lavanda",
            text: "Placeholder info nutricional Placeholder info nutricional Placeholder info nutricional"
        },
        {
            image: "assets/img/tomilho.JPG",
            title: "Tomilho",
            text: "Placeholder info nutricional Placeholder info nutricional Placeholder info nutricional"
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
