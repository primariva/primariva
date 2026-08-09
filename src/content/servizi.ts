import type { Servizio } from './tipi';

/**
 * I sei servizi in pagina.
 * Testi approvati: linguaggio del cliente, non del settore.
 *
 * ⚠️ Sul servizio "ai" non aggiungere mai promesse di posizionamento
 * ("primo su ChatGPT", percentuali, garanzie). Non esiste una posizione
 * garantibile: si descrive il lavoro, non si promette il risultato.
 */
export const servizi: Servizio[] = [
  {
    slug: 'sito',
    titolo: 'Il tuo sito, fatto come si deve',
    descrizione:
      'Veloce, che si apre bene dal telefono, con menu e orari sempre aggiornati. Se ti serve, anche il gestionale per le prenotazioni.',
    icona: 'schermo',
  },
  {
    slug: 'social',
    titolo: 'I social, gestiti da noi',
    descrizione:
      'Pubblichiamo noi, tutti i mesi. Decidiamo cosa esce, lo pubblichiamo, rispondiamo ai messaggi. A fine mese ti diciamo cosa ha funzionato e cosa no.',
    icona: 'calendario',
  },
  {
    slug: 'contenuti',
    titolo: 'Foto e video girati da te',
    descrizione:
      'Veniamo mezza giornata nel tuo locale e usciamo con il materiale di un mese. I tuoi piatti, la tua gente, la tua spiaggia. Niente foto comprate su internet.',
    icona: 'macchina-foto',
  },
  {
    slug: 'google',
    titolo: 'Ti trovano su Google',
    descrizione:
      'Sistemiamo la scheda Google Business Profile: foto, orari, domande e risposte. E gestiamo le recensioni nel modo che la legge nuova consente.',
    icona: 'segnaposto',
  },
  {
    slug: 'ai',
    titolo: 'Ti trovano anche con l’AI',
    descrizione:
      'Sempre più turisti chiedono a ChatGPT o a Gemini dove mangiare o dove passare la giornata in spiaggia. Lavoriamo perché tra le risposte ci sia anche il tuo locale.',
    icona: 'ricerca',
    inEvidenza: true,
  },
  {
    slug: 'ads',
    titolo: 'Campagne che portano gente',
    descrizione:
      'Meta e Google Ads, impostate e seguite durante la stagione. La pubblicità la paghi direttamente tu: la nostra parte è una cifra fissa, concordata prima.',
    icona: 'megafono',
  },
];
