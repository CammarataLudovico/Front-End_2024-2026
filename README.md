# Front End 2024-2026

Questo è un progetto scolastico.

## Indice

- [Descrizione](#descrizione)
- [Tecnologie Utilizzate](#tecnologie-utilizzate)
- [Metodi Utilizzati](#metodi-utilizzati)
- [Funzionalità](#funzionalità)
- [Gestione Card](#gestione-card)
- [Installazione](#installazione)
- [Contribuire](#contribuire)
- [Autore](#autore)

## Descrizione

Questo sito web presenta una serie di card che mostrano informazioni di contatto per vari utenti. Ogni card include un'immagine, un numero identificativo, un nome e un cognome, insieme a un pulsante per inviare un'email all'utente.

## Tecnologie Utilizzate

- **HTML**: Struttura del documento.
- **CSS**: Stile e layout.
- **JavaScript**: Interattività e gestione degli eventi.
- **Bootstrap**: Framework CSS per un design migliore e responsive.

## Metodi Utilizzati

Di seguito sono elencati i metodi JavaScript utilizzati nel progetto, con link alla documentazione ufficiale:

- **`document.addEventListener()`**: Aggiunge un gestore di eventi a un oggetto. Utilizzato per eseguire codice quando il DOM è completamente caricato. [Documentazione](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- **`document.createElement()`**: Crea un nuovo elemento HTML. Utilizzato per generare dinamicamente le card. [Documentazione](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
- **`appendChild()`**: Aggiunge un nodo come ultimo figlio di un nodo. Utilizzato per costruire la gerarchia delle card. [Documentazione](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)

- **`window.location.href`**: Consente di modificare l'URL corrente, utilizzato per inviare email tramite `mailto:`. [Documentazione](https://developer.mozilla.org/en-US/docs/Web/API/Location/href)

- **`window.open()`**: Apre una nuova finestra del browser con l'URL specificato. Utilizzato per aprire PDF e GitHub. [Documentazione](https://developer.mozilla.org/en-US/docs/Web/API/Window/open)

- **`await fetch("Studenti.json")`**: Scarica il file Studenti.json dal server
- **`await response.json()`**: Prende i dati scaricati e li trasforma in un oggetto JavaScript (o array), rendendoli facili da usare nel resto del codice.

## Funzionalità

- **Visualizzazione Card**: Le card sono generate dinamicamente tramite JavaScript.
- **Contatto tramite Email**: Ogni card ha un pulsante che consente di inviare un'email direttamente all'utente.
- **Bottoni PDF e GitHub**: Due bottoni consentono di aprire un documento PDF e la pagina GitHub del progetto.
- **Design Responsive**: L'interfaccia si adatta a vari formati di schermo (mobile, tablet, desktop).

## Gestione Card

### Gestione delle 5 Card con Media Query Personalizzate

Per distribuire cinque card su una singola riga in maniera uniforme e responsive, è stato utilizzato un approccio basato su **media query** e un layout flessibile personalizzato.

## Codice CSS

```css
/* Layout personalizzato per la griglia delle card */
@media (min-width: 1200px) {
  .col-custom-5 {
    flex: 0 0 19%; /* Ogni card occupa il 19% della larghezza */
    max-width: 19%; /* Garantisce che la larghezza non superi il 19% */
    margin-right: 1%; /* Aggiunge un margine tra le card */
  }
  .col-custom-5:nth-child(5n) {
    margin-right: 0; /* Rimuove il margine dall'ultima card della riga */
  }
}
```

## Spiegazione Tecnica

### **1. Struttura flessibile con `flex`**

- La proprietà `flex: 0 0 19%` definisce che:
  - **0**: La card non si ridimensiona automaticamente.
  - **19%**: La larghezza di ogni card è fissata al 19% dello spazio disponibile.
- La proprietà `max-width: 19%` assicura che la larghezza massima della card non superi questa percentuale, anche in situazioni in cui lo spazio disponibile aumenta.

### **2. Distribuzione uniforme**

- Il margine del **1%** tra le card crea uno spazio visivamente bilanciato.
- La regola `.col-custom-5:nth-child(5n)` elimina il margine destro dalla quinta card in ogni riga, garantendo un allineamento perfetto.

### **3. Adattabilità tramite media query**

- La regola viene applicata solo per schermi con una larghezza minima di 1200px (tipicamente desktop).
- Su schermi più piccoli, il layout si adatta automaticamente, ad esempio:
  - Può diventare a 2 o 3 card per riga.
  - Altri stili possono essere definiti per mobile.

---

## Estetica delle Card

Oltre alla gestione della griglia, sono stati applicati stili avanzati per migliorare l'aspetto delle card.

### **Stile delle Card**

```css
.card {
  text-align: center;
  margin-bottom: 20px;
  border-radius: 1rem;
  background: linear-gradient(
    145deg,
    #ffffff,
    #f3f3f3
  ); /* Gradiente elegante */
  transition: transform 0.3s ease, background 0.3s ease; /* Animazione fluida */
  box-shadow: 6px 6px 15px rgba(0, 0, 0, 0.15), -6px -6px 15px rgba(255, 255, 255, 0.8); /* Effetto di profondità */
}
```

### **Effetto Hover**

```css
.card:hover {
  transform: translateY(-10px); /* Leggero effetto di sollevamento */
  background: linear-gradient(
    145deg,
    #f5f5f5,
    #e6e6e6
  ); /* Gradiente più chiaro */
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1), -4px -4px 10px rgba(255, 255, 255, 0.7); /* Ombra ridotta */
}
```

---

## Stile Header e Footer

### **Header**

```css
header {
  background-color: #1a1a2e; /* Blu scuro elegante */
  color: white;
  padding: 15px 0;
  text-align: center;
  font-size: 1.8rem;
  font-weight: bold;
}
```

### **Footer**

```css
.footer {
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  background-color: #1a1a2e; /* Sfondo scuro elegante */
  color: white;
  padding: 20px 0;
  box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.1); /* Ombra sottile */
}
```

---

## Stile del Bottone di Contatto

```css
.card .contact-btn {
  margin-top: 10px;
  border-radius: 15px;
  background: linear-gradient(145deg, #00b333, #007f24); /* Gradiente verde */
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  transition: background 0.3s ease, transform 0.3s ease; /* Animazioni fluide */
}

.card .contact-btn:hover {
  background: linear-gradient(145deg, #00e64d, #009933); /* Verde più acceso */
  transform: scale(1.05); /* Leggero ingrandimento */
  box-shadow: 0 4px 10px rgba(0, 128, 0, 0.2); /* Ombra al passaggio del mouse */
}
```

---

## Conclusione

Questo layout garantisce:

- **Responsività**: Adattamento dinamico su schermi di diverse dimensioni.
- **Estetica moderna**: Grazie a gradiente, ombre ed effetti hover.
- **Usabilità**: Pulsanti intuitivi e layout ben organizzato.

---

## Installazione

Per eseguire questo progetto localmente, segui questi passaggi:

1. **Clona il repository**:

   ```bash
   git clone https://github.com/CammarataLudovico/Front-End_2024-2026.git
   ```

2. **Naviga nella cartella del progetto**:

   ```bash
   cd Front-End_2024-2026
   ```

3. **Apri il file `index.html` in un browser** per visualizzare il sito.

## Contribuire

Se desideri contribuire a questo progetto, segui questi passi:

1. **Fai un fork del repository**.
2. **Crea un nuovo branch**:

   ```bash
   git checkout -b feature/YourFeature
   ```

3. **Fai le tue modifiche** e assicurati che tutto funzioni correttamente.
4. **Fai un commit delle tue modifiche**:

   ```bash
   git commit -m "Aggiunta di una nuova funzionalità"
   ```

5. **Fai un push del tuo branch**:

   ```bash
   git push origin feature/YourFeature
   ```

6. **Apri una Pull Request** sul repository originale.

## Autore

**Ludovico Cammarata**  
GitHub: [CammarataLudovico](https://github.com/CammarataLudovico)  
Anno: 2024

---
