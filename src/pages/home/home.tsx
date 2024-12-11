import {Button} from "@/components/ui/button.tsx";
import WhyChooseUs from "@/components/whychooseus/whyChooseUs.tsx";

function Home() {

    return (
        <>
            <br></br>
            <br></br>
            <div className="text-base font-semibold tracking-wide uppercase text-center">
                <h1 className={"mt-4 font-bold text-2xl"}>
                    Családi házak tetőfedése, tetőfelújítása garanciával!
                </h1>
                <h3 className={"mt-4 font-bold text-xl"}>
                    Tetőfedés vagy tetőfelújítás elött áll? Kérjen árajánlatot gyorsan és egyszerűen!
                </h3>
                <Button>06 70 420 3780</Button>
            </div>

            <div className="py-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold mb-4">
                        Cégünk Szolgáltatásai
                    </h2>
                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
                        <div className="flex flex-col items-center text-left  p-6 rounded-lg shadow-md bg-gray-100">
                            <div
                                className="bg-green-700  rounded-full w-16 h-16 flex items-center justify-center mb-4">
                                <i className="fas fa-th-large"></i>
                                <img className={"w-10"} src={"./public/roof-svgrepo-com(1).svg"}
                                     alt="Tektum Tetőfedő"/>
                            </div>
                            <h4 className="font-bold text-lg text-gray-800 mb-2">Tetőfedés</h4>
                            <p className="text-gray-600 ">
                                Családi házak és ipari épületek tetőfedése, bádogos munkával.
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-left  p-6 rounded-lg shadow-md bg-gray-100">
                            <div
                                className="bg-green-700  rounded-full w-16 h-16 flex items-center justify-center mb-4">
                                <i className="fas fa-tv"></i>
                                <img className={"w-10"} src={"./public/roof-svgrepo-com(2).svg"}
                                     alt="Teto felujitas"/>
                            </div>
                            <h4 className="font-bold text-lg text-gray-800 mb-2">Tetőfelújítás</h4>
                            <p className="text-gray-600">
                                Régi tetőfedések felújítása, ács munkával, garanciával!
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-left  p-6 rounded-lg shadow-md bg-gray-100">
                            <div
                                className="bg-green-700  rounded-full w-16 h-16 flex items-center justify-center mb-4">
                                <i className="fas fa-tools"></i>
                                <img className={"w-10"} src={"./public/roof-svgrepo-com(3).svg"}
                                     alt="Teto javitas"/>
                            </div>
                            <h4 className="font-bold text-lg text-gray-800 mb-2">Tetőjavítás</h4>
                            <p className="text-gray-600">
                                Tetőjavítás, tetőbeázások, tetőszigetelések javítása!
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-left  p-6 rounded-lg shadow-md bg-gray-100">
                            <div
                                className="bg-green-700  rounded-full w-16 h-16 flex items-center justify-center mb-4">
                                <i className="fas fa-thermometer-three-quarters"></i>
                                <img className={"w-10"} src={"./public/roof-svgrepo-com(4).svg"}
                                     alt="Teto szigeteles"/>
                            </div>
                            <h4 className="font-bold text-lg text-gray-800 mb-2">Tetőszigetelés</h4>
                            <p className="text-gray-600">
                                Lapostetők és hagyományos tetők szigetelése, garanciával!
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-left  p-6 rounded-lg shadow-md bg-gray-100">
                            <div
                                className="bg-green-700 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                                <i className="fas fa-tint"></i>
                                <img className={"w-10"} src={"./public/roof-svgrepo-com.svg"} alt="Teto mosas"/>
                            </div>
                            <h4 className="font-bold text-lg text-gray-800 mb-2">Tetőmosás</h4>
                            <p className="text-gray-600">
                                Tetőmosó munkánkat a Kärcher magasnyomású géppel végezzük.
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-left  p-6 rounded-lg shadow-md bg-gray-100">
                            <div
                                className="bg-green-700 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                                <i className="fas fa-wrench"></i>
                                <img className={"w-10"} src={"./public/roof-svgrepo-com(5).svg"}
                                     alt="Teto mosas"/>
                            </div>
                            <h4 className="font-bold text-lg text-gray-800 mb-2">Bádogos Munkák</h4>
                            <p className="text-gray-600">
                                Lemezfedések készítése és más bádogos munkák.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <WhyChooseUs></WhyChooseUs>

        </>
    )
}

export default Home