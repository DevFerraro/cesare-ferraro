export default function Newsletter () {

    return (

<div className="flex justify-center py-2">
                    <div className="flex flex-row items-center gap-4 bg-yellow opacity-50 ">
                        <input
                            type="text"
                            placeholder="Inserisci il tuo nome"
                            className="w-full p-3 border focus:outline-none focus:ring-2 focus:ring-white"
                        />
                    </div>

                    <div className=" flex flex-row items-center gap-4 bg-yellow opacity-50">
                        <input
                            type="email"
                            placeholder="Inserisci la tua e-mail"
                            className="w-full p-3 border  focus:outline-none focus:ring-2 focus:ring-white"
                        />
                    </div>


                    <div className="flex flex-row gap-4 sm:w-auto">
                        <button className="bg-yellow text-black main-font text-[16px] px-6 py-3 font-bold hover:bg-white transition">
                            Iscriviti alla Newsletter
                        </button>


                    </div>
                </div>

    )
}