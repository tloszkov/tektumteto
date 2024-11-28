import {Button} from "@/components/ui/button.tsx";
import {Link} from "react-router-dom";
import WhyChooseUs from "@/components/whychooseus/whyChooseUs.tsx";

function tinning() {

    return (
        <>
            <br/>
            <br/>
            <div className={"mt-8 max-w-7xl mx-auto"}>
                <div className="container mx-auto p-4">
                    {/* Header kép */}
                    <div className="relative">
                        <img
                            src="./img/tining.jpg"
                            alt="BÁDOGOZÁS"
                            className="w-full h-64 object-cover rounded-lg"
                        />
                        <div
                            className="absolute top-4 left-4 bg-white text-black px-4 py-2 rounded shadow-lg text-lg font-bold">
                            BÁDOGOZÁS
                        </div>
                    </div>

                    {/* Cím és leírás */}
                    <div className="mt-6">
                        <h1 className="text-3xl font-bold">Egy profi bádogost keres? Lemezes tetőfedések, ereszcsatornák
                            szerelése és más lemezes munkák, garanciával!
                        </h1>
                    </div>

                    <div className="mt-6  leading-relaxed">
                        <p>
                            A bádogos munkák kivitelezése során a következő területeken tudjuk az ön igényeit
                            kiszolgálni: lemezfedések készítése, ablakpárkányok, kémény és falszegélyek, függő és
                            fekvőeresz csatornák, lefolyók, vízgyűjtők, vápák, hattyúnyak, kiköpők, oromszegélyek,
                            ereszszegélyek, hajlatbádogok, véglemezek, szegletdíszek, tetőkibúvók, világító ablakok és
                            egyéb bádogos szerkezetek javítása, vagy új szerkezetek kialakítása, gyártása és beépítése.
                        </p>
                    </div>

                    {/* Miért minket válasszon */}
                    <div className="mt-10">
                        <h2 className="text-2xl font-bold mb-4">Cégünk több éves tapasztalattal rendelkezik az
                            ereszcsatornák építésében, javításában és tisztításában.
                        </h2>
                        <p className=" leading-relaxed">
                            Az általunk épített vagy javított ereszcsatornák anyaga lehet alumínium, műanyag,
                            horganyzott acél vagy vörösréz lemez is. Az ereszcsatorna szerelése gyorsan, akár
                            néhány nap alatt elvégezhető, így bármilyen időpont megfelel, amikor a
                            csapadék mennyisége vagy valószínűsége kisebb. Természetesen, ha várható nagyobb
                            felújítási munka, azzal együtt érdemes elvégezni az ereszcsatorna-rendszer kiépítését is.
                        </p>
                    </div>

                    <div className="mt-10">
                        <h2 className="text-2xl font-bold mb-4">Ereszcsatornák javítása, akár rövid határidővel is!</h2>
                        <p className=" leading-relaxed">
                            Az ereszcsatornák javítása pár nap alatt elvégezhető. Javítási munka megkezdése elött
                            kitisztítjuk az ereszcsatornákat, hogy az esetlegesen megbúvó hibák láthatóvá váljanak.
                            Csak ezután kezdjük el a javítási vagy felújítási munkákat. A végeredmény egy megbízhatóan
                            működő csatornarendszer lesz.
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

    export default tinning