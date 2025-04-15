export default function Form () {

    return (
    
        <form className=" w-full text-[19px] text-white content-font max-w-3xl text-left rounded-2xl bg-black p-5 z-10">
                                <div className="mb-4">
                                    <input
                                        type="text"
                                        placeholder="Inserisci il tuo nome"
                                        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
                                        required
                                    />
                                </div>
    
                                <div className="mb-4">
                                    <input
                                        type="text"
                                        placeholder="Inserisci il tuo cognome"
                                        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
                                        required
                                    />
                                </div>
    
                                <div className="mb-4">
                                    <input
                                        type="Inserisci la tua e-mail"
                                        placeholder="E-mail"
                                        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
                                        required
                                    />
                                </div>
    
                                <div className="mb-4">
                                    <input
                                        type="Inserisci il tuo numero di cellulare"
                                        placeholder="Cellulare"
                                        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
                                        required
                                    />
                                </div>
    
                                <div className="mb-4">
                                    <textarea
                                        placeholder="Inserisci la tua richiesta"
                                        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
                                        rows="4"
                                    ></textarea>
    
                                    {/* Checkbox: Informativa sulla Privacy */}
                                    <div className="mb-4 flex items-start">
                                        <input
                                            type="checkbox"
                                            id="privacyPolicy"
                                            className="mr-2 mt-1"
                                            required
                                        />
                                        <label htmlFor="privacyPolicy" className="text-white text-sm content-font">
                                            Ho preso visione dell'
                                            <a href="/informativa-privacy" target="_blank" className="text-yellow-300 underline content-font">
                                                Informativa sul trattamento dei dati personali
                                            </a>
                                        </label>
                                    </div>
    
                                    {/* Checkbox: Consenso per finalità commerciali */}
                                    <div className="mb-4 flex items-start">
                                        <input
                                            type="checkbox"
                                            id="commercialConsent"
                                            className="mr-2 mt-1"
                                            required
                                        />
                                        <label htmlFor="commercialConsent" className="text-white text-sm">
                                            Presto il mio consenso all'utilizzo dei dati personali per le finalità di cui al punto 2 del par. 3
                                            dell'Informativa - "<span className="content-font">Utilizzo dei dati di contatto per finalità commerciali e informative rivolte a utenti di dibenedetti.com</span>"
                                        </label>
                                    </div>
    
    
                                </div>
    
                                <div className="flex justify-end p-2">
                                    <button
                                        type="submit"
                                        className=" w-[10rem] bg-yellow   text-black rounded-[15px] main-font text-[20px] px-6 py-3 font-bold hover:bg-white transition"
                                    >
                                        Invia
                                    </button>
                                </div>
                            </form>
    )
    
    }