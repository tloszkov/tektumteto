import {Link} from "react-router-dom";
import WhyChooseUs from "@/components/whychooseus/whyChooseUs.tsx";
import { Speech } from "lucide-react"

function About() {


        const testimonials = [
            {
                name: "Nagy Ádám",
                company: "Kisger Kft.",
                text: "Segítőkész és gyors csapat, kiváló ár/érték arányú szolgáltatás. Profi kivitelezés! Csak ajánlani tudom őket!",
                location: "",
            },
            {
                name: "Roboz Ádám",
                company: "Pilis",
                text: "Abszolút megbízható cég, aki érti a vevői igényeket és segít megtalálni a megfelelő megoldást.",
                location: "",
            },
            {
                name: "Rácz Nikoletta",
                company: "Üröm",
                text: "Nálunk a családi ház tetőfedését és tetőfelújítását végezték a fiúk, nagyon szép munka lett, köszönjük.",
                location: "",
            },
        ];

    return (
        <>
            <br></br>
            <br></br>
            <div className="text-base font-semibold tracking-wide uppercase text-center">
                <p className={"left-3"}>
                    <br/>
                    <br/>
                    <h1 className={"text-2xl font-bold mb-2 mt-2"}>
                        Miért válasszon minket?
                    </h1>
                    <h3 className={"text-center mt-4 text-lg font-bold"}>
                        Ár garancia, kiszámíthatóság, értékállóság.
                    </h3>
                </p>

                <div className="py-12">
                    <div className="max-w-6xl mx-auto px-4">
                        {/* Title Sections */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                            <div className={"bg-gray-100 rounded-lg p-6 shadow-md text-center"}>
                                <h3 className="text-lg font-bold mb-4 text-gray-700">MIÉRT MINKET?</h3>
                                <p className="text-gray-700">
                                    Vállalkozásunk évtizedek óta szolgálja ügyfeleit, elkötelezve a{" "}
                                    <span className="font-bold">minőségi tetőfedés</span> iránt.
                                    Keményen dolgozunk annak érdekében, hogy folyamatosan biztosítsuk
                                    munkáink és szolgáltatásaink minőségét. Széleskörű tapasztalattal
                                    rendelkezünk a tetőfedésben, tetőjavításban, szigetelésben,
                                    valamint különböző bádogos munkákban.
                                </p>
                            </div>
                            <div className={"bg-gray-100 rounded-lg p-6 shadow-md text-center"}>
                                <h3 className="text-lg font-bold mb-4 text-gray-700">ÁR GARANCIA.</h3>
                                <p className="text-gray-700">
                                    A mai piac-árait, illetve kínálatát, minőségét tekintve sokszor{" "}
                                    <span className="font-bold">kiszámíthatatlan</span>. Sokszor
                                    előfordul, hogy az ember nem azt kapja végül, amire szüksége lett
                                    volna, és irreális árakat fizetett olyasmiért, ami valójában nem a
                                    megfelelő eredményt nyújtotta. Cégünk ezért minden megrendelésre{" "}
                                    <span className="font-bold">árgaranciát</span> vállal.
                                </p>
                            </div>
                            <div className={"bg-gray-100 rounded-lg p-6 shadow-md text-center"}>
                                <h3 className="text-lg font-bold mb-4 text-gray-700">TELJES KISZÁMÍTHATÓSÁG.</h3>
                                <p className="text-gray-700">
                                    Cégünknél nincs semmiféle mellébeszélés, árainkat a lehető
                                    legpontosabban egyeztetjük előre{" "}
                                    <span className="font-bold">telefonon vagy emailben</span>, ezáltal
                                    pontos képünk adódik arról, hogy Önnek mire van szüksége, és mi
                                    mennyiért tudnánk a munkát vállalni.
                                </p>
                            </div>
                        </div>

                        {/* Stats Section */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                            <div>
                                <div className="text-3xl font-bold">376+</div>
                                <p className="mt-2">TETŐFEDÉS</p>
                            </div>
                            <div>
                                <div className="text-3xl font-bold">454+</div>
                                <p className="mt-2">TETŐFELÚJÍTÁS</p>
                            </div>
                            <div>
                                <div className="text-3xl font-bold">408+</div>
                                <p className="mt-2">BÁDOGOZÁS</p>
                            </div>
                            <div>
                                <div className="text-3xl font-bold">1200+</div>
                                <p className="mt-2">ELÉGEDETT ÜGYFÉL</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" py-12">
                    <div className="max-w-6xl mx-auto px-4 text-center">
                        {/* Section Title */}
                        <h2 className="text-2xl font-bold mb-2">Mit mondanak rólunk?</h2>
                        <p className="mb-8">
                            Legyen szó akár családi házakról, akár társasházakról, mi minden lépésben
                            szeretnénk megfelelő partner lenni.
                        </p>

                        {/* Testimonials Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-100 rounded-lg p-6 shadow-md text-left"
                                >
                                    {/* Avatar */}
                                    <div
                                        className="flex flex-col items-center text-left bg-gray-100 p-6 rounded-lg shadow-md">
                                        <div
                                            className="flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full mb-4">
                                            <Speech color={"black"} size={"40px"}></Speech>
                                        </div>
                                    </div>
                                    {/* Stars */}
                                    <div className="flex justify-center mb-4">
                                    <span className="text-yellow-500">
                                      ★★★★★
                                    </span>
                                    </div>
                                    {/* Text */}
                                    <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
                                    {/* Name & Company */}
                                    <div className="font-bold text-gray-800">{testimonial.name}</div>
                                    <div className="text-sm text-gray-600">{testimonial.company}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <WhyChooseUs></WhyChooseUs>

                {/* Full Service Section */}
                <div className=" py-8 mt-12">
                    <div className="max-w-6xl mx-auto px-4 text-center">
                        <h3 className="text-2xl font-semibold mb-4">
                            Teljes körű szolgáltatások
                        </h3>
                        <p className=" mb-6">
                            Tetőfedési alapanyagok beszerzését kérés esetén díjmentesen elvégezzük vagy
                            segítjük. Bízzon szakértelmünkben és válassza az Ön számára legjobb megoldást!
                        </p>
                        <div className="flex justify-center gap-4">
                            <Link to={"/roofing"}>
                                <button
                                    className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition">
                                    Szolgáltatásaink
                                </button>
                            </Link>
                            <Link to={"/contact"}>
                                <button
                                    className="bg-gray-600 text-white px-6 py-3 rounded-md hover:bg-gray-700 transition">
                                    Kapcsolat
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default About