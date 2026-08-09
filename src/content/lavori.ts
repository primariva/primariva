import type { Lavoro } from './tipi';

/**
 * I progetti mostrati in pagina.
 *
 * ⚠️ Regola inderogabile: nessun numero inventato, nessun nome di cliente
 * inventato, nessun risultato simulato. Finché `dimostrativo: true` la
 * scheda viene etichettata in pagina come modello costruito da noi.
 *
 * Quando arriverà il primo case study vero: mettere `dimostrativo: false`
 * e compilare `kpi`, dove periodo e fonte sono obbligatori per tipo.
 */
export const lavori: Lavoro[] = [
  {
    slug: 'bagno-chiosco',
    titolo: 'Stabilimento balneare con chiosco',
    tipoAttivita: 'bagno',
    comune: 'Romagna',
    dimostrativo: true,
    cosaAbbiamoFatto: [
      'Sito di una pagina con listino ombrelloni, servizi e orari',
      'Modulo di richiesta prenotazione che arriva su WhatsApp',
      'Scheda Google completa: foto della spiaggia, orari stagionali, domande frequenti',
      'Piano di dieci contenuti al mese girabili in mezza giornata',
    ],
    immagini: [],
  },
  {
    slug: 'osteria',
    titolo: 'Osteria fuori dalla costa',
    tipoAttivita: 'ristorante',
    comune: 'Entroterra romagnolo',
    dimostrativo: true,
    cosaAbbiamoFatto: [
      'Sito con il menu scritto in testo leggibile, non fotografato',
      'Prenotazione tavolo con un tocco dal telefono',
      'Scheda Google con orari diversi tra settimana e weekend',
      'Risposte pronte alle recensioni, nel tono del locale',
    ],
    immagini: [],
  },
  {
    slug: 'hotel',
    titolo: 'Hotel tre stelle sul mare',
    tipoAttivita: 'hotel',
    comune: 'Costa romagnola',
    dimostrativo: true,
    cosaAbbiamoFatto: [
      'Sito con camere, servizi e periodi, pensato per il telefono',
      'Collegamento diretto al motore di prenotazione già in uso',
      'Galleria fotografica girata in struttura',
      'Scheda Google curata e recensioni gestite',
    ],
    immagini: [],
  },
];
