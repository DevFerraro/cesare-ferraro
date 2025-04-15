"use client";
import React, { useState, useEffect, useRef } from "react";
import BlogPost from "../components/BlogPost";
// Importa le funzioni API necessarie
import { getAllPosts, getPostsByCategory } from "../ghost/post"; // Rimosso getRecentPosts se usiamo getAllPosts per l'inizio
import Link from "next/link";

export default function BlogHome() {
    // Stato per TUTTI i post della vista corrente (filtrata o meno) usati per la paginazione
    const [articlesForPagination, setArticlesForPagination] = useState([]);
    // Stato per gli articoli da visualizzare nella pagina corrente (max 3)
    const [displayArticles, setDisplayArticles] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState(null); // null = tutti
    const [sidebarTags, setSidebarTags] = useState([]);
    const [sidebarYears, setSidebarYears] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    const containerRef = useRef(null); // Riferimento al contenitore delle card

    // Calcola articoli per pagina dinamicamente
    const articlesPerPage = isMobile ? 1 : 3;

    // --- LOGICA DATI ---

    // Effetto per caricare dati sidebar una volta e dati iniziali
    useEffect(() => {
        async function fetchInitialAndSidebarData() {
            setIsLoading(true);
            // Carica TUTTI i post per sidebar e vista iniziale 'tutti'
            const allPostsData = await getAllPosts(100); // Limite alto per dati sidebar e paginazione 'tutti'

            // Estrai tag unici per sidebar
            const uniqueSidebarTags = [];
            allPostsData.forEach((post) => {
                (post.tags || []).forEach((tag) => {
                    if (tag?.slug && !uniqueSidebarTags.some((t) => t.slug === tag.slug)) {
                        uniqueSidebarTags.push(tag);
                    }
                });
            });
            setSidebarTags(uniqueSidebarTags);

            // Estrai anni unici per sidebar (con controllo data valido)
             const uniqueSidebarYears = [
                 ...new Set(
                     allPostsData
                         .map((post) => {
                             if (!post.published_at) return null;
                             try {
                                 const dateObj = new Date(post.published_at);
                                 return !isNaN(dateObj.getTime()) ? dateObj.getFullYear() : null;
                             } catch (e) { return null; }
                         })
                         .filter(year => year !== null) // Filtra null prima di Set
                 ),
             ].sort((a, b) => b - a);
            setSidebarYears(uniqueSidebarYears);

            // Imposta i post per la paginazione iniziale (vista 'tutti')
            setArticlesForPagination(allPostsData);
            setIsLoading(false);
        }

        fetchInitialAndSidebarData();

        // Gestione resize
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);

    }, []); // Solo al mount

    // Effetto per caricare i post quando la categoria cambia
    useEffect(() => {
        // Non eseguire al primo caricamento (gestito sopra) o se la categoria non è cambiata
        if (isLoading) return; // Evita se sta già caricando inizialmente

        async function fetchCategoryData() {
            setIsLoading(true);
            setCurrentIndex(0); // Resetta indice
            let postsForCategory = [];
            if (selectedCategory) {
                postsForCategory = await getPostsByCategory(selectedCategory, 100); // Carica tutti per la categoria
            } else {
                // Se si torna a "tutti", ricarica tutti i post
                postsForCategory = await getAllPosts(100);
            }
            setArticlesForPagination(postsForCategory);
            setIsLoading(false);
        }

        fetchCategoryData();

    }, [selectedCategory]); // Esegui quando selectedCategory cambia (ma non all'inizio)

    // Effetto per aggiornare gli articoli VISUALIZZATI quando cambiano i dati o l'indice
    useEffect(() => {
        const startIndex = currentIndex;
        const endIndex = startIndex + articlesPerPage;
        setDisplayArticles(articlesForPagination.slice(startIndex, endIndex));

        // Opzionale: scroll mobile su cambio indice (se usi snap)
        if (isMobile && containerRef.current && currentIndex > 0) {
            const elementToScrollTo = containerRef.current.children[0];
             if (elementToScrollTo) {
                const scrollLeft = elementToScrollTo.offsetLeft - containerRef.current.offsetLeft;
                containerRef.current.scrollTo({ left: scrollLeft, behavior: 'smooth' });
             }
        } else if (isMobile && containerRef.current && currentIndex === 0) {
             // Scrolla all'inizio se si resetta l'indice
             containerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        }

    }, [articlesForPagination, currentIndex, articlesPerPage, isMobile]);


    // --- LOGICA PAGINAZIONE ---
    const nextArticles = () => {
        const newIndex = currentIndex + articlesPerPage;
        if (newIndex < articlesForPagination.length) {
            setCurrentIndex(newIndex);
        }
    };

    const prevArticles = () => {
        const newIndex = currentIndex - articlesPerPage;
        if (newIndex >= 0) {
            setCurrentIndex(newIndex);
        }
    };

    const isPrevDisabled = currentIndex === 0;
    const isNextDisabled = currentIndex + articlesPerPage >= articlesForPagination.length;

    // --- RENDER ---
    // Ripristina la struttura JSX e classi CSS originali
    return (
        <div className="flex flex-col min-h-screen">
            {/* Spazio iniziale vuoto come nell'originale */}
            <div className="flex flex-grow container px-4 py-10 mt-30"></div>

            {/* Titolo come nell'originale */}
            <h3 className="text-3xl main-font text-start ml-48 text-black">
                 {selectedCategory
                    ? `Articoli per: ${sidebarTags.find(t => t.slug === selectedCategory)?.name || selectedCategory}`
                    : "Articoli recenti..."}
            </h3>

            {/* Contenitore principale per frecce, card e sidebar */}
            <div className="flex items-center justify-center mt-5"> {/* Mantenuto flex items-center justify-center */}

                {/* Freccia sinistra (visibile solo desktop come originale) */}
                {!isMobile && (
                    <button
                        onClick={prevArticles}
                        // Classi originali + logica disabilitazione
                        className={`mr-4 bg-gray-800 text-white p-3 rounded-full shadow-md transition-opacity ${
                            isPrevDisabled ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-900" // Migliorato hover
                        }`}
                        disabled={isPrevDisabled}
                        aria-label="Articoli precedenti"
                    >
                        &larr; {/* Freccia sinistra */}
                    </button>
                )}

                {/* Contenitore delle card (layout originale) */}
                <div
                    ref={containerRef}
                    // Classi originali per layout card mobile/desktop
                    className={`flex ${
                        isMobile ? "overflow-x-auto snap-x snap-mandatory scroll-smooth" : "flex-wrap justify-center"
                    } gap-6 p-4 max-w-[1280px]`}
                     // Nasconde scrollbar mobile (opzionale ma comune)
                    style={{ scrollbarWidth: isMobile ? 'none' : 'auto', msOverflowStyle: isMobile ? 'none' : 'auto' }}
                >
                    {isLoading ? (
                        <div className="text-center w-full py-10">Caricamento...</div>
                    ) : displayArticles.length > 0 ? (
                        displayArticles.map((post) => (
                            <div
                                key={post.slug}
                                // Classi originali per dimensione card e snap mobile
                                className={`w-[400px] ${isMobile ? "snap-center shrink-0" : ""}`} // snap-center aggiunto per mobile
                            >
                                <BlogPost
                                    title={post.title}
                                    excerpt={post.excerpt}
                                    tags={post.tags} // Passa array oggetti tag
                                    date={post.published_at} // Passa stringa data
                                    postSlug={post.slug}
                                    feature_image={post.feature_image}
                                    // html={post.html} // Rimosso se non serve nella card
                                />
                            </div>
                        ))
                    ) : (
                        <div className="text-center w-full py-10">Nessun articolo trovato.</div>
                    )}
                </div>

                {/* Freccia destra (visibile solo desktop come originale) */}
                {!isMobile && (
                    <button
                        onClick={nextArticles}
                        // Classi originali + logica disabilitazione
                        className={`ml-4 bg-gray-800 text-white p-3 rounded-full shadow-md transition-opacity ${
                            isNextDisabled ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-900"
                        }`}
                        disabled={isNextDisabled}
                        aria-label="Articoli successivi"
                    >
                        &rarr; {/* Freccia destra */}
                    </button>
                )}

                {/* Sidebar (layout e classi originali, nascosta su mobile) */}
                <div className="hidden md:flex flex-col ml-40"> {/* ml-40 come originale */}
                     {/* Bottone "Tutti gli Articoli" */}
                     <button
                        onClick={() => setSelectedCategory(null)}
                        className={`text-left py-1 mb-2 font-semibold ${!selectedCategory ? 'text-gray-900' : 'text-blue-500 hover:underline'}`} // Stile semplice
                    >
                        Tutti gli Articoli
                    </button>

                    <h3 className="main-font text-[20px]">Categorie</h3>
                    {sidebarTags.map((tag) => (
                         // Usa bottone per azione, stilizzato come link originale
                        <button
                            key={tag.slug}
                            onClick={() => setSelectedCategory(tag.slug)}
                            // Stile originale + indicatore selezione
                            className={`text-left py-0.5 ${selectedCategory === tag.slug ? 'text-blue-700 font-medium' : 'text-blue-500 hover:underline'}`}
                        >
                            {tag?.name || "Senza nome"}
                        </button>
                    ))}
                    <h3 className="mt-5 main-font text-[20px]">Data</h3>
                    {sidebarYears.map((year) => (
                        // Link originale per gli anni
                        <Link
                            key={year}
                            href={`/year/${year}`} // Mantiene link originale
                            className="text-blue-500 hover:underline py-0.5 block"
                        >
                            {year}
                        </Link>
                    ))}
                </div>
            </div> {/* Fine flex items-center */}

            {/* Pallini di navigazione mobile (posizione originale) */}
            {isMobile && articlesForPagination.length > articlesPerPage && ( // Mostra solo se c'è da paginare
                <div className="flex justify-center mt-4 mb-8 space-x-2">
                     {/* Crea un pallino per ogni 'pagina' */}
                     {Array.from({ length: Math.ceil(articlesForPagination.length / articlesPerPage) }).map((_, pageIndex) => (
                        <button
                            key={pageIndex}
                            className={`w-3 h-3 rounded-full mx-1 transition-colors ${ // mx-1 invece di mx-2 originale
                                pageIndex === Math.floor(currentIndex / articlesPerPage) ? "bg-gray-800" : "bg-gray-300 hover:bg-gray-400"
                            }`}
                             // Cambia direttamente l'indice alla pagina corretta
                            onClick={() => setCurrentIndex(pageIndex * articlesPerPage)}
                            aria-label={`Vai alla pagina ${pageIndex + 1}`}
                        ></button>
                    ))}
                </div>
            )}

             {/* Testo Newsletter (originale) */}
             <div className="items-center text-center py-20 text-2xl">
                 In basso potrai iscriverti alla newsletter per ricevere i nostri ultimi articoli e aggiornamenti.
             </div>
        </div>
    );
}



