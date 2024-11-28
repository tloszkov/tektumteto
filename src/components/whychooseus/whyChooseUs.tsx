

function whyChooseUs() {

        const benefits = [
            {
                title: "TAPASZTALAT",
                description:
                    "25 éve teljesítjük kis és nagy építési projekteket ügyfeleink számára.",
                icon: "🎓", // Használj itt egy megfelelő SVG ikont!
            },
            {
                title: "ELÉGEDETTSÉG",
                description:
                    "Minden megrendelést az ügyfél teljes megelégedésére teljesítünk.",
                icon: "👍",
            },
            {
                title: "MEGBÍZHATÓSÁG",
                description: "Munkáink során csak minőségi alapanyagokat használunk.",
                icon: "⭐",
            },
            {
                title: "MINŐSÉGI KIVITELEZÉS",
                description:
                    "20 év szakmai tapasztalat Európa számos országában.",
                icon: "✔️",
            },
            {
                title: "ÁR GARANCIA",
                description:
                    "Cégünk minden tetőfedés megrendelésre árgaranciát vállal.",
                icon: "💲",
            },
            {
                title: "KÖZVETLEN KAPCSOLAT",
                description:
                    "Közvetlen telefonos kapcsolat a kivitelezés során.",
                icon: "📞",
            },
        ];
return(
    <div>
        <div className="py-12">
            {/* Why Choose Us Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12">

                    <h2 className="text-4xl font-bold mb-4">
                        Miért válassza csapatunkat?
                    </h2>
                </div>

                {/* Benefits Grid */}
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-left  p-6 rounded-lg shadow-md bg-gray-100"
                        >
                            <div className="text-4xl mb-4">{benefit.icon}</div>
                            <h4 className="font-bold text-lg text-gray-800 mb-2">
                                {benefit.title}
                            </h4>
                            <p className="text-gray-600">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
)
}

export default whyChooseUs
