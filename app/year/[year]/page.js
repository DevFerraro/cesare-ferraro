// Crea questo nuovo file: app/year/[year]/page.js
import { getPostsByYear } from '@/app/ghost/post'; // Adatta il path se necessario
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Helper per ottenere lo slug della categoria primaria per i link
const getPrimaryCategorySlug = (tags) => {
    const primaryTag = Array.isArray(tags) ? tags.find(tag => tag?.slug) : null;
    return primaryTag?.slug || 'uncategorized'; // Coerente con BlogPost
};

export default async function YearPage({ params }) {
    const year = params.year;

    // Valida l'anno prima di chiamare l'API
    if (isNaN(parseInt(year))) {
        return notFound(); // Se l'URL non contiene un anno valido
    }

    const posts = await getPostsByYear(year);

    // Puoi decidere se mostrare 404 per anni senza post o una pagina vuota
    // if (!posts || posts.length === 0) {
    //     return notFound();
    // }

    return (
        // Aggiungi un layout base per la pagina
        <div className="container mx-auto px-4 py-10 mt-20 md:mt-30">
            <h1 className="text-4xl font-bold mb-8 border-b pb-4">
                Articoli pubblicati nel {year}
            </h1>

            {posts && posts.length > 0 ? (
                <div className="space-y-8">
                    {posts.map(post => {
                        const categorySlug = getPrimaryCategorySlug(post.tags);


                        const postUrl = `/blog/${categorySlug}/${post.slug}`;
                        const formattedDate = new Date(post.published_at).toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' });

                        return (
                            <article key={post.slug}>
                                <Link href={postUrl}>
                                    <h2 className="text-2xl font-semibold text-gray-800 hover:text-blue-600 transition-colors mb-2">
                                        {post.title}
                                    </h2>
                                </Link>
                                <p className="text-gray-600 mb-3">{post.excerpt}</p>
                                <div className="text-sm text-gray-500">
                                    <span>Pubblicato il: {formattedDate}</span>
                                    {/* Puoi mostrare i tag se vuoi */}
                                    {/* {post.tags && post.tags.length > 0 && (
                                        <span className="ml-4">
                                            Categorie: {post.tags.map(t => t.name).join(', ')}
                                        </span>
                                    )} */}
                                </div>
                                <Link href={postUrl} className="text-blue-500 hover:underline text-sm mt-2 inline-block">
                                    Leggi di più &rarr;
                                </Link>
                            </article>
                        );
                    })}
                </div>
            ) : (
                <p className="text-lg text-gray-600">
                    Nessun articolo trovato per l'anno {year}.
                </p>
            )}
        </div>
    );
}