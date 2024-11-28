import { Link } from "react-router-dom"


function ServiceLinks() {

    return (
        <>
            <div className={"flex flex-col gap-4 items-left p-6 rounded-lg shadow-md max-w-2xl"}>
                <Link to="/services/roofing">Uj tetook epitese</Link>
                <Link to="/services/roofRenovation">Regi tetok felujitasa</Link>
                <Link to="/services/roofRenovation">Regi tetok felujitasa</Link>
                <Link to="/services/carpentry">Minosegi acs munka</Link>
                <Link to="/services/tinning">Badogos munkak</Link>
                <Link to="/services/roofInsulation">Tetoszigeteles</Link>
            </div>

        </>
    )
}

export default ServiceLinks