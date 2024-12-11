import {Button} from "@/components/ui/button.tsx";
import {Link} from "react-router-dom";
import WhyChooseUs from "@/components/whychooseus/whyChooseUs.tsx";


function roofInsulation() {

    return (
        <>
            <br/>
            <br/>
            <div className={"mt-8 max-w-7xl mx-auto"}>
                <div className="container mx-auto p-4">
                    {/* Header kép */}
                    <div className="relative">
                        <img
                            src="./insulating.jpg"
                            alt="Szigetelés"
                            className="w-full h-64 object-cover rounded-lg"
                        />
                        <div
                            className="absolute top-4 left-4 bg-white text-black px-4 py-2 rounded shadow-lg text-lg font-bold">
                            TETŐSZIGETELÉS
                        </div>
                    </div>

                    {/* Cím és leírás */}
                    <div className="mt-6">
                        <h1 className="text-3xl font-bold">Tetőszigetelés, országosan, garanciával!
                        </h1>
                    </div>

                    <div className="mt-6  leading-relaxed">
                        <p>
                            Cégünk rendkívül nagy szakmai tapasztalattal rendelkezik PVC tetőszigetelése területén. A
                            PVC szigetelés leginkább az új, könnyűszerkezetes lapos tetők esetében elterjedt, valamint
                            a ferde tetők esetében is kedvelt technológia, hiszen a csapadékvíz ellen a PVC
                            tetőszigetelés a legjobb választás . A gyakori szerkezeti rezgéseket remekül felveszi a PVC
                            szigetelés a könnyűszerkezetes épületek esetében, de alkalmazható már a megszokott, alacsony
                            hajlásszöggel rendelkező tetőknél is.
                        </p>
                    </div>

                    {/* Miért minket válasszon */}
                    <div className="mt-10">
                        <h2 className="text-2xl font-bold mb-4">PVC-s tetőszigetelés.</h2>
                        <p className=" leading-relaxed">
                            Az elmúlt esztendők során szerzett szakmai tapasztalatunk, az eddig elvégzett több tízezer
                            négyzetmétert lefedő szigetelési megoldásaink , valamint az ezekkel összefüggő referenciáink,
                            továbbá kvalifikált kollégáink tevékenysége szavatolja munkáink magas minőségét.
                        </p>
                    </div>

                    <div className="mt-10">
                        <h2 className="text-2xl font-bold mb-4">Bithumenes tetőszigetelés </h2>
                        <p className=" leading-relaxed">
                            A bitumenes szigetelés a legjobb vízszigetelési módszer , hiszen ez az a technológia, amelyŰ
                            a legmagasabb szinten biztosítja a vízzárást. Emellett pedig egyáltalán nem költségesebb a
                            kivitelezése , mint bármely más szigetelési módszernek.
                        </p>
                    </div>

                    <div className="mt-10">
                        <h2 className="text-2xl font-bold mb-4">Lapostető szigetelés</h2>
                        <p className=" mb-6">Profi javítás szakembertől.</p>
                        <p className=" leading-relaxed">
                            Gyakorlott szakembergárdával és sokéves tapasztalattal rendelkezünk lapostető szigetelés
                            terén , melyekhez komoly műszaki adottságokkal bíró anyagfelhasználás, modern géppark és
                            magasszintű technológia is párosul.
                        </p>
                    </div>

                    <div className="mt-10">
                        <h2 className="text-2xl font-bold mb-4">Miért válasszon minket?</h2>
                        <p className=" leading-relaxed">
                            Több évtizedes szakmai tapasztalattal vállaljuk családi házak, társas házak, ipari- és
                            kereskedelmi épületek , egyéb létesítmények tetőfedő, bádogos munkáit az Ön elképzelései
                            szerint , rövid határidőn belül. Fontos számunkra a profi, precíz kivitelezés és
                            ügyfeleink elégedettsége , ezért csak kiváló minőségű alapanyagokkal dolgozunk, munkáinkra
                            garanciát biztosítunk!
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

export default roofInsulation