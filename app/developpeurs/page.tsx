import "./page.css";

export default function developpeurs() {
  return (

    <div className="min-h-screen bg-(--color-bg) text-(--color-primary)">

        {/* == HEADER == */}
        <header className="flex items-center justify-between px-8 py-4 border-b border-(--color-border-bottom)">
            <a href="/" className="flex items-center gap-2 text-sm text-(--color-btn)">← Accueil</a>
            <div className="flex items-center gap-2 font-bold text-lg">
                <span className="text-(--color-gras)">●</span>
                <span>DevConnect</span>
            </div>
        </header>

        {/* == BARRE DE FILTRES == */}
        <div className="flex gap-3 px-8 py-4 border-b border-(--color-border-bottom) bg-(--color-bg-filtre)">
            <button className=" px-4 py-1.5 rounded-full border border-(--color-gras) bg-(--color-bg-btn) text-(--color-btn) text-sm font-medium cursor-pointer">Tous</button>
            <button className="px-4 py-1.5 rounded-full border border-(--color-border) text-sm font-medium text-(--color-btn) cursor-pointer">Full Stack</button>
            <button className="px-4 py-1.5 rounded-full border border-(--color-border) text-sm font-medium text-(--color-btn) cursor-pointer">Frontend</button>
            <button className="px-4 py-1.5 rounded-full border border-(--color-border) text-sm font-medium text-(--color-btn) cursor-pointer">Backend</button>
        </div>
        <main className="px-8 py-8">
            {/* == TITRE DE LA SECTION == */}
            <h2 className="text-xl font-bold mb-6">Tous les développeurs</h2>

            {/* == GRILLE DE CARDS == */}
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                {/* Une seule card en exemple, comme ça Dorcas et Nancy pourront ajouter les autres en suivant le modèle */}
                <div className="flex flex-col items-center text-center p-6 rounded-2xl border border-(--color-border) bg-(--color-bg-card) bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center text-sm font-bold mb-4 bg-(--color-bg-btn) text-(--color-gras)">BK</div>
                    {/* <img src="" 
                    alt="Photo de profil" 
                    className="w-14 h-14 object-cover rounded-full mb-4" /> */}
                    <h3 className="text-lg font-bold mb-1">BAKARY ABDOUL W.</h3>
                    <p className="text-sm text-(--color-btn) mb-3">Développeur Full Stack</p>
                    <ul className="flex flex-wrap justify-center gap-2 mb-5">
                        <li className="text-xs px-3 py-1 rounded-full border border-(--color-border-li) text-(--color-btn)">React</li>
                        <li className="text-xs px-3 py-1 rounded-full border border-(--color-border-li) text-(--color-btn)">Node.js</li>
                    </ul>
                    <a href="#" className="w-full mt-auto py-2.5 rounded-xl text-white text-sm font-semibold bg-(--color-bg-logo) text-center">Voir le portfolio</a>
                </div>

            </section>
        </main>
    </div>
  
  )
}