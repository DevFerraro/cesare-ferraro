import Form from "../components/molecules/Form";

export default function Contatti() {

    return (

        <>

        
            <section className=" mb-50">
                <div className="container mx-auto px-4 ">
                    <h2 className="text-[36px] font-bold text-left text-yellow-custom main-font py-10 mb-8">Contatti</h2>
                </div>

                {/* <!-- Layout delle colonne: Immagine e Testo --> */}
                <div className="flex flex-col lg:flex-row items-center gap-8 relative">
                    {/* <!-- Colonna Immagine --> */}
                    <div className="w-full lg:w-1/2">

                        <img src="./mezzo-busto.png" alt="Mindset" className="w-full h-auto max-h-[550px] object-contain z-50 ab" />

                    </div>

                    {/* <!-- Colonna Testo --> */}
                    <div className="w-full lg:w-1/2 flex items-center justify-between py-4 p-2 relative">
                        <div className="absolute inset-0 rounded-2xl bg-yellow max-w-3xl mt-2 mb-1.5 top-[15px] left-[18px] z-0"></div>


                       <Form></Form>



                    </div>

                </div>

                

            </section>

            

        </>
    )
}