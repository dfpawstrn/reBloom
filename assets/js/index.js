window.onload = function() {

    const topSection = document.getElementById("sobre-nos");
const topHeader = topSection.querySelector("h1");
const topParagraph = topSection.querySelector("p");


const contentContainer = document.createElement("div");
contentContainer.id = "contentContainer";

    const topBanner = document.createElement("img");
    //topBanner.style.position = "relative";
    //topBanner.style.right = 300+"px";
    topBanner.id="topBanner";
    topBanner.src="assets/img/img_long_5.jpg"

    contentContainer.appendChild(topBanner);
    contentContainer.appendChild(topParagraph);



    topSection.appendChild(contentContainer);

    topSection.style.backgroundColor = "#158a36";

topHeader.innerHTML = "Quem somos?"
topHeader.style.fontSize = "1.4rem";
topHeader.style.position = "relative";
topHeader.style.color = "white";


topParagraph.innerHTML = "Olá! Somos a reBloom, um assistente para o cultivo de plantas e frutos em casa. Quer esteja a começar um pequeno projeto de jardinagem urbana ou a planear uma colheita de maior escala, apresentamos dicas e informação para o cultivo de espécies adequadas a Portugal continental."
topParagraph.style.color = "white";

const funcSection = document.getElementById("funcionalidades");
const funcTitulo = funcSection.querySelector("h2");
//Não havendo ID é usada a pseudo classe CSS :nth-of-type() - invoca elementos com base nas suas posições relativamente a nodes "irmãs/parentes" (Siblings)
    //https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-of-type
const funcFlora = funcSection.querySelector(".funcionalidade-item:nth-of-type(1) h3");
const funcFloraPara = funcSection.querySelector(".funcionalidade-item:nth-of-type(1) p");
const funcFloraJogar = funcSection.querySelector(".funcionalidade-item:nth-of-type(1) a");

funcTitulo.innerHTML = "Explore as nossas funcionalidades!"
funcFloraJogar.innerHTML = "Jogar";
funcFloraPara.innerHTML = "Teste o seu conhecimento de botânica com o nosso jogo interativo";
funcFlora.innerHTML = "Adivinha a planta!"
funcTitulo.style.position = "relative";


//Invocar o segundo elemento da class "funcionalidade-item"

const funcCultivo = funcSection.querySelector(".funcionalidade-item:nth-of-type(2)");
const funcItem = funcCultivo.querySelector("h3");
const funcPara = funcCultivo.querySelector("p");
const funcVerCal = funcCultivo.querySelector("a");

funcPara.innerHTML = "Planeie o timing para o cultivo e colheita das suas plantas e frutos";
funcItem.innerHTML = "Calendario de cultivo";
funcVerCal.innerHTML ="Consultar calendário"

const cultivoLink = funcSection.querySelector(".funcionalidade-item:nth-of-type(3)");

const microLink = cultivoLink.querySelector("a");
const microHeader = cultivoLink.querySelector("h3");
const microPara = cultivoLink.querySelector("p");
microPara.innerHTML = "Ideias para cultivo em espaços muito reduzidos, como varandas ou apartamentos"
microLink.innerHTML = "Saiba mais";
microHeader.innerHTML="Cultivo em micro escala";

const cultivoLink_2 = funcSection.querySelector(".funcionalidade-item:nth-of-type(4)");

const macroLink = cultivoLink_2.querySelector("a");
const macroPara = cultivoLink_2.querySelector("p");
const macroHeader = cultivoLink_2.querySelector("h3");

macroLink.innerHTML = "Saiba mais";
macroHeader.innerHTML = "Cultivo em pequena e grande escala";
macroPara.innerHTML = "Ideias para cultivo tanto em espaços reduzidos, como de maior dimensão"

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


}

