import Menu from "../menu/menu.tsx"

function Header() {

    return (
        <>
            <div>
                <div className="flex items-center justify-between">
                    <Menu></Menu>
                </div>
            </div>
        </>
    )
}

export default Header