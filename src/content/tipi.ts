/**
 * Tipi dei contenuti del sito.
 * Tutto ciò che si aggiorna spesso vive in src/content/, mai nel markup.
 */

export type NomeIcona =
  | 'schermo'
  | 'calendario'
  | 'macchina-foto'
  | 'segnaposto'
  | 'ricerca'
  | 'megafono';

export type Servizio = {
  slug: string;
  titolo: string;
  descrizione: string;
  icona: NomeIcona;
  /** Riservato al servizio da spingere in un dato periodo dell'anno. */
  inEvidenza?: boolean;
};

/**
 * Un risultato ottenuto per un cliente.
 * Periodo e fonte sono obbligatori di proposito: se non sai da dove
 * viene il numero, quel numero non va sul sito.
 */
export type Kpi = {
  etichetta: string;
  valore: string;
  periodo: string;
  fonte: string;
};

export type TipoAttivita =
  | 'bagno'
  | 'ristorante'
  | 'bar'
  | 'terme'
  | 'discoteca'
  | 'agriturismo'
  | 'hotel'
  | 'altro';

export type Lavoro = {
  slug: string;
  titolo: string;
  tipoAttivita: TipoAttivita;
  comune: string;
  /** true = modello costruito da noi. Va etichettato in pagina, sempre. */
  dimostrativo: boolean;
  cosaAbbiamoFatto: string[];
  immagini: { src: string; alt: string }[];
  /** Assente finché non ci sono numeri veri, con periodo e fonte. */
  kpi?: Kpi[];
  citazioneCliente?: { testo: string; autore: string; ruolo: string };
};

export type Socio = {
  nome: string;
  ruolo: string;
  descrizione: string;
  /** Percorso del ritratto. Se assente, viene mostrato un segnaposto con le iniziali. */
  ritratto?: string;
};
