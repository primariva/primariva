# altamarea.it

Sito di **Altamarea**, agenzia digitale romagnola. Una pagina, mobile first,
Astro 5 + TypeScript strict + Tailwind 4.

## Avviare

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
npm run preview  # controlla dist/ in locale
npm run check    # TypeScript + Astro, deve dare 0 errori
```

Serve Node 20 o superiore.

---

## ⚠️ Prima di pubblicare

Apri **`src/content/sito.ts`** e sostituisci tutti i valori `[da compilare]`.
Finché ci sono segnaposto il sito funziona lo stesso, ma:

- i link WhatsApp, telefono ed email non diventano cliccabili;
- il modulo di contatto non invia;
- nel footer compare un avviso giallo con la formulazione legale corretta.

È voluto: è meglio un avviso visibile che un sito pubblicato con un numero
di telefono finto.

Cosa serve:

| Valore | Dove si trova |
|---|---|
| `whatsapp` | Numero internazionale senza segni, es. `393331234567` |
| `telefonoVisibile` / `telefonoLink` | Come lo leggi e come lo compone il telefono |
| `email` | Casella dove arrivano i contatti |
| `chiaveForm` | Chiave pubblica gratuita da [web3forms.com](https://web3forms.com) |
| `instagram`, `facebook` | URL dei profili |
| `soci[].nomeLegale`, `soci[].piva` | Nomi e partite IVA per il footer |

Poi in **`src/content/soci.ts`** metti i vostri nomi al posto di `[Nome]` e,
se li avete, i ritratti in `public/ritratti/`.

---

## Come si modifica il contenuto

Nessun CMS, nessun database: tutto sta in file TypeScript tipizzati. Se
sbagli la forma di un dato, `npm run check` te lo dice prima di pubblicare.

**Aggiungere o cambiare un servizio** → `src/content/servizi.ts`. Aggiungi
una voce all'array. Il campo `icona` accetta solo i nomi elencati in
`tipi.ts`; per aggiungerne una nuova, mettila in `src/components/Icona.astro`
e poi nel tipo `NomeIcona`.

**Aggiungere un lavoro** → `src/content/lavori.ts`.

**Trasformare un modello dimostrativo in un case study vero:**

1. metti `dimostrativo: false` — l'etichetta «Modello dimostrativo» sparisce
   e, se nessun lavoro è più dimostrativo, cambia anche il titolo della sezione;
2. compila `kpi`, dove `periodo` e `fonte` sono **obbligatori** per tipo: il
   compilatore non ti lascia pubblicare un numero senza dire da dove viene;
3. aggiungi le immagini in `public/lavori/` e referenziale in `immagini`.

Il blocco risultati compare in pagina solo se `kpi` esiste e non è vuoto.

**Regola che il codice non può imporre da solo:** nessun numero inventato,
nessun nome di cliente inventato. Se non hai la fonte, il numero non va sul
sito.

---

## Decisioni prese, e perché

**Astro invece di Next.js.** Il visitatore tipo apre il sito dal telefono con
una connessione mediocre. Astro consegna zero JavaScript di default: la
pagina pesa circa 15 KB compressi in tutto, contro le centinaia di KB di
runtime di una SPA. E quando serviranno pagine separate per il posizionamento
locale, si aggiungono file in `src/pages/` senza riscrivere nulla.

**Tailwind 4 si configura in CSS, non in `tailwind.config.ts`.** I colori e i
font del brand sono nel blocco `@theme` di `src/styles/global.css`. È la
versione corrente di Tailwind: il file di configurazione TypeScript non serve
più.

**Font ospitati da noi** via Fontsource, non dal CDN di Google. Elimina una
richiesta esterna bloccante e evita di trasferire l'IP dei visitatori a
Google, che in Europa è un problema reale.

**Nessun analytics, nessun pixel, nessun banner cookie.** Senza cookie non
tecnici il banner non è dovuto. Se un domani servirà il pixel Meta per le
campagne, allora servirà anche il banner conforme alle Linee guida del
Garante del 10 giugno 2021, e la cookie policy va aggiornata prima.

**Il footer non presenta Altamarea come una società.** È un marchio dietro cui
operano due partite IVA individuali distinte. La formulazione va fatta
validare dal commercialista prima di pubblicare.

---

## Da sostituire, sono ancora segnaposto

- **Il logo** in `src/components/Logo.astro` e `public/favicon.svg`: oggi è un
  orizzonte con un'onda, serve solo a tenere le proporzioni. Il logo vero esce
  dal prompt in `02-brand/prompt-logo-altamarea.md`.
- **Le immagini dei lavori**: al loro posto c'è un riquadro color sabbia.
  Mettile in `public/lavori/` e collegale in `lavori.ts`.
- **I ritratti dei soci**: senza, compare un cerchio con le iniziali.
- **`public/og.png`**: immagine 1200 × 630 per le anteprime social. Non esiste
  ancora.
- **Le due pagine legali**: la struttura è corretta ma i campi tra parentesi
  quadre vanno compilati, e il punto sulla contitolarità ex art. 26 GDPR va
  risolto con un consulente prima che il modulo vada online.

---

## Pubblicare

Cloudflare Pages o Netlify, piano gratuito. Comando di build `npm run build`,
cartella di output `dist`. Collega il repository e il deploy è automatico a
ogni push.

Prima di considerarlo finito: Lighthouse in modalità mobile con throttling 4G,
`npm run check` a zero errori, e una prova vera su iPhone e su Android — non
solo nel simulatore del browser.
