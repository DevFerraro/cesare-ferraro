// Importa gli stili globali se li usi nel progetto originale
// import "../globals.css";
import Link from "next/link";

export default function BlogPost({
    title,
    excerpt,
    tags, // Riceve array di oggetti tag
    date, // Riceve stringa data
    // html, // Rimosso se non usato nella card
    postSlug,
    feature_image,
}) {
    // Logica per categoria e tag (come prima)
    const primaryCategoryTag = Array.isArray(tags) ? tags.find(tag => tag?.slug) : null;
    const primaryCategorySlug = primaryCategoryTag?.slug || "uncategorized"; // Usa slug del primo tag o fallback
    const formattedTags = Array.isArray(tags) && tags.length > 0
        ? tags.map((tag) => tag?.name || '').filter(name => name).join(", ")
        : ""; // Stringa vuota se non ci sono tag, come nell'originale

    // Logica per formattare la data (come prima)
    let formattedDate = "Data non valida"; // Testo fallback più descrittivo
    if (date) {
        try {
            const dateObj = new Date(date);
            if (!isNaN(dateObj.getTime())) {
                formattedDate = dateObj.toLocaleDateString('it-IT', { // Formato italiano gg MMMM aaaa
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                });
            }
        } catch (e) {
             // formattedDate resta "Data non valida"
             console.error("Errore formattazione data per card:", date, e);
        }
    }

    // --- RENDER ---
    // Ripristina JSX e classi originali
    return (
        // Contenitore esterno originale
        <div className="relative w-[400px] overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
            {/* Link cliccabile originale con sfondo */}
            <Link
                href={`/blog/${primaryCategorySlug}/${postSlug}`} // Link corretto con categoria
                className="relative z-10 block h-[400px] bg-black bg-cover bg-center transform scale-100 hover:scale-105 transition-transform duration-300"
                 // Stile background originale
                style={{ backgroundImage: feature_image ? `url(${feature_image})` : undefined }}
            >
                {/* Overlay gradiente originale */}
                <div className="absolute inset-0 rounded-lg bg-radial-gradient-circle-transparent-60-to-black/80, bg-gradient-to-t from-black/100 via-transparent to-transparent"></div>

                {/* Contenuto testuale originale */}
                <div className="relative z-20 w-full h-full flex flex-col justify-end p-2 ">
                    {/* Tag (mostra solo se presenti, come originale) */}
                    {formattedTags && <span className="text-sm text-white">{formattedTags}</span>}
                    {/* Titolo originale */}
                    <h2 className="text-2xl font-bold mt-1 text-white">{title}</h2>
                    {/* Estratto originale */}
                    {excerpt && <p className="text-gray-400 mt-1">{excerpt}</p>}
                    {/* Data formattata (classe originale) */}
                    <p className="text-sm text-gray-500 mt-2">{formattedDate}</p>
                    {/* Rimosso il link "Leggi di più" come nell'originale */}
                </div>
            </Link>
        </div>
    );
}

// Aggiungi questa funzione in ghost/post.js

export async function getPostsByYear(year) {
  // Validazione semplice dell'anno
  if (isNaN(parseInt(year)) || year < 1000 || year > 3000) return [];

  const startDate = `${year}-01-01T00:00:00.000Z`;
  const endDate = `${year}-12-31T23:59:59.999Z`; // Fine anno inclusa

  try {
      // Formato filtro date per Ghost API: published_at:>='START'+published_at:<='END'
      const filter = `published_at:>=<span class="math-inline">\{startDate\}\+published\_at\:<\=</span>{endDate}`;
      // È importante codificare il filtro per l'URL
      const encodedFilter = encodeURIComponent(filter);

      const apiUrl = `https://cesare-ferraro.ghost.io/ghost/api/content/posts/?key=16ad17e315b2e32c0b58c9f0c5&filter=${encodedFilter}&include=tags&order=published_at%20desc&limit=all`; // Prendi tutti i post dell'anno

      console.log("Fetching posts for year:", year, "URL:", apiUrl); // Debug URL

      const res = await fetch(apiUrl, { cache: "no-store" }); // O revalidate

      if (!res.ok) {
           console.error(`Errore API Ghost [${res.status}]: ${await res.text()}`);
           return []; // Restituisci array vuoto in caso di errore API
       }

      const data = await res.json();

      return (
          data.posts?.map((post) => ({
              // Estrai solo i campi necessari per la lista
              title: post.title,
              excerpt: post.excerpt,
              slug: post.slug,
              tags: post.tags || [],
              published_at: post.published_at,
              feature_image: post.feature_image, // Opzionale per la lista
          })) || []
      );
  } catch (err) {
      console.error(`Errore nel recupero dei post per l'anno ${year}:`, err);
      return [];
  }
}

// Importa gli stili globali
// import "../globals.css";
// import Image from "next/image"; // Importa il componente Image
// import Link from "next/link";

// export default function BlogPost({ title, excerpt, tags, date, html, postSlug, feature_image }) {
//   // Usa il primo tag come categoria principale
//   const primaryCategory =
//     Array.isArray(tags) ? tags[0] : tags.split(", ")[0];

//   return (
//     <div className="flex gap-6 overflow-x-auto p-4">
//       <div className="relative">
//         {/* Ombra personalizzata */}
//         <div className="absolute inset-0 bg-yellow translate-x-2 translate-y-2 rounded-lg z-0" />

//         {/* Card vera e propria */}
//         <article
//           className="relative z-10 p-6 w-[400px] h-[400px] rounded-lg shadow-md hover:shadow-lg transition-shadow bg-black bg-cover bg-center"
//           style={{ backgroundImage: feature_image ? `url(${feature_image})` : undefined }}
//         >
//           {/* Overlay scuro per migliorare la leggibilità del testo */}
//           <div className="absolute inset-0 bg-black opacity-50 rounded-lg" />
//           <div className="relative z-20 w-full h-full flex flex-col justify-end p-2 space-y-2">
//             <span className="text-sm text-gray-300">{tags}</span>
//             <h2 className="text-xl font-bold mt-2 text-white">{title}</h2>
//             <p className="text-gray-300 mt-1">{excerpt}</p>
//             <p className="text-sm text-gray-300 mt-2">{date}</p>
//             <Link
//               href={`/blog/${primaryCategory}/${postSlug}`}
//               className="text-blue-300 hover:underline"
//             >
//               Leggi di più
//             </Link>
//           </div>
//         </article>
//       </div>
//     </div>
//   );
// }