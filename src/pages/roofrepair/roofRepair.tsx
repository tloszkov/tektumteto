import {Button} from "@/components/ui/button.tsx";
import {Link} from "react-router-dom";
import WhyChooseUs from "@/components/whychooseus/whyChooseUs.tsx";

function roofRepair() {

    return (
            <>
                <br/>
                <br/>
                <div className={"mt-8 max-w-7xl mx-auto"}>
                    <div className="container mx-auto p-4">
                        {/* Header kép */}
                        <div className="relative">
                            <img
                                src="./img/repair.jpg"
                                alt="Tetőfedés"
                                className="w-full h-64 object-cover rounded-lg"
                            />
                            <div
                                className="absolute top-4 left-4 bg-white text-black px-4 py-2 rounded shadow-lg text-lg font-bold">
                                TETŐJAVÍTÁS
                            </div>
                        </div>

                        {/* Cím és leírás */}
                        <div className="mt-6">
                            <h1 className="text-3xl font-bold">Tetőjavítás, tetőbeázások javítása, tetőmosás, akár rövid határidővel.</h1>
                            <p className="text-lg  mt-2">Akár rövid határidővel is, garanciával!</p>
                        </div>

                        <div className="mt-6  leading-relaxed">
                            <p>
                                Felkészült szakembereink gyorsan megállapítják a hiba okát, rendelkeznek a megfelelő
                                anyagokkal a gyors javításhoz. Egyéb, nagyobb javítások esetén az ingyenes felmérés
                                alkalmával szakembereink tájékoztatják Önt a hiba nagyságáról, annak veszélyeiről és
                                korrekt árajánlatot adnak Önnek.
                            </p>
                        </div>

                        {/* Miért minket válasszon */}
                        <div className="mt-10">
                            <h2 className="text-2xl font-bold mb-4">Tetőbeázások javítása.</h2>
                            <p className=" mb-6">Profi javítás szakembertől.</p>
                            <p className=" leading-relaxed">
                                Abban az esetben, ha a tetőnk sérült, vagy hiányos, úgy könnyen előfordulhat, hogy
                                beázik a födém, esetlegesen a falak is, ami már visszafordíthatatlan állapot
                                romláshoz vezet. A stabil falazat, a szilárd alapzat mellett minden lakóépület egyik
                                legmeghatározóbb része a tető. Napjaink szélsőséges időjárási körülményei (heves
                                esőzések, viharok, szélviharok) megviselik a régi tetőszerkezeteket, ezért különösen
                                fontos ellenőriztetni, átvizsgáltatni azt szakemberrel, hiszen a kisebb hibák időben
                                történő kijavításával könnyedén megelőzhetőek a nagyobb károk.
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

                        <Button className={"mt-4 mx-auto"}>
                            <Link className="custom-link" to="/contact">Kapcsolatfelvétel</Link>
                        </Button>
                    </div>
                </div>
                <WhyChooseUs></WhyChooseUs>
            </>
        )
    }

            export default roofRepair