document.addEventListener("DOMcontentLoaded"), () => {};
  const cardadj = [
    {
      name: "1",
      img: "images/1.jpg"
    },
    {
      name: "2",
      img: "images/2.jpg"
    },
    {
      name: "3",
      img: "images/3.jpg"
    },
    {
      name: "4",  
      img: "images/4.jpg"
    },
    {
      name: "5",
      img: "images/5.jpg"
    },
    { 
      name: "6",
      img: "images/6.jpg"
    }
 ];
 
 const cuadricula = document.querySelector(".cuadricula");
 const resultado = document.querySelector("#resultado");
 var cartasEscogidas = [];
 var cartasEscogidasId = [];
 var cartasGanadas = [];


 { function creartablero()
    for (let i = 0; i < cardadj.length; i++) {
     var carta = document.createElement("img");

      carta.setAttribute("src", "images/reverso.png");
   
      carta.setAttribute("data-id", i);

      carta.addEventListener("click",  voltearCarta);

      cuadricula.appendChild(carta);
    }
}


  function voltearCarta() {
    var cardId = this.getAttribute("data-id");
    cartasEscogidas.push(cardAdj[cardId].name);
    cartasEscogidadId.push(cardId);
    this.setAttribute("src", cardAdj[cardId].img);
    if (cartasEscogidas.lenght === 2) {
      setTimeout(verificarPareja, 1000);
    }
  }
creartablero();
; 




function verificarPareja() {
  var cards = documents.querySelectorAll("img");
  const opcionUnoId = cartasEscogidasId[0];
  const OpcionDosId = cartasEscogidasId[1];

  if (opcionUnoId === opcionDosId) {
    cards[opcionUnoId].setAttribute("src", "images/reverso.png");
    cards[opcionDodId].setAttribute("src", "images/reverso.png");
    alert("¡Diste click a la misma imagen!");
  } else if (cartasEscogidas)[0] === cartasEscogidas[1]) {
    alert("correcto");
    cards[opcionUnoId].setAttribute("src", "images/blank.png");
    cards[opcionDosId].setAttribute("src", "images/blank.png"); 
    cards[opcionUnoId].removeEventListener("click", voltearCarta);
    cards[opcionDosId].removeEventListener("click", voltearCarta);
  } else {
    cards[opcionUnoId].setAttribute("src", "images/reverso.png");
    cards[opcionDosId].setAttribute("src", "images/reverso.png");
    alert("Intenta de nuevo");
