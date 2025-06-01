window.onload = function () {
    const calendarContent = document.getElementById("calendar-content");
    const banner_openText = "Janeiro, gear; fevereiro, chover; março, encanar; agosto, recolher; setembro, vindimar.";

    const botao_imagem = document.createElement("img");
    const divTitle = document.getElementById("div-title");


    const midGrid = document.getElementById("mid-grid");
    const midText = midGrid.querySelector("h1");
    midText.style.textAlign = "center";

    divTitle.style.textAlign = "center";
    const botao_titulo = document.createElement("button");
    botao_imagem.src = "assets/img/Icons/calendario-icon.png";
    botao_imagem.style.width = "20px";
    botao_imagem.style.height = "20px";
    botao_titulo.id = "b-title";
    botao_titulo.innerHTML = "Calendário de cultivo";
    botao_titulo.style.fontFamily = "open-sans";
    botao_titulo.style.fontSize = "14px";
    botao_titulo.style.marginBottom = "10px";
    botao_titulo.style.marginTop = "10px";
    botao_titulo.style.padding = "10px";
    botao_titulo.style.display = "inline-flex";
    botao_titulo.style.alignItems = "center";

    document.getElementById("div-title").appendChild(botao_titulo);
    botao_titulo.appendChild(botao_imagem);


    botao_titulo.onclick = function () {
        document.getElementById("mid-text").scrollIntoView({ behavior: "smooth" });
    };

    /*
    document.getElementById("foot-top").onclick = function () {
        document.getElementById("nav-bar").scrollIntoView({ behavior: "smooth" });
    }
     */

    const plantas_total = [
        { name: "Alface", images: "assets/img/icons/lettuce.PNG", id: "1" },
        { name: "Rabanete", images: "assets/img/icons/radish.PNG", id: "2" },
        { name: "Pepino", images: ["assets/img/icons/cucumber.PNG"], id:"3"},
        {name: "Tomate", images:["assets/img/icons/tomato.PNG"],id:"4"},
        {name: "Morango", images:["assets/img/icons/strawberry.PNG"],id:"5"},
        {name: "Limão", images:["assets/img/icons/citrus.PNG"],id:"6"},
        {name: "Manjericão", images:["assets/img/icons/basil.PNG"],id:"7"},
        {name: "Hortelã", images:["assets/img/icons/mint.PNG"],id:"8"},
        {name: "Salsa", images:["assets/img/icons/parsley.PNG"],id:"9"},
        {name: "Cebolinho", images:["assets/img/icons/chives.PNG"],id:"10"},
        {name: "Cenoura", images:["assets/img/icons/carrot.PNG"],id:"11"},
        {name: "Pimento", images:["assets/img/icons/red-pepper.PNG"],id:"12"},
        {name: "Espinafre", images:["assets/img/icons/Spinach.PNG"],id:"13"},
        {name: "Malagueta", images:["assets/img/icons/pepper.PNG"],id:"14"},
        {name: "Batata", images:["assets/img/icons/potato.PNG"],id:"15"},
        {name: "Cebola", images:["assets/img/icons/onion.PNG"],id:"16"},
        { name: "Uva", images: ["assets/img/icons/grape.PNG"], id:"17"},
        { name: "Azeitona", images: ["assets/img/icons/olives.PNG"],id:"18"},
        { name: "Figo", images: ["assets/img/icons/fig.PNG"],id:"19"},
        {name: "Citrinos", images:["assets/img/icons/citrus_2.PNG"],id:"20"},
        {name: "Romã", images:["assets/img/icons/pomegranate.PNG"],id:"21"},
        {name: "Manga", images:["assets/img/icons/mango.PNG"],id:"22"},
        {name: "Maracujá", images:["assets/img/icons/passion-fruit.PNG"],id:"23"},
        {name: "Abacate", images:["assets/img/icons/avocado.PNG"],id:"24"},
        {name: "Banana", images:["assets/img/icons/bananas.PNG"],id:"25"},
        {name: "Rosmaninho", images:["assets/img/icons/rosemary.PNG"],id:"26"},
        {name: "Alfazema", images:["assets/img/icons/lavender.PNG"],id:"27"},
        {name: "Tomilho", images:["assets/img/icons/thyme.PNG"],id:"28"},
    ];

    const provRandom = [
        "Janeiro geadeiro, nem boa meda nem bom palheiro.",
        "Em fevereiro chuva, em agosto uva.",
        "Trovoada em março, semeia de alto a baixo.",
        "A água que no verão há de regar, em abril há de ficar.",
        "Maio faz o pão, e agosto o milhão.",
        "Junho floreiro paraíso verdadeiro.",
        "Não há maior amigo, que julho com o seu trigo.",
        "Água de agosto, açafrão, mel e mosto.",
        "Em setembro planta, colhe e cava, que é mês para tudo.",
        "Em outubro sê prudente: guarda pão; guarda semente.",
        "Em novembro põe tudo a secar; pode o sol tão cedo não voltar.",
        "Em dezembro festejar, para em janeiro trabalhar.",
    ];

    const gridContainer = document.querySelector(".grid");
    for (let i = 0; i < plantas_total.length; i++) {
        const gridItem = document.createElement("div");
        const gridImage = document.createElement("img");
        gridItem.classList.add("grid-item");
        gridItem.id = `alimento${i}`;
        gridItem.innerText = plantas_total[i].name;
        gridImage.src = Array.isArray(plantas_total[i].images) ? plantas_total[i].images[0] : plantas_total[i].images;
        gridImage.style.width = "50px";
        gridImage.style.height = "50px";
        gridContainer.appendChild(gridItem);
        gridItem.appendChild(gridImage);
    }

    const topContainer = document.getElementById("calendario-banner");
    const bannerContainer = document.createElement("div");

    bannerContainer.style.position = "relative";
    bannerContainer.style.height = "90vh";
    bannerContainer.style.width = "100vw";

    const calendarBanner = document.createElement("img");
    calendarBanner.src = "assets/img/prv5.JPG";
    calendarBanner.id = "bannerImage";
    calendarBanner.classList.add("bannerClass");
    calendarBanner.style.height = "90vh";
    calendarBanner.style.width = "100vw";
    calendarBanner.style.transition = "opacity 0.5s ease-in-out";

    const bannerText = document.createElement("p");
    bannerText.innerText = banner_openText;
    bannerText.style.fontFamily = "open-sans";
    bannerText.style.fontSize = "2rem";
    bannerText.style.textAlign = "center";
    bannerText.style.color = "white";
    bannerText.style.position = "absolute";
    bannerText.style.top = "50%";
    bannerText.style.left = "50%";
    bannerText.style.transform = "translate(-50%, -50%)";
    bannerText.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    bannerText.style.padding = "10px";
    bannerText.style.borderRadius = "10px";

    bannerContainer.appendChild(calendarBanner);
    bannerContainer.appendChild(bannerText);
    topContainer.appendChild(bannerContainer);

    const gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach(item => {
        item.addEventListener("click", () => {
            const colheita = item.innerText;
            mostraCalendario(colheita);
        });
    });

    // Criação de objeto com informação referente à data adequada para plantação e colheita de cada elemento
    const plantInfo = {
        Alface: {
            planting: "Março a Junho",
            harvest: "6-8 semanas após plantar",
            tips: "Prefere solos bem drenados, irrigação consistente e sombra parcial em climas quentes."
        },
        Rabanete: {
            planting: "De Fevereiro a Abril, e de Setembro a Novembro",
            harvest: "4-6 semanas após plantar",
            tips: "Cresce em solo solto com abundante luz solar. Mantenha o solo húmido, mas não inundado."
        },
        Pepino: {
            planting: "Março a Maio",
            harvest: "50-70 dias após plantar",
            tips: "Requer o uso de treliças para um melhor crescimento. Prefere luz solar plena e solos ricos e bem drenados.\n"
        },
        Tomate: {
            planting: "Abril a Junho",
            harvest: "60-85 dias após plantar",
            tips: "Plantar usando estacas ou outro tipo de estrutura para suportar o crescimento dos frutos. Regue consistentemente."
        },
        Morango: {
            planting: "Março a Abril",
            harvest: "Maio a Junho",
            tips: "Plante em canteiros elevados para drenar mais facilmente. Garanta luz solar abundante e use cobertura vegetal para reter a humidade."
        },
        Limão: {
            planting: "Primavera ou Outono",
            harvest: "6-9 meses após floração",
            tips: "Plante em solo bem drenado. Proteja da geada e garanta luz solar abundante."
        },
        Manjericão: {
            planting: "Abril a Julho",
            harvest: "40-60 dias após plantar",
            tips: "Arranque as flores para estimular o crescimento das folhas. Requer luz solar abundante e rega moderada."
        },
        Hortelã: {
            planting: "Março a Maio",
            harvest: "Regularmente durante a época de crescimento",
            tips: "Cresce bem em recipientes para evitar a propagação. Mantenha o solo húmido, mas não inundado."
        },
        Salsa: {
            planting: "Fevereiro a Junho",
            harvest: "60-90 dias após plantar",
            tips: "Prefere solo húmido e luz solar parcial. Corte os caules regularmente para estimular o desenvolvimento."
        },
        Cebolinho: {
            planting: "Março a Maio",
            harvest: "60-90 dias após plantar",
            tips: "Requer luz solar abundante e solo bem drenado. Colha as folhas conforme necessário."
        },
        Cenoura: {
            planting: "Março a Junho",
            harvest: "70-80 days após plantar",
            tips: "Plante em solo profundo e solto para evitar o crescimento atrofiado. Regue regularmente, mas não em excesso."
        },
        Pimento: {
            planting: "Março a Junho",
            harvest: "60-90 days após plantar",
            tips: "Forneça suporte para plantas com frutos pesados. Garanta luz solar total e rega regular."
        },
        Espinafre: {
            planting: "Fevereiro a Maio e de Agosto a Outubro",
            harvest: "40-50 dias após plantar",
            tips: "Prefere temperaturas amenas e sombra parcial. Regue consistentemente para evitar o desenvolvimento de caules floridos antes da época de colheita."
        },
        Malagueta: {
            planting: "Março a Maio",
            harvest: "90-120 dias após plantar",
            tips: "Plante em locais quentes e com abundante luz solar. Utilize solo bem drenado e evite regar em excesso."
        },
        Batata: {
            planting: "Fevereiro a Maio",
            harvest: "90-120 dias após plantar",
            tips: "Plante em solo solto e bem drenado. Amontoe o solo à volta das plantas à medida que crescem para estimular a formação de tubérculos."
        },
        Cebola: {
            planting: "Fevereiro a Abril",
            harvest: "100-120 dias após plantar",
            tips: "Plante em local com abundante luz solar e em solo bem drenado. Mantenha o solo uniformemente húmido, mas não em demasia."
        },
        Uva: {
            planting: "Primavera",
            harvest: "Final do Verão até ao início do Outono",
            tips: "Incorpore as vinhas em treliças para uma melhor circulação do ar. Podar regularmente para controlar o crescimento."
        },
        Azeitona: {
            planting: "Primavera",
            harvest: "Outono",
            tips: "Plante em solo bem drenado e com abundante luz solar. Proteja da geada durante os primeiros anos."
        },
        Figo: {
            planting: "Primavera",
            harvest: "Verão",
            tips: "Requer luz solar total e solo bem drenado. Regue regularmente durante a época de crescimento."
        },
        Citrinos: {
            planting: "Primavera ou Outono",
            harvest: "6-9 meses após a floração",
            tips: "Plante em solo bem drenado. Proteja da geada e garanta luz solar suficiente."
        },
        Romã: {
            planting: "Primavera",
            harvest: "Outono",
            tips: "Prefere luz solar total e o solo bem drenado. Podar ligeiramente para dar forma à árvore."
        },
        Manga: {
            planting: "Primavera",
            harvest: "3-5 anos após plantar (Árvores de fruto)",
            tips: "Plante em áreas quentes e ensolaradas. Regue regularmente durante o primeiro ano."
        },
        Maracujá: {
            planting: "Primavera",
            harvest: "12-18 meses após plantar",
            tips: "Cultive em treliças para obter suporte. Requer luz solar total e rega consistente."
        },
        Abacate: {
            planting: "Primavera",
            harvest: "3-5 anos após plantar (Árvores de fruto)",
            tips: "Plante em solo bem drenado. Proteja do gelo e da água de forma consistente."
        },
        Banana: {
            planting: "Primavera",
            harvest: "12-18 meses após plantar",
            tips: "Requer climas quentes e solos ricos e bem drenados. Regue com frequência e garanta luz solar total."
        },
        Rosmaninho: {
            planting: "Primavera",
            harvest: "Ao longo da época de cultivo",
            tips: "Cultivar em solo bem drenado e com sol abundante. Podar após a floração para manter a forma."
        },
        Alfazema: {
            planting: "Primavera",
            harvest: "Verão",
            tips: "Requer solo bem drenado e luz solar total. Evite regar em excesso."
        },
        Tomilho: {
            planting: "Primavera",
            harvest: "Ao longo da época de cultivo",
            tips: "Cresce em solo bem drenado e com sol. Apare regularmente para maximizar o crescimento."
        }
    };


    function mostraCalendario(colheita) {

        const info = plantInfo[colheita]; // Recolher a informação necessária

        // Smooth scroll para a section colheita calendar
        document.getElementById("crop-calendar").scrollIntoView({ behavior: "smooth" });

        if (info) {
            // Update a div content com a info das plantas
            calendarContent.innerHTML = `

            <h3>${colheita}</h3>
            <p><strong>Quando plantar?:</strong> ${info.planting}</p>
            <p><strong>Quando colher?:</strong> ${info.harvest}</p>
            <p><strong>Dica:</strong> ${info.tips}</p>
        `;
            //  styling da div content
            calendarContent.style.backgroundImage = "url('assets/img/hero_4.jpg')";
            calendarContent.style.backgroundSize = "cover";
            calendarContent.style.padding = "20px";
            calendarContent.style.color = "white";
            calendarContent.style.borderRadius = "10px";
            calendarContent.style.backgroundColor = "rgba(0, 0, 0, 2.0)";
            calendarContent.style.borderRadius = "10px";

            // Adiciona background image baseada na colheita especifica
            iconImage();
        }
    }


    setInterval(() => {
        calendarBanner.style.opacity = "0";
        setTimeout(() => {
            const randNumber = Math.floor(Math.random() * 11);
            calendarBanner.src = `assets/img/prv${randNumber + 1}.jpg`;
            bannerText.innerText = provRandom[randNumber];
            calendarBanner.style.opacity = "1";
        }, 500);
    }, 8000);

    const tipsImage = [
        "assets/img/alface_2.jpg",
        "assets/img/rabanete.jpeg",
        "assets/img/pepino.jpeg",
        "assets/img/tomate_2.jpg",
        "assets/img/morango.jpeg",
        "assets/img/limao_4.jpg",
        "assets/img/manjericao.jpeg",
        "assets/img/hortela.jpeg",
        "assets/img/salsa.jpeg",
        "assets/img/cebolinho_2.jpg",
        "assets/img/cenoura.jpeg",
        "assets/img/pimento.jpeg",
        "assets/img/espinafre_2.jpg",
        "assets/img/malagueta.jpeg",
        "assets/img/batata.jpg",
        "assets/img/cebola_2.jpg",
        "assets/img/uva.jpg",
        "assets/img/azeitona.jpg",
        "assets/img/figo.jpg",
        "assets/img/citrinos_2.jpg",
        "assets/img/roma.jpg",
        "assets/img/manga_2.jpg",
        "assets/img/maracuja.jpg",
        "assets/img/abacate.jpg",
        "assets/img/banana.jpg",
        "assets/img/rosmaninho_2.jpg",
        "assets/img/lavanda_2.jpg",
        "assets/img/tomilho_2.jpg"
    ];


    function iconImage() {
        for (let i = 0; i < tipsImage.length; i++) {
            const gridItem = document.getElementById(`alimento${i}`);
            if (gridItem) {
                gridItem.addEventListener("click", () => {
                    const imageUrl = tipsImage[i];
                    calendarContent.style.backgroundImage = `url('${imageUrl}')`;
                    calendarContent.style.backgroundSize = "cover";
                    calendarContent.style.padding = "20px";
                    calendarContent.style.color = "white";
                    calendarContent.style.borderRadius = "10px";



                });
            }
        }
    }
};
