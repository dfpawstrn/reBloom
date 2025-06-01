window.onload = function () {
    const banner_openText = "Janeiro, gear; fevereiro, chover; março, encanar; agosto, recolher; setembro, vindimar.";
    const botao_titulo = document.createElement("button");
    const botao_imagem = document.createElement("img");
    const divTitle = document.getElementById("div-title");
    const calendarContent = document.getElementById("calendar-content");

    const midGrid = document.getElementById("mid-grid");
    const midText = midGrid.querySelector("h1");
    midText.style.textAlign = "center";

    divTitle.style.textAlign = "center";
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
        {name: "Citrinos", images:["assets/img/icons/citrus.PNG"],id:"20"},
        {name: "Romã", images:["assets/img/icons/pomegranate.PNG"],id:"21"},
        {name: "Manga", images:["assets/img/icons/mango.PNG"],id:"22"},
        {name: "Maracujá", images:["assets/img/icons/passion-fruit.PNG"],id:"23"},
        {name: "Abacate", images:["assets/img/icons/avocado.PNG"],id:"24"},
        {name: "Banana", images:["assets/img/icons/bananas.PNG"],id:"25"},
        {name: "Rosmaninho", images:["assets/img/icons/rosemary.PNG"],id:"26"},
        {name: "Lavanda", images:["assets/img/icons/lavender.PNG"],id:"27"},
        {name: "Tomilho", images:["assets/img/icons/thyme.PNG"],id:"28"},
    ];

    const provRandom = [
        "Janeiro geadeiro, nem boa meda nem bom palheiro.",
        "Em fevereiro chuva, em agosto uva.",
        "Trovoada em março, semeia de alto a baixo.",
        "A água que no verão há de regar, em abril há de ficar.",
        "Maio faz o pão, e agosto o milhão.",
    ];

    const gridContainer = document.querySelector(".grid");
    for (let i = 0; i < plantas_total.length; i++) {
        const gridItem = document.createElement("div");
        const gridImage = document.createElement("img");
        gridItem.classList.add("grid-item");
        gridItem.id = `alimento${i}`;
        gridItem.innerText = plantas_total[i].name;
        gridImage.src = Array.isArray(plantas_total[i].images) ? plantas_total[i].images[0] : plantas_total[i].images; // Fix 2
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
            const crop = item.innerText;
            showCropCalendar(crop);
        });
    });

    function showCropCalendar(crop) {

        document.getElementById("crop-calendar").scrollIntoView({ behavior: "smooth" });


        calendarContent.innerHTML = `<h3>${crop}</h3><p>Aqui está o calendário de colheita para ${crop}.</p>`;
        calendarContent.style.backgroundImage = "url('assets/img/hero_4.jpg')";
        calendarContent.style.backgroundSize = "cover";
        calendarContent.style.padding = "20px";
        calendarContent.style.color = "white";
        calendarContent.style.borderRadius = "10px";

        iconImage();
    }

    setInterval(() => {
        calendarBanner.style.opacity = "0";
        setTimeout(() => {
            const randNumber = Math.floor(Math.random() * 5);
            calendarBanner.src = `assets/img/prv${randNumber + 1}.jpg`;
            bannerText.innerText = provRandom[randNumber];
            calendarBanner.style.opacity = "1";
        }, 500);
    }, 6000);

    const tipsImage = [
        "assets/img/alface.jpeg",
        "assets/img/rabanete.jpeg",
        "assets/img/pepino.jpeg",
        "assets/img/tomate_cherri.jpg",
        "assets/img/morango.jpeg",
        "assets/img/limoeiro_anao.jpg",
        "assets/img/manjericao.jpeg",
        "assets/img/hortela.jpeg",
        "assets/img/salsa.jpeg",
        "assets/img/cebolinho2.jpg",
        "assets/img/cenoura.jpeg",
        "assets/img/pimento.jpeg",
        "assets/img/espinafre.jpg",
        "assets/img/malagueta.jpeg",
        "assets/img/batata.jpg",
        "assets/img/cebola.jpg",
        "assets/img/uva.jpg",
        "assets/img/azeitona.jpg",
        "assets/img/figo.jpg",
        "assets/img/citrino.jpg",
        "assets/img/roma.jpg",
        "assets/img/manga.jpg",
        "assets/img/maracuja.jpg",
        "assets/img/abacate.jpg",
        "assets/img/banana.jpg",
        "assets/img/rosmaninho.jpg",
        "assets/img/lavanda.jpg",
        "assets/img/tomilho.jpg"
    ];

    // Criação de array com informação referente à data adequada para plantação e colheita de cada elemento

    const plantInfo = {
        Alface: {
            planting: "March to June",
            harvest: "6-8 weeks after planting",
            tips: "Prefers well-drained soil, consistent watering, and partial shade in hot climates."
        },
        Rabanete: {
            planting: "February to April and September to November",
            harvest: "4-6 weeks after planting",
            tips: "Grow in loose soil with full sunlight. Keep the soil moist but not waterlogged."
        },
        Pepino: {
            planting: "March to May",
            harvest: "50-70 days after planting",
            tips: "Requires trellising for better growth. Prefers full sunlight and rich, well-drained soil."
        },
        Tomate: {
            planting: "April to June",
            harvest: "60-85 days after planting",
            tips: "Stake or cage plants to support fruit growth. Water deeply and consistently."
        },
        Morango: {
            planting: "March to April",
            harvest: "May to June",
            tips: "Plant in raised beds for better drainage. Ensure full sunlight and use mulch to retain moisture."
        },
        Limão: {
            planting: "Spring or autumn",
            harvest: "6-9 months after flowering",
            tips: "Plant in well-drained soil. Protect from frost and ensure plenty of sunlight."
        },
        Manjericão: {
            planting: "April to July",
            harvest: "40-60 days after planting",
            tips: "Pinch off flowers to encourage leaf growth. Requires full sunlight and moderate watering."
        },
        Hortelã: {
            planting: "March to May",
            harvest: "Regularly throughout the growing season",
            tips: "Grows well in containers to prevent spreading. Keep the soil moist but not soggy."
        }
    };


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
