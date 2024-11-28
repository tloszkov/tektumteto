import Contactform from "@/components/contactform/contactform.tsx";
import WhyChooseUs from "@/components/whychooseus/whyChooseUs.tsx";

function Gallery() {

    const images = [
        "./img/1.jpg",
        "./img/2.jpg",
        "./img/3.jpg",
        "./img/4.jpg",
        "./img/5.jpg",
        "./img/6.jpg",
        "./img/7.jpg",
        "./img/8.jpg",
        "./img/9.jpg",
        "./img/10.jpg",
        "./img/11.jpg",
        "./img/12.jpg",
        "./img/13.jpg",
        "./img/14.jpg",
        "./img/15.jpg",
        "./img/16.jpg",
        "./img/17.jpg",
        "./img/18.jpg",

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