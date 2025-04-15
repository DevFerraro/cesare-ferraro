// import GhostContentAPI from "@tryghost/content-api";

// const api = new GhostContentAPI(

//     {

//         url: ' https://cesare-ferraro.ghost.io',
//         key: '16ad17e315b2e32c0b58c9f0c5',
//         version: 'v5.0'


//     }

// )   NOn più usato perchè non supportato nella versione 15+  axios tryghost

// export async function getPosts() {
//     try {
//       const res = await fetch("https://cesare-ferraro.ghost.io/ghost/api/content/posts/?key=16ad17e315b2e32c0b58c9f0c5&limit=3&include=tags", {
//         cache: "no-store" // oppure 'force-cache' se vuoi caching
//       });
  
//       const data = await res.json();
  
//       // Verifica se ci sono post e includi le informazioni richieste (tags, title, excerpt, date)
//       return data.posts.map(post => ({
//         tags: post.tags.map(tag => tag.name).join(', '), // Unisci i tag con una virgola
//         title: post.title, // Titolo del post
//         excerpt: post.excerpt, // Excerpt del post
//         date: post.published_at // Data di pubblicazione
//       })) || [];
  
//     } catch (err) {
//       console.error("Errore fetch:", err);
//       return [];
//     }
//   }

//SINGOLO ARTICOLO
  // export async function getPosts() {
  //   try {
  //     const res = await fetch("https://cesare-ferraro.ghost.io/ghost/api/content/posts/?key=16ad17e315b2e32c0b58c9f0c5&limit=3&include=tags", {
  //       cache: "no-store"
  //     });
  
  //     const data = await res.json();
  
  //     return data.posts.map(post => ({
  //       tags: post.tags.map(tag => tag.name).join(', '),
  //       title: post.title,
  //       excerpt: post.excerpt,
  //       date: post.published_at,
  //       slug: post.slug, // 👈 AGGIUNGI QUESTO per usarlo nelle rotte dinamiche
  //       html: post.html  // 👈 se vuoi passare anche il contenuto HTML
  //     })) || [];
  
  //   } catch (err) {
  //     console.error("Errore fetch:", err);
  //     return [];
  //   }
  // }
  
  // export async function getPost(slug) {
  //   try {
  //     const res = await fetch(`https://cesare-ferraro.ghost.io/ghost/api/content/posts/slug/${slug}/?key=16ad17e315b2e32c0b58c9f0c5&include=tags`, {
  //       cache: "no-store"
  //     });
  
  //     const data = await res.json();
  //     const post = data.posts[0];
  
  //     return {
  //       title: post.title,
  //       excerpt: post.excerpt,
  //       date: post.published_at,
  //       tags: post.tags.map(tag => tag.name).join(', '),
  //       html: post.html,
  //       slug: post.slug,
  //     };
  
  //   } catch (err) {
  //     console.error("Errore fetch singolo post:", err);
  //     return null;
  //   }
  // }

// ghost/post.js - MANTIENI QUESTA VERSIONE DALLA RISPOSTA PRECEDENTE
// (Include getAllPosts, getPostsByCategory che restituisce oggetti tag, etc.)

// Funzione per ottenere TUTTI i post (o un numero maggiore per paginazione)
// ghost/post.js - MANTIENI QUESTA VERSIONE DALLA RISPOSTA PRECEDENTE
// (Include getAllPosts, getPostsByCategory che restituisce oggetti tag, etc.)

// Funzione per ottenere TUTTI i post (o un numero maggiore per paginazione)
export async function getAllPosts(limit = 100) {
  try {
      const res = await fetch(
          `https://cesareferraro.mymagic.page/ghost/api/content/posts/?key=7fe949a0682029bd4e4dc533b7&limit=${limit}&include=tags&order=published_at%20desc`,
          { cache: "no-store" }
      );
      const data = await res.json();
      return (
          data.posts?.map((post) => ({
              title: post.title,
              excerpt: post.excerpt,
              html: post.html,
              slug: post.slug,
              tags: post.tags || [],
              published_at: post.published_at,
              feature_image: post.feature_image,
          })) || []
      );
  } catch (err) {
      console.error("Errore nel recupero di tutti i post:", err);
      return [];
  }
}

// Funzione per ottenere i 3 post più recenti (opzionale, se serve specificamente)
export async function getRecentPosts() {
  try {
      const res = await fetch(
          `https://cesareferraro.mymagic.page/ghost/api/content/posts/?key=7fe949a0682029bd4e4dc533b7&limit=3&include=tags&order=published_at%20desc`,
          { cache: "no-store" }
      );
      const data = await res.json();
      return (
          data.posts?.map((post) => ({
              title: post.title,
              excerpt: post.excerpt,
              html: post.html,
              slug: post.slug,
              tags: post.tags || [],
              published_at: post.published_at,
              feature_image: post.feature_image,
          })) || []
      );
  } catch (err) {
      console.error("Errore nel recupero dei post recenti:", err);
      return [];
  }
}


// Restituisce i post filtrati per categoria (tag slug)
export async function getPostsByCategory(categorySlug, limit = 100) {
  try {
      const res = await fetch(
          `https://https://cesareferraro.mymagic.page/ghost/api/content/posts/?key=7fe949a0682029bd4e4dc533b7&filter=tag:${categorySlug}&include=tags&order=published_at%20desc&limit=${limit}`,
          { cache: "no-store" }
      );
      const data = await res.json();
      return (
          data.posts?.map((post) => ({
              title: post.title,
              excerpt: post.excerpt,
              html: post.html,
              slug: post.slug,
              tags: post.tags || [], // Restituisce oggetti tag
              published_at: post.published_at,
              feature_image: post.feature_image,
          })) || []
      );
  } catch (err) {
      console.error("Errore nel recupero dei post per categoria:", categorySlug, err);
      return [];
  }
}

// Nel file: ghost/post.js
// SOSTITUISCI la tua funzione getPostBySlug con QUESTA versione completa:

export async function getPostBySlug(postSlug, categorySlug = null) {
  console.log(`--- [getPostBySlug Chiamata V2] Slug: "${postSlug}", Categoria: "${categorySlug}" ---`); // Aggiunto V2 per chiarezza
  try {
      // Chiamata API per ottenere il post tramite lo slug
      const apiUrl = `https://cesareferraro.mymagic.page/ghost/api/content/posts/slug/${postSlug}/?key=7fe949a0682029bd4e4dc533b7&include=tags`;
      console.log(`[getPostBySlug V2] Fetching URL: ${apiUrl}`);
      const res = await fetch(apiUrl, { cache: "no-store" });

      console.log(`[getPostBySlug V2] Status risposta API per slug "${postSlug}": ${res.status}`);
      if (!res.ok) {
           const errorText = await res.text();
           console.error(`[getPostBySlug V2] Errore API [${res.status}] per slug "${postSlug}": ${errorText}`);
           return null;
       }

      const data = await res.json();
      const post = data.posts?.[0];

      console.log(`[getPostBySlug V2] Post recuperato da API per slug "${postSlug}":`, post ? `Titolo: ${post.title}` : 'Non Trovato');

      if (!post) {
           console.log(`[getPostBySlug V2] Nessun post trovato nell'API per slug: "${postSlug}"`);
           return null;
      }

      // --- Blocco Controllo Categoria ---
      // Esegui il controllo solo se categorySlug è fornito E NON è 'uncategorized'
      if (categorySlug && categorySlug.toLowerCase() !== 'uncategorized') {
          console.log(`[getPostBySlug V2] Eseguo controllo categoria: "${categorySlug}"`);
          const tagSlugs = (post.tags || []).map(tag => tag.slug?.toLowerCase()).filter(slug => slug);
          console.log(`[getPostBySlug V2] Slug dei tag del post: [${tagSlugs.join(', ')}]`);

          if (!tagSlugs.includes(categorySlug.toLowerCase())) {
              console.warn(`[getPostBySlug V2] CONTROLLO CATEGORIA FALLITO: Post "${postSlug}" trovato ma non appartiene alla categoria richiesta "${categorySlug}". Tag effettivi: [${tagSlugs.join(', ')}]`);
              return null; // Causa 404 sulla pagina articolo
          }
           console.log(`[getPostBySlug V2] CONTROLLO CATEGORIA OK per categoria: "${categorySlug}"`);
      } else {
           console.log(`[getPostBySlug V2] Controllo categoria saltato per categorySlug: "${categorySlug}"`);
      }
      // --- Fine Blocco Controllo Categoria ---

      console.log(`[getPostBySlug V2] Restituisco oggetto post per slug "${postSlug}"`);
      return { // Restituisci l'oggetto post
          title: post.title,
          excerpt: post.excerpt,
          html: post.html,
          slug: post.slug,
          tags: post.tags || [],
          published_at: post.published_at,
          feature_image: post.feature_image,
      };

  } catch (err) {
      console.error(`[getPostBySlug V2] Errore CATTURATO durante recupero post "${postSlug}":`, err);
      return null;
  }
}
  
  
  
  
  // Aggiungi questa funzione in ghost/post.js

// In ghost/post.js

export async function getPostsByYear(year) {
  console.log(`--- getPostsByYear ESEGUITA per Anno: ${year} ---`);

  // 1. Blocco di Validazione Anno
  // Controlla se l'anno NON è un numero valido o è fuori range.
  if (isNaN(parseInt(year)) || year < 1000 || year > 3000) {
      console.log(`Validazione anno fallita per: ${year}`);
      return []; // Se l'anno non è valido, esci subito restituendo array vuoto.
  }
  // Fine del blocco if. Se arriva qui, l'anno è considerato valido.

  // 2. Logica da eseguire solo per ANNI VALIDI (ora è fuori dall'if)
  console.log(`Validazione anno OK per: ${year}. Procedo con la chiamata API.`);

  // Definisci le date di inizio e fine anno in UTC
  const startDate = `${year}-01-01T00:00:00.000Z`;
  const endDate = `${year}-12-31T23:59:59.999Z`; // Inclusiva
  console.log(`Intervallo Date UTC usato per il filtro: ${startDate} -> ${endDate}`);

  // Blocco try...catch per gestire eventuali errori durante la chiamata API
  try {
      // !!! CORREZIONE CHIAVE: Costruisci il filtro usando i backtick (`) !!!
      // Questo permette di inserire le variabili startDate e endDate nel modo corretto.
      // DENTRO la funzione getPostsByYear, DOPO la definizione di startDate e endDate

// DENTRO la funzione getPostsByYear, DOPO la definizione di startDate e endDate

 // QUESTA È LA RIGA CORRETTA:
const filter = `published_at:>=${startDate}+published_at:<=${endDate}`;

      // Codifica il filtro per essere sicuro nell'URL
      const encodedFilter = encodeURIComponent(filter);

      // Costruisci l'URL completo per l'API di Ghost
      const apiUrl = `https://cesareferraro.mymagic.page/ghost/api/content/posts/?key=7fe949a0682029bd4e4dc533b7&filter=${encodedFilter}&include=tags&order=published_at%20desc&limit=all`;

      // Logga l'URL che sta per essere chiamato (utile per debug)
      console.log(`URL API Ghost chiamato (CORRETTO): ${apiUrl}`);

      // Esegui la chiamata API
      const res = await fetch(apiUrl, { cache: "no-store" }); // Usa no-store per dati sempre freschi

      // Logga lo status della risposta API
      console.log(`Status risposta API per ${year}: ${res.status}`);

      // Controlla se la risposta API NON è andata a buon fine (status non 2xx)
      if (!res.ok) {
          const errorText = await res.text(); // Leggi il messaggio di errore dall'API
          console.error(`Errore dalla API Ghost [${res.status}] per l'anno ${year}: ${errorText}`);
          return []; // Restituisci array vuoto in caso di errore API
      }

      // Se la risposta è OK (status 2xx), convertila in JSON
      const data = await res.json();

      // Logga i dati raw ricevuti (molto utile per vedere cosa restituisce l'API)
      console.log(`Dati RAW ricevuti da Ghost API per ${year}:`, JSON.stringify(data, null, 2));

      // Controlla che la risposta contenga l'array 'posts'
      if (!data || !Array.isArray(data.posts)) {
          console.warn(`La risposta API per l'anno ${year} non contiene un array 'posts' valido.`);
          return []; // Restituisci array vuoto se la struttura dati è inattesa
      }

      // Logga quanti post sono stati effettivamente ricevuti dall'API
      console.log(`Numero di post ricevuti nell'array 'data.posts' per ${year}: ${data.posts.length}`);

      // Mappa i post ricevuti nel formato desiderato (se ce ne sono)
      const mappedPosts = data.posts.map((post) => ({
          title: post.title,
          excerpt: post.excerpt,
          slug: post.slug,
          tags: post.tags || [],
          published_at: post.published_at,
          feature_image: post.feature_image,
      }));

      // Log finale prima di restituire i dati
      console.log(`Funzione terminata. Mappati ${mappedPosts.length} post per l'anno ${year}.`);
      return mappedPosts; // Restituisci l'array di post mappati (sarà vuoto se data.posts era vuoto)

  } catch (err) {
      // Gestisci eventuali errori imprevisti durante l'esecuzione del blocco try
      console.error(`Errore CATTURATO durante l'esecuzione di getPostsByYear per ${year}:`, err);
      return []; // Restituisci array vuoto in caso di eccezione
  }
  // Fine della logica per anni validi
}
  
  

// questo è il codice per la pagina del singolo post metodo tryghost che non va bene nella versione 15+
//   export async function getPost (postSlug) {
//     return await api.posts.read ({
//     slug: postSlug
//     }).catch((e) => {
//     console.error(e)
//     })
    
// export async function getPost(postSlug) {
//     const url = `https://cesare-ferraro.ghost.io/ghost/api/content/posts/slug/${slug}/?key=16ad17e315b2e32c0b58c9f0c5&include=tags,authors`;
  
//     try {
//       const res = await fetch(url);
//       if (!res.ok) {
//         throw new Error(`Errore nella fetch: ${res.status}`);
//       }
  
//       const data = await res.json();
//       return data.posts?.[0] || null; // Ritorna il singolo post
//     } catch (error) {
//       console.error("Errore nel recupero del post:", error);
//       return null;
//     }
//   }







