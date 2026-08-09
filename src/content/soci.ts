import type { Socio } from './tipi';

/**
 * I due soci. Sostituire [Nome] con i nomi veri e aggiungere i ritratti
 * in public/ritratti/. Senza ritratto viene mostrato un segnaposto con
 * le iniziali: brutto quanto basta da ricordarvi di sostituirlo.
 */
export const soci: Socio[] = [
  {
    nome: '[Nome]',
    ruolo: 'sul territorio',
    descrizione:
      'Viene a trovarti, gira le foto e i video nel tuo locale, e resta la persona con cui parli. Se hai bisogno di qualcosa, scrivi a lui.',
  },
  {
    nome: '[Nome]',
    ruolo: 'sviluppo e strategia',
    descrizione:
      'Costruisce i siti, imposta le campagne e guarda i numeri. Lavora dietro le quinte perché tu non debba pensarci.',
  },
];
