// app/blog/[category]/[postSlug]/page.js - CORRETTO
import Image from "next/image";
// Assicurati che il path dell'import sia corretto per la tua struttura
import { getPostBySlug } from "@/app/ghost/post"; // o "../../../ghost/post" etc.
import { notFound } from "next/navigation";

export default async function PostPage({ params }) {
    const { category, postSlug } = params;

    // Correggi l'ordine degli argomenti qui: (postSlug, category)
    const post = await getPostBySlug(postSlug, category);

    console.log("PostPage fetched post:", post); // Utile per debug

    if (!post) {
        console.error(`Post non trovato per slug "<span class="math-inline">\{postSlug\}" e categoria "</span>{category}"`);
        return notFound(); // Mostra 404 se il post non viene trovato o non appartiene alla categoria
    }

    return (
        <article className="flex flex-col min-h-screen items-center justify-center p-5 mb-10 mx-auto nanum-myeongjo-regular">
            {/* Mantieni il resto del tuo codice JSX originale */}
            <div className="flex-grow items-center justify-center pt-70 ">
                <div className="text-center">
                    {post.feature_image && (
                        <div className="relative flex justify-center w-full m-2 ">
                            <Image
                                src={post.feature_image}
                                alt={`Immagine in evidenza per ${post.title}`}
                                width={1000}
                                height={800}
                                objectFit="cover" // objectFit è deprecato in favore di style/className
                                style={{ objectFit: 'cover' }} // Modo più moderno
                            />
                        </div>
                    )}
                    <h1 className="text-6xl text-center m-4 ">{post.title}</h1>
                    <p className="text-3xl text-center m-2">{post.excerpt}</p>
                </div>
                <div className="text-xl md:w-[1000px] text-center m-4 " dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
        </article>
    );
}


