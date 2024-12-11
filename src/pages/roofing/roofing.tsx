import {Link} from "react-router-dom";
import {Button} from "@/components/ui/button.tsx";
import WhyChooseUs from "@/components/whychooseus/whyChooseUs.tsx";


function Roofing() {

    return (
        <>
            <br/>
            <br/>
            <div className={"mt-8 max-w-7xl mx-auto"}>
                <div className="container mx-auto p-4">
                    {/* Header kép */}
                    <div className="relative">
                        <img
                            src="./s1.jpg"
                            alt="Tetőfedés"
                            className="w-full h-64 object-cover rounded-lg"
                        />
                        <div
                            className="absolute top-4 left-4 bg-white text-black px-4 py-2 rounded shadow-lg text-lg font-bold">
                            TETŐFEDÉS
                        </div>
                    </div>

                    {/* Cím és leírás */}
                    <div className="mt-6">
                        <h1 className="text-3xl font-bold">Családi házak tetőfedése.</h1>
                        <p className="text-lg  mt-2">Garantált minőség, korrekt árak!</p>
                    </div>

                    <div className="mt-6  leading-relaxed">
                        <p>
                            Készíttesse háza tetőfedését, előtetőit, teraszának tetőfedését velünk! Vállaljuk új és régi
                            tetők fedését, felújítását, valamint ha szükséges a tetőszerkezetek javítását is. Legyen szó
                            cserepes tetőfedésről, cseréplemezesről, trapézlemezről, zsindelyes, palatetős fedésről vagy
                            korcolt lemezfedésről – számíthat a szakértelmünkre.
                        </p>
                    </div>

                    {/* Választási lehetőségek */}
                    <div className="mt-10">
                        <h2 className="text-2xl font-bold mb-4">Milyen tetőfedéseink közül választhat?</h2>
                        <p className=" mb-6">Kiváló minőségű alapanyagok.</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            <div className="hover:shadow-lg rounded-lg overflow-hidden">
                                <img src="./roof1.jpg" alt="Cserepes tetőfedés"
                                     className="h-32 w-full object-cover"/>
                                <div className="p-4 text-center font-bold">Cserepes tetőfedés</div>
                            </div>
                            <div className="hover:shadow-lg rounded-lg overflow-hidden">
                                <img src="./roof2.jpg" alt="Cseréplemezes tetőfedés"
                                     className="h-32 w-full object-cover"/>
                                <div className="p-4 text-center font-bold">Cseréplemezes tetőfedés</div>
                            </div>
                            <div className="hover:shadow-lg rounded-lg overflow-hidden">
                                <img src="./roof3.jpg" alt="Palaszindelyes tetőfedés"
                                     className="h-32 w-full object-cover"/>
                                <div className="p-4 text-center font-bold">Palaszindelyes tetőfedés</div>
                            </div>
                            <div className="hover:shadow-lg rounded-lg overflow-hidden">
                                <img src="./roof4.jpg" alt="Bitumenes tetőfedés"
                                     className="h-32 w-full object-cover"/>
                                <div className="p-4 text-center font-bold">Bitumenes tetőfedés</div>
                            </div>
                            <div className="hover:shadow-lg rounded-lg overflow-hidden">
                                <img src="./roof5.jpg" alt="Korcolt tetőfedés"
                                     className="h-32 w-full object-cover"/>
                                <div className="p-4 text-center font-bold">Korcolt tetőfedés</div>
                            </div>
                            <div className="hover:shadow-lg rounded-lg overflow-hidden">
                                <img src="./roof6.jpg" alt="Trapézlemez tetőfedés"
                                     className="h-32 w-full object-cover"/>
                                <div className="p-4 text-center font-bold">Trapézlemez tetőfedés</div>
                            </div>
                        </div>
                    </div>

                    {/* Miért minket válasszon */}
                    <div className="mt-10">
                        <h2 className="text-2xl font-bold mb-4">Milyen tetőfedést válasszunk?</h2>
                        <p className=" mb-6">Megbízható és hosszántartó.</p>
                        <p className=" leading-relaxed">
                            A modern tetőfedő anyagok közül a betoncserép és az égetett agyagcserép
                            továbbra is a legnagyobb népszerűségnek örvendenek. A minimális tetőhajlásszög 20° - ASI
                            ajánlások szerint. A választásnál mindig vegye figyelembe a helyi időjárási viszonyokat és a
                            költségvetést.
                        </p>
                    </div>

                    <div className="mt-10">
                        <h2 className="text-2xl font-bold mb-4">Milyen tetőfedést válasszunk?</h2>
                        <p className=" mb-6">Megbízható és hosszántartó.</p>
                        <p className=" leading-relaxed">
                            A modern tetőfedő anyagok közül a betoncserép és az égetett agyagcserép
                            továbbra is a legnagyobb népszerűségnek örvendenek. A minimális tetőhajlásszög 20° - ASI
                            ajánlások szerint. A választásnál mindig vegye figyelembe a helyi időjárási viszonyokat és a
                            költségvetést.
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

export default Roofing