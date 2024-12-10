const contactEmail = (nome, cognome) =>
  (window.location.href = `mailto:${nome.toLowerCase()}.${cognome.toLowerCase()}.24@stud.itsaltoadriatico.it?subject=Contact`);

document.addEventListener("DOMContentLoaded", async function () {
  const cardContainer = document.getElementById("card-container");

  try {
    const response = await fetch("Studenti.json"),
      cardData = await response.json();

    cardData.forEach((data, index) => {
      // Usa 'index' per ottenere la posizione
      // Creazione della card
      const card = document.createElement("div"),
        cardInner = document.createElement("div"),
        img = document.createElement("img"),
        numberDiv = document.createElement("div"),
        nameDiv = document.createElement("div"),
        button = document.createElement("button");

      card.className = "col-12 col-sm-6 col-md-4 col-lg-3 col-custom-5";
      cardInner.className = "card p-3 shadow-sm";

      img.src = data.immagine;
      img.alt = `Image ${index + 1}`; // Usa l'indice + 1 per numerazione

      numberDiv.className = "number";
      numberDiv.textContent = `${index + 1}.`; // Usa l'indice + 1 per visualizzare il numero

      nameDiv.className = "name";
      nameDiv.innerHTML = `${data.nome} <br> ${data.cognome}`;

      button.className = "btn btn-primary contact-btn";
      button.textContent = "Invia Mail";
      button.onclick = () => contactEmail(data.nome, data.cognome);

      cardInner.appendChild(img);
      cardInner.appendChild(numberDiv);
      cardInner.appendChild(nameDiv);
      cardInner.appendChild(button);

      card.appendChild(cardInner);
      cardContainer.appendChild(card);
    });
  } catch (error) {
    console.error("Errore nel caricamento dei dati JSON:", error);
  }
});
