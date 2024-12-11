import Contactform from "@/components/contactform/contactform.tsx";
import WhyChooseUs from "@/components/whychooseus/whyChooseUs.tsx";

function Gallery() {

    const images = [
        "./1.jpg",
        "./2.jpg",
        "./3.jpg",
        "./4.jpg",
        "./5.jpg",
        "./6.jpg",
        "./7.jpg",
        "./8.jpg",
        "./9.jpg",
        "./10.jpg",
        "./11.jpg",
        "./12.jpg",
        "./13.jpg",
        "./14.jpg",
        "./15.jpg",
        "./16.jpg",
        "./17.jpg",
        "./18.jpg",
    ];


    return (
        <>
            <br></br>
            <br></br>
            <div className="text-base font-semibold tracking-wide uppercase">
                <div className="py-12">
                    <div className="max-w-6xl mx-auto px-4">
                        <h2 className="text-4xl font-bold mb-8">
                            Tetőfedő és bádogos munkáink
                        </h2>
                        <h4 className="text-2xl font-bold mb-8">
                            Ár garancia, kiszámíthatóság, értékállóság.
                        </h4>
                        {/* Képek Grid layout */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {images.map((image, index) => (
                                <div key={index} className="relative">
                                    <img
                                        src={image}
                                        alt={`Gallery image ${index + 1}`}
                                        className="w-full h-64 object-cover rounded-lg shadow-lg"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Contactform></Contactform>
            <WhyChooseUs></WhyChooseUs>
        </>
    )
}

export default Gallery