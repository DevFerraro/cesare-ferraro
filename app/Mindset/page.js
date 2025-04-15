import Link from "next/link";
export default function Mindset() {

    return (
        <>



            <section className="mb-20 ">
                <div className="container mx-auto px-4 ">
                    <h2 className="text-[36px] font-bold text-left text-yellow-custom main-font py-10 mb-8">Mindset</h2>
                </div>

                {/* <!-- Layout delle colonne: Immagine e Testo --> */}
                <div className="flex flex-col lg:flex-row items-center gap-8">
                    {/* <!-- Colonna Immagine --> */}
                    <div class="w-full lg:w-1/2">
                        <img src="./mindset.png" alt="Mindset" className="w-[600px] h-[600px] mx-auto " />
                    </div>

                    {/* <!-- Colonna Testo --> */}
                    <div className="w-full lg:w-1/2 flex items-center justify-between py-4 p-2 relative">
                        <div className="absolute inset-0 rounded-2xl bg-yellow max-w-3xl mt-2 mb-1.5 top-[15px] left-[18px] z-0"></div>
                        <p className="text-[19px] text-white content-font max-w-3xl text-left rounded-2xl bg-black p-5 z-10">
                            <span><h2 className="main-font text-[36px] text-yellow-custom">Mindset</h2></span>
                            <span><h3 className="text-[30px]">Supera i limiti e raggiungi i tuoi obiettivi.</h3></span>
                            <br></br>

                            Hai mai sentito di avere un potenziale enorme ma di non riuscire a esprimerlo? Ti sei mai trovato bloccato in una situazione senza sapere come uscirne? Ci sono momenti in cui ci sentiamo bloccati, confusi o semplicemente soli con i nostri pensieri. A volte, tutto ciò di cui abbiamo bisogno è la giusta persona con cui confrontarsi, qualcuno che possa ascoltarci senza giudicare e aiutarci a vedere le cose da una prospettiva diversa.

                            <p>Grazie alla mia esperienza nell’immedesimazione e alla conoscenza dell’impostazione professionale, oggi aiuto le persone a:</p>
                            <br></br>
                            <p><i class="fa-solid fa-check text-yellow-custom"></i> Migliorare la fiducia in sé stessi per affrontare la vita con più sicurezza</p>
                            <p><i class="fa-solid fa-handshake-simple text-yellow-custom"></i> Ascoltarle davvero, perché so quanto sia importante sentirsi compresi..</p>
                            <p><i class="fa-solid fa-check text-yellow-custom"></i> Riprogrammare il loro mindset per superare blocchi e limiti autoimposti.</p>
                            <p><i class="fa-solid fa-brain text-yellow-custom"></i> Aiutarti a vedere nuove possibilità, superando dubbi e paure.</p>
                            <p><i class="fa-solid fa-check text-yellow-custom"></i> Definire obiettivi concreti e creare un piano d’azione per raggiungerli.</p>
                            <p><i class="fa-solid fa-bullseye text-yellow-custom"></i> Guidarti nel trovare la giusta direzione, senza pressioni, ma con il supporto di cui hai bisogno.</p>
                            <p><i class="fa-solid fa-check text-yellow-custom"></i> Affrontare il cambiamento con la giusta mentalità, senza paura.</p>
                            <br></br>
                            Se senti che è il momento di fare un passo avanti e vuoi scoprire se posso aiutarti, clicca qui sotto e parliamone.

                            <div className="flex justify-end p-2">
                                <Link href="/Contatti">
                                    <button className="bg-yellow text-black rounded-[15px] main-font text-[20px] px-6 py-3 font-bold hover:bg-white transition">
                                        Contattami
                                    </button>
                                </Link>
                            </div>


                        </p>



                    </div>

                </div>



            </section>






        </>
    )
}