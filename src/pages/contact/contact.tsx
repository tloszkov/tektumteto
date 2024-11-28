import {Button} from "@/components/ui/button.tsx";
import Contactform from "@/components/contactform/contactform.tsx";

function Contact() {

    return (
        <>
            <br></br>
            <br></br>
            <div className="mt-10 text-base font-semibold tracking-wide uppercase text-center">

                <h1 className={"mt-4 font-bold text-2xl"}>
                    Elérhetőségeink és árajánlat kérés
                </h1>
                <div className={"text-center mt-4"}>
                    <Button>
                        <img
                            src="./public/logos/telephone.svg" // A logó képfájljának helye
                            alt="Tektum Tetőfedő"
                            className="h-8 font-bold"
                            style={{filter: "brightness(0) invert(1)"}}
                        />
                        06 70 420 3780
                    </Button>
                </div>
                <h3 className={"mt-4 font-bold text-xl"}>
                    Kérje ingyenes árajánlatunkat, pár órán belül válaszolunk!
                </h3>
            </div>

            <div className="py-12 ">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 rounded-lg shadow-md text-center">
                    <h3 className="text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl text-center">
                        Elérhetőségeink
                    </h3>

                    <div className="overflow-x-auto">
                        <table className="table-auto border-collapse border w-full text-left">
                            <thead>
                            <tr>
                                <th className="px-4 py-2 border">Információ</th>
                                <th className="px-4 py-2 border">Részletek</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="px-4 py-2 border">Telefon</td>
                                <td className="px-4 py-2 border">06 70 420 3780</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border">E-mail</td>
                                <td className="px-4 py-2 border">tektumteto@gmail.com</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border">Tetőfedő</td>
                                <td className="px-4 py-2 border">Gabor István e.v.</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border">Hol vállalunk tetőfedést?</td>
                                <td className="px-4 py-2 border font-bold">
                                    Budapest, Sopron, Győr, Veszprém, Pécs, Debrecen, Szombathely, Miskolc, Szeged,
                                    Székesfehérvár
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2} className="px-4 py-2 text-center text-lg border">
                                    Teljes körű tetőfedő szolgáltatás az Ön egyedi igényeinek megfelelően. Kérje
                                    ingyenes árajánlatunkat!
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className={"mt-8"}>
                    </div>
                    <Contactform></Contactform>
                </div>
            </div>


        </>
    )
}

export default Contact