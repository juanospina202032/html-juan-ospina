document.addEventListener("DOMcontentLoaded"), () => {});
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

});

  function creartablero()
    for (let i = 0; i < cardadj.length; i++) {
     var carta = document.createElement("img");

      carta.setAttribute("src", "images/reverso.png");
   
      carta.setAttribute("data-id", i);

      carta.addEventListener("click",  voltearCarta);

      cuadricula.appendChild(carta);
    }
  }
