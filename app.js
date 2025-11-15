
  /*
    Prosta animacja: klik LET'S ROLL => portal dostaje klasę .opened
  */
  const portal     = document.getElementById('portal');
  const rollButton = document.getElementById('rollButton');

  rollButton.addEventListener('click', () => {
    portal.classList.remove('opened'); // reset animacji
    void portal.offsetWidth;           // hack – wymusza przeliczenie layoutu
    portal.classList.add('opened');    // ponownie dodajemy klasę => glow
  });

  /*
    LOGIKA PRZYCISKU „Wygeneruj wiadomość”
    – zbieramy:
      * e-mail
      * poziom VEILBOX
      * TX hash
      * notkę
    – składamy gotowy tekst
    – wklejamy do pola #generatedMail
    Klient kopiuje to i wkleja do własnego maila.
  */
  const sendOrderBtn = document.getElementById('sendOrderBtn');

  sendOrderBtn.addEventListener('click', () => {
    // pobranie wartości z pól formularza
    const emailInput = document.getElementById('email').value.trim();
    const levelInput = document.getElementById('level').value;
    const txInput    = document.getElementById('txhash').value.trim();
    const noteInput  = document.getElementById('note').value.trim();

    // podstawowa walidacja – bez e-maila albo TX hash nie ma sensu
    if(!emailInput){
      alert("Podaj e-mail, na który mam wysłać VEILBOX.");
      return;
    }
    if(!txInput){
      alert("Wklej TX hash transakcji USDC (TRC20), żebym mógł ją potwierdzić.");
      return;
    }

    // TU PODMIENIASZ NA SWÓJ MAIL – adres, na który mają wysyłać zamówienia
    const yourMail = "justapizzahead@protonmail.com";

    // budujemy tekst wiadomości – prosty, konkretny
    let text  = "Address to which you send an email:\n";
    text     += yourMail + "\n\n";
    text     += "Email subject: Order VEILBOX\n\n";
    text     += "Content (you can copy everything below and paste it into the email):\n\n";

    text += "Order VEILBOX from another dimension.\n\n";
    text += "Box level: " + levelInput + "\n";
    text += "My Email to Send Back Box: " + emailInput + "\n";
    text += "TX hash Transaction USDC (TRC20): " + txInput + "\n";

    if(noteInput){
      text += "Box note: " + noteInput + "\n";
    }else{
      text += "Box note: (brak)\n";
    }

    text += "\nIf something is unclear, please contact me in response to this email.justapizzahead@protonmail.com";

    // wstawiamy tekst do pola readonly
    const generated = document.getElementById('generatedMail');
    generated.value = text;

    // przewijamy stronę do pola, żeby było widoczne
    generated.scrollIntoView({ behavior: "smooth", block: "start" });
  });
