# Front End 2024-2026

Questo è un progetto scolastico.

## Indice

- [Descrizione](#descrizione)
- [Tecnologie Utilizzate](#tecnologie-utilizzate)
- [Metodi Utilizzati](#metodi-utilizzati)
- [Funzionalità](#funzionalità)
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
