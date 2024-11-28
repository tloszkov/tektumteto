// import {Link} from "react-router-dom";
// import {Button} from "@/components/ui/button.tsx";

function Footer() {

    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Logo és rövid bemutatkozás */}
                <div className="flex flex-col items-start">
                    <div className="mb-4">
                        <img
                            src="./public/logos/roof-svgrepo-com(2).svg" // A logó képfájljának helye
                            alt="Tektum Tetőfedő"
                            className="h-12 font-bold"
                            style={{filter: "brightness(0) invert(1)"}}
                        />
                    </div>
                    <p className="text-lg">
                        Vállalkozásunk évtizedek óta szolgálja ügyfeleit, elkötelezve a
                        minőségi tetőfedés iránt. Hívjon minket bizalommal és kérjen
                        árajánlatot.
                    </p>
                </div>

                {/* Szolgáltatásaink */}
                <div>
                    <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">
                        Szolgáltatásaink
                    </h3>
                    <ul className="space-y-2">
                        <li>Új tetők építése</li>
                        <li>Régi tetők felújítása</li>
                        <li>Sérült tetők javítása</li>
                        <li>Bádogos munkák</li>
                    </ul>
                </div>

                {/* Rólunk */}
                <div>
                    <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">
                        Rólunk
                    </h3>
                    <ul className="space-y-2">
                        <li><a href="/about">Kik vagyunk?</a></li>
                        <li><a href="/contact">Kapcsolat</a></li>
                        <li><a href="/gallery">Galéria</a></li>
                        <li><a href="/">Főoldal</a></li>
                    </ul>
                </div>

                {/* Nyitvatartás */}
                <div>
                    <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">
                        Nyitvatartás:
                    </h3>
                    <ul className="space-y-2">
                        <li>
                            <span>Hétfőtől - Szombatig</span>
                            <br/>
                            <span>7:30 - 19:00</span>
                        </li>
                        <li>
                            <span>Vasárnap</span>
                            <br/>
                            <span>8:30 - 16:30</span>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer