export default function ChiSono () {

    return (
<>

<section className=" bg-black">
        <div className="container mx-auto ">
          <h2 id="chi-sono" className="text-[36px] font-bold text-left text-yellow-custom main-font py-10 mb-8">Chi sono</h2>
        </div>

        {/* <!-- Layout delle colonne: Immagine e Testo --> */}
        <div  className="flex flex-col lg:flex-row items-start gap-8">
          {/* <!-- Colonna Immagine --> */}
          <div className="w-full h-[100vh] lg:w-1/2">
            <img src="./profilo.png" alt="Chi sono" className="w-full h-full object-cover" />
          </div>

          {/* <!-- Colonna Testo --> */}
          <div className="w-full lg:w-1/2 flex items-start justify-between py-4 p-2">
            <p className="text-[22px] text-bianco content-font max-w-3xl text-center">
                <span><h2 id="chi-sono" className="text-[36px] max-w-3xl font-bold text-left text-yellow-custom main-font py-10 mb-8">Chi sono</h2></span>
              Chi sono oggi lo devo a chi sono stato ieri. Fin da bambino mi affascinava esplorare le emozioni e i sentimenti, capire fino in fondo cosa significasse essere nei panni di qualcun altro. Questo desiderio di comprensione mi ha portato ad avvicinarmi alla recitazione all’età di 11 anni. Il lavoro su me stesso e sull’immedesimazione mi ha fatto comprendere l’importanza nella ricerca della verità. Oggi questo è il mio obiettivo più grande: perché solo trovando la verità dentro di noi possiamo superare i nostri limiti e dare un senso autentico alla nostra esistenza.
              A 19 anni ho fatto il mio ingresso nel mondo del lavoro, non nel cinema, ma in settori come lo sviluppo commerciale, strategico e digitale. Il mio background artistico si è rivelato una risorsa preziosa, aiutandomi a raggiungere risultati importanti anche in questi ambiti.
              Oggi mi definisco una figura ibrida, capace di muoversi trasversalmente in diversi settori, per la crescita personale e quella professionale. Il mio obiettivo? Stare bene con me stesso, aiutare gli altri a fare lo stesso e fare in modo che ciascuno possa raggiungere i propri obiettivi e dare il proprio contributo per un mondo migliore.
              Dopo svariati percorsi e dopo aver aiutato diverse persone ed imprenditori, ad oggi offro 2 soluzioni "Mindset" per lo sviluppo e crescita personale e per il tuo business grazie al programma agenzia "Evolutria" io e il mio team siamo pronti per far crescere la tua impresa.
            </p> 
          </div>

        </div>
      </section>
     
      </>
    )
}