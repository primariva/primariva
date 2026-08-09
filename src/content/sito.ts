/**
 * Configurazione del sito e dati di contatto.
 *
 * ⚠️ I valori marcati DA_COMPILARE vanno sostituiti prima della
 * pubblicazione. Finché contengono il segnaposto, il sito mostra un
 * avviso in fase di sviluppo e i link non vengono resi cliccabili.
 */
import dotenv from 'dotenv'
dotenv.config()

export const DA_COMPILARE = '[da compilare]' as const;

export const sito = {
  nome: 'Primariva',
  descrittore: 'agenzia digitale romagnola',
  dominio: 'https://altamarea.it',

  title: 'Altamarea — agenzia digitale per locali in Romagna',
  description:
    'Siti, social e contenuti girati sul posto per bagni, ristoranti, bar e hotel tra Rimini, Cesena e Ravenna. Veniamo a trovarti. Prenota una chiamata.',
  ogTitle: 'Del tuo locale online ce ne occupiamo noi',
  ogDescription:
    'Agenzia digitale romagnola. Siti, social e contenuti per le attività della costa e dell’entroterra.',
  email: 'primariva0@gmail.com',

  /** Numero in formato internazionale senza segni, per il link wa.me. */
  whatsapp: DA_COMPILARE as string,
  /** Come lo scrivi al cliente. */
  telefonoVisibile: DA_COMPILARE as string,
  /** Come lo mette il link tel:. */
  telefonoLink: DA_COMPILARE as string,

  instagram: DA_COMPILARE as string,
  facebook: DA_COMPILARE as string,

  /** Chiave pubblica Web3Forms. Si ottiene gratis su web3forms.com. */
  chiaveForm: process.env.FORM_API_KEY,

  /**
   * Footer. Altamarea è un marchio, non una società: dietro ci sono due
   * partite IVA individuali distinte. Questa formulazione va fatta
   * validare al commercialista prima della pubblicazione.
   */
  soci: [
    { nomeLegale: DA_COMPILARE as string, piva: DA_COMPILARE as string },
    { nomeLegale: DA_COMPILARE as string, piva: DA_COMPILARE as string },
  ],

  areaServita: ['Rimini', 'Forlì-Cesena', 'Ravenna'],
} as const;

/** true se il valore è ancora un segnaposto. */
export function daCompilare(valore: string): boolean {
  return valore === DA_COMPILARE;
}

export const linkWhatsapp = daCompilare(sito.whatsapp)
  ? null
  : `https://wa.me/${sito.whatsapp}`;
