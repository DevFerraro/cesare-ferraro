export default function Business() {

    return (

        <>

            
            <section className="mb-20 ">
                <div className="container mx-auto px-4 ">
                    <h2 className="text-[36px] font-bold text-left text-yellow-custom main-font py-10 mb-8">Business</h2>
                </div>

                {/* <!-- Layout delle colonne: Immagine e Testo --> */}
                <div className="flex flex-col lg:flex-row items-center gap-8">
                    {/* <!-- Colonna Immagine --> */}
                    <div class="w-full lg:w-1/2">
                        <img src="./business.png" alt="Business" className="w-[600px] h-[600px] mx-auto object-cover" />
                    </div>

                    {/* <!-- Colonna Testo --> */}
                    <div className="w-full lg:w-1/2 flex items-center justify-between py-4 p-2 relative">
                        <div className="absolute inset-0 rounded-2xl bg-yellow max-w-3xl mt-2 mb-1.5 top-[15px] left-[18px] z-0"></div>
                        <p className="text-[19px] text-white content-font max-w-3xl text-left rounded-2xl bg-black p-5 z-10">
                            <span><h2 className="main-font text-[36px] text-yellow-custom">Business</h2></span>
                            <span><h3 className="text-[30px]">Genera clienti e mantienili nel tempo</h3></span>
            
                            <br></br>
                            <p>"Dietro ogni azienda di successo ci sono flussi ottimizzati e una strategia commerciale chiara—ma perché durino nel tempo, servono basi solide. Per questo lavoro con un approccio UX First: mettere l’utente al centro non è una scelta, è l’unico modo per creare valore reale.
                            Con Evolutria, l’agenzia di cui sono fondatore, offro servizi che uniscono efficienza, design della user experience e crescita misurabile."</p>
                            <br></br>
                            Scopri di più su Evolutria e i servizi che offriamo per aiutarti a far crescere il tuo business.
                            <br></br>
                            <div className="flex justify-end p-2">
                                <button className="bg-yellow   text-black rounded-[15px] main-font text-[20px] px-6 py-3 font-bold hover:bg-white transition">
                                    Vai su Evolutria
                                </button>
                            </div>


                        </p>



                    </div>

                </div>



            </section>

            

        </>
    )
}