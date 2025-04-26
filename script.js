function contactEmail(nome, cognome) {
  const email = `${nome.toLowerCase()}.${cognome.toLowerCase()}.24@stud.itsaltoadriatico.it`,
    subject = `Contatto via mail di ${nome} ${cognome}`,
    mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;

  window.location.href = mailtoLink;
}

document.addEventListener("DOMContentLoaded", async () => {
  const cardContainer = document.getElementById("card-container");
  const generatePDFButton = document.getElementById("generatePDFButton");

  // Funzione per generare il PDF
  generatePDFButton.addEventListener("click", () => {
    generatePDF();
  });

  try {
    const response = await fetch("Studenti.json");
    const cardData = await response.json();

    // Ordina gli studenti per cognome in ordine alfabetico
    cardData.sort((a, b) => a.cognome.localeCompare(b.cognome));

    cardData.forEach((data, index) => {
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
      img.alt = `Foto di ${data.nome} ${data.cognome}`;
      img.loading = "lazy"; // Aggiunto lazy loading per migliorare le prestazioni

      numberDiv.className = "number";
      numberDiv.textContent = `${index + 1}.`;

      nameDiv.className = "name";
      nameDiv.innerHTML = `${data.nome} <br> ${data.cognome}`;

      button.className = "btn contact-btn";
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
    cardContainer.innerHTML = `
      <div class="col-12 text-center">
        <div class="alert alert-danger">
          Errore nel caricamento dei dati. Riprova più tardi.
        </div>
      </div>
    `;
  }

  // Funzione per generare il PDF dinamicamente
  async function generatePDF() {
    try {
      const response = await fetch("Studenti.json");
      const studentiData = await response.json();

      // Ordina gli studenti per cognome in ordine alfabetico
      studentiData.sort((a, b) => a.cognome.localeCompare(b.cognome));

      // Prepara il template per il PDF
      const pdfTemplate = document.getElementById("pdf-template");
      const pdfContent = pdfTemplate.querySelector(".pdf-content");

      // Pulisci il contenuto precedente
      pdfContent.innerHTML = "";

      // Aggiungi le card al template PDF
      studentiData.forEach((studente, index) => {
        const pdfCard = document.createElement("div");
        pdfCard.className = "pdf-card";

        pdfCard.innerHTML = `
          <img src="${studente.immagine}" alt="Foto di ${studente.nome} ${
          studente.cognome
        }">
          <div class="number-name">${index + 1}. ${studente.nome} ${
          studente.cognome
        }</div>
        `;

        pdfContent.appendChild(pdfCard);
      });

      // Configura le opzioni per html2pdf
      const options = {
        margin: [3, 3, 3, 3], // Margini minimi [top, right, bottom, left]
        filename: "Studenti_FrontEnd_2024-2026.pdf",
        image: { type: "jpeg", quality: 0.9 },
        html2canvas: {
          scale: 1,
          useCORS: true,
          letterRendering: true,
          logging: false,
        },
        jsPDF: {
          unit: "mm",
          format: "a4",
          orientation: "landscape", // Orientamento orizzontale per più spazio
          compress: true,
        },
        pagebreak: { mode: ["avoid-all"] }, // Evita interruzioni di pagina
      };

      // Genera il PDF
      pdfTemplate.style.display = "block"; // Mostra il template per la generazione

      if (typeof html2pdf !== "undefined") {
        try {
          await html2pdf().set(options).from(pdfTemplate).save();
        } catch (pdfError) {
          console.error("Errore durante la generazione del PDF:", pdfError);
          alert(
            "Si è verificato un errore durante la generazione del PDF. Controlla la console per maggiori dettagli."
          );
        }
      } else {
        console.error(
          "html2pdf is not defined. Make sure to include the library."
        );
        alert("html2pdf library is missing. PDF generation will fail.");
      }
      pdfTemplate.style.display = "none"; // Nascondi il template dopo la generazione
    } catch (error) {
      console.error("Errore nella generazione del PDF:", error);
      alert(
        "Si è verificato un errore durante la generazione del PDF. Riprova più tardi."
      );
    }
  }
});
