// Funzione per contattare tramite email con indirizzo generato dinamicamente
function contactEmail(nome, cognome) {
  const email = `${nome.toLowerCase()}.${cognome.toLowerCase()}.24@stud.itsaltoadriatico.it`;
  window.location.href = `mailto:${email}?subject=Contact`;
}

function openPDF() {
  window.open("https://example.com/your-pdf-link", "_blank");
}

function openGit() {
  window.open(
    "https://github.com/CammarataLudovico/Front-End_2024-2026",
    "_blank"
  );
}

// Caricamento dinamico dei dati e generazione delle card
document.addEventListener("DOMContentLoaded", async function () {
  const cardContainer = document.getElementById("card-container");

  try {
    const response = await fetch("Studenti.json");
    const cardData = await response.json();

    cardData.forEach((data) => {
      // Creazione della card
      const card = document.createElement("div");
      card.className = "col-12 col-sm-6 col-md-4 col-lg-3 col-custom-5";

      const cardInner = document.createElement("div");
      cardInner.className = "card p-3 shadow-sm";

      const img = document.createElement("img");
      img.src = data.immagine;
      img.alt = `Image ${data.numero}`;

      const numberDiv = document.createElement("div");
      numberDiv.className = "number";
      numberDiv.textContent = `${data.numero}.`;

      const nameDiv = document.createElement("div");
      nameDiv.className = "name";
      nameDiv.textContent = `${data.nome} ${data.cognome}`;

      const button = document.createElement("button");
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
