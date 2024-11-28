import {Button} from "@/components/ui/button.tsx";
import {Link} from "react-router-dom";
import WhyChooseUs from "@/components/whychooseus/whyChooseUs.tsx";

function carpentry() {

    return (
        <>
            <br/>
            <br/>
            <div className={"mt-8 max-w-7xl mx-auto"}>
                <div className="container mx-auto p-4">
                    {/* Header kép */}
                    <div className="relative">
                        <img
                            src="./img/carpentry.jpg"
                            alt="ÁCS MUNKA"
                            className="w-full h-64 object-cover rounded-lg"
                        />
                        <div
                            className="absolute top-4 left-4 bg-white text-black px-4 py-2 rounded shadow-lg text-lg font-bold">
                            ÁCS MUNKA
                        </div>
                    </div>

                    {/* Cím és leírás */}
                    <div className="mt-6">
                        <h1 className="text-3xl font-bold">Ács munkák kivitelezése</h1>
                        <p className="text-lg  mt-2">Akár rövid határidővel is, garanciával!</p>
                    </div>

                    <div className="mt-6  leading-relaxed">
                        <p>
                            Cégünk sokéves tapasztalattal rendelkezik az ács munkákban. Erre a szakértelemre nem
                            csak a tetőfedéseknél és tetőfelújításoknál van szükség, de egyébb kerti
                            építmények pl kocsibeállók építésénél is. Vállaljuk könnyűszerkezetes épületek, kerti
                            faépítmények, kocsibeállók, garázsok, előtetők, melléképületek és egyéb faszerkezetek
                            építését, kivitelezését az Ön igényei szerint.
                        </p>
                        <p>
                            Kérésre a faanyag beszerzését is biztosítani tudjuk. Forduljon bizalommal tapasztalt
                            szakembereinkhez legyen szó bármilyen kisebb-nagyobb ácsmunka kivitelezéséről! Kérje
                            ingyenes árajánlatunkat!
                        </p>
                    </div>

                    {/* Miért minket válasszon */}
                    <div className="mt-10">
                        <h2 className="text-2xl font-bold mb-4">Tetőfelújítás során fontos az ács munka</h2>
                        <p className=" mb-6">Tartógerndák javítása, cseréje, garanciával!</p>
                        <p className=" leading-relaxed">
                            A tetőfelújításnál sokszor a tartógerendák cseréjére vagy erősítésére van szükség, ezekben
                            a javítások sok évnyi tapasztalattal rendelkezünk, így bátran megbízhat a szaktudásunkban.
                            Az Ön igényeinek megfelelően, a lehető legrövidebb határidővel pontosan, precízen, a
                            legnagyobb szakértelemmel végezzük munkánkat!
                        </p>
                    </div>

                    <div className="mt-10">
                        <h2 className="text-2xl font-bold mb-4">Professzionális tetőmosás!</h2>
                        <p className=" mb-6">Profi javítás szakembertől.</p>
                        <p className=" leading-relaxed">
                            Tetőmosásra olyankor kerül sor, amikor az idő és az időjárási körülmények már nyomot
                            hagytak épületünk tetején. A tetőmosás során a tető vizsgálata is megtörténik,
                            biztosítva a jövőbeli állagmegóvást. Tetőmosó munkáunkat a Kärcher magasnyomású géppel
                            végezzük.
                        </p>
                    </div>

                    <div className="mt-10">
                        <h2 className="text-2xl font-bold mb-4">Miért válasszon minket?</h2>
                        <p className=" mb-6">Profi javítás szakembertől.</p>
                        <p className=" leading-relaxed">
                            Több évtizedes szakmai tapasztalattal vállaljuk családi házak, társas házak, ipari-
                            és kereskedelmi épületek, egyéb létesítmények tetőfedő, bádogos munkáit az Ön
                            elképzelései szerint, rövid határidőn belül. Fontos számunkra a profi, precíz
                            kivitelezés és Ügyfeleink elégedettsége, ezért csak kiváló minőségű alapanyagokkal
                            dolgozunk, munkáinkra garanciát biztosítunk!
                        </p>
                    </div>

                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <ul className="space-y-2">
                            <li className="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="w-5 h-5 text-green-600 mr-2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                                </svg>
                                Gyors és körültekintő felmérés.
                            </li>
                            <li className="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="w-5 h-5 text-green-600 mr-2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                                </svg>
                                Gyors és részletes árajánlat.
                            </li>
                            <li className="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="w-5 h-5 text-green-600 mr-2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                                </svg>
                                Biztos céges háttér, szerződés.
                            </li>
                            <li className="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="w-5 h-5 text-green-600 mr-2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                                </svg>
                                Minősített anyagok beszerzése.
                            </li>
                        </ul>
                        <ul className="space-y-2">
                            <li className="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="w-5 h-5 text-green-600 mr-2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                                </svg>
                                Körültekintő és tiszta munkavégzés.
                            </li>
                            <li className="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="w-5 h-5 text-green-600 mr-2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                                </svg>
                                Szakképzett munkaerő.
                            </li>
                            <li className="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="w-5 h-5 text-green-600 mr-2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                                </svg>
                                Kivitelezői felelősségbiztosítás.
                            </li>
                            <li className="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="w-5 h-5 text-green-600 mr-2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                                </svg>
                                Garancia az elkészült munkákra.
                            </li>
                        </ul>
                    </div>


                    <Button className={"mt-4 mx-auto"}>
                        <Link className="custom-link" to="/contact">Kapcsolatfelvétel</Link>
                    </Button>
                </div>
            </div>
            <WhyChooseUs></WhyChooseUs>
        </>
    )
}

export default carpentry