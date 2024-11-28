import {Button} from "@/components/ui/button.tsx";
import {Link} from "react-router-dom";
import WhyChooseUs from "@/components/whychooseus/whyChooseUs.tsx";

function roofRenovation() {

    return (
        <>
            <br/>
            <br/>
            <div className={"mt-8 max-w-7xl mx-auto"}>
                <div className="container mx-auto p-4">
                    {/* Header kép */}
                    <div className="relative">
                        <img
                            src="./img/renovation.jpg"
                            alt="Felújítás"
                            className="w-full h-64 object-cover rounded-lg"
                        />
                        <div
                            className="absolute top-4 left-4 bg-white text-black px-4 py-2 rounded shadow-lg text-lg font-bold">
                            TETŐFELÚJÍTÁS
                        </div>
                    </div>

                    {/* Cím és leírás */}
                    <div className=" mt-6">
                        <h1 className="text-3xl font-bold">Régi tetők felújítása</h1>
                        <p className="text-lg  mt-2">Garantált minőség, korrekt árakkal!</p>
                    </div>

                    <div className="mt-6  leading-relaxed">
                        <p>
                            Elöregedett háza tetőfedése? Profi tető felújításokat kinálunk, legyen szó palatetőről vagy
                            más régi tetőfedésekről. Szakmai tanácsokkal segítjük, az optimális tetőfedés
                            kiválasztásához. Ha szükséges, bontással és új tetőszerkezet építésével végezzük el a
                            teljes tetőcserét.
                        </p>
                    </div>

                    <div className=" mt-6">
                        <h1 className="text-3xl font-bold">Tetőfelújítás cserepeslemezzel.</h1>
                        <p className="text-lg  mt-2">A legjobb ár/érték arányú választás!</p>
                    </div>

                    <div className="mt-6  leading-relaxed">
                        <p>
                            A tetőfedés piacán az egyik legkedvezőbb megoldás a Lindab cserepeslemez alkalmazása.
                            Számtalan új ház tetője épül ebből az anyagból, de régi tetők felújításánál is nagy
                            népszerűségnek örvend. A cserepeslemez súlya elenyésző, így tökéletes választás
                            tetőfelújítás vagy új tetőfedés esetén. Kis súlyából és könnyű szerkezetéből
                            adódóan a cserepeslemez rendkívül ellenálló viharok során. A cserepeslemezek bevonati
                            rendszerüknek köszönhetően karbantartást sem igényelnek, és élettartamuk is hosszú,
                            várhatóan 30-40 év.
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
                                Alacsony költségű tetőfedés
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
                                A tetőszerkezetet nem kell cserélni.
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
                                A lemezek felhelyezése egyszerű.
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
                                Strapabíró, erős tető.
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
                                3-4 évtizedes élettartam.
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
                                Tetőfelújításra tökéletes.
                            </li>
                        </ul>
                    </div>

                    {/* Miért minket válasszon */}
                    <div className="mt-10">
                        <h2 className="text-2xl font-bold mb-4">Palatető felújítása akár bontás nélkül</h2>
                        <p className=" mb-6">Gyors és költséghatékony megoldás.</p>
                        <p className=" leading-relaxed">
                            Egy elöregedett, elmohásodott palatetővel a nagyobb viharoknál szinte borítékolható, hogy
                            a tetőszerkezetet nedvesség fogja érni. Amellett, hogy magát a tetőt tartó gerendákat
                            számukra káros, roncsoló, gyengítő hatású víz érheti, akár az Ön lakótere is
                            könnyedén beázhat. Beázások és az ezzel együtt járó anyagi károk okozója gyakran az
                            elhanyagolt, rossz állapotú tetőburkolat.

                            A palatetők javítása és szigetelése általában úgy történik, hogy a helyén marad a régi
                            fedőanyag, és erre kerül az új. A régi fedőanyagra különféle mintázatú bitumenes lemez
                            kerül, amely két anyag erősítése általában lángolvasztással történik. Ezzel már megadtuk a
                            jó vízelvezetés és a hőszigetelés lehetőségét is.
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
                                A felújítás, bontás nélkül történik.
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
                                3 nap alatt kész az új tető.
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
                                Nem keletkezik azbeszt hulladék.
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
                                Ha úgy dönt bontással is felújítható a tető.
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
                                A tetőszerkezetet felújítjuk, megerősítjük.
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
                                A bontott palát szekszerűen kezeljük és elszállítjuk.
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

export default roofRenovation