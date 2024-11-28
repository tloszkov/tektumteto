import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarTrigger,
} from "@/components/ui/menubar";

const Menu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') || 'light'
    );
    const [openDropdown, setOpenDropdown] = useState(false);



        useEffect(() => {
            if (theme === 'dark') {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
            localStorage.setItem('theme', theme);
        }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <div className={`fixed top-0 right-0 w-full shadow-md z-50 ${theme==='light' ? `bg-white` : 'bg-black'}   `}>
            {/* Hamburger icon for mobile */}
            <div className="flex items-center justify-between p-4 sm:hidden">
                <div className="font-bold text-lg">Tektum Tetőfedő</div>
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="p-2 border rounded-md"
                >
                    ☰
                </button>
            </div>

            {/* Menubar */}
            <Menubar
                className={`flex-col sm:flex-row sm:bg-transparent ${
                    isMenuOpen ? "flex absolute top-0 left-0 w-full h-screen z-40" : "hidden"
                } sm:flex`}
            >
                <MenubarMenu>
                    <MenubarTrigger>
                        <Link onClick={()=> setIsMenuOpen(false)} className="custom-link" to="/">Főoldal</Link>
                    </MenubarTrigger>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger onPointerDown={() => setOpenDropdown(!openDropdown)}>Szolgáltatások</MenubarTrigger>
                    <MenubarContent >
                            <MenubarItem>
                                <Link onClick={()=> {setIsMenuOpen(false); setOpenDropdown(!openDropdown)} } className="custom-link" to="/roofing">Tetőfedés</Link>
                            </MenubarItem>
                        <MenubarItem>
                            <Link onClick={()=> setIsMenuOpen(false)} className="custom-link" to="/roofRenovation">Tetőfelújítás</Link>
                        </MenubarItem>
                        <MenubarItem>
                            <Link onClick={()=> setIsMenuOpen(false)} className="custom-link" to="/roofRepair">Tetőjavítás</Link>
                        </MenubarItem>
                        <MenubarItem>
                            <Link onClick={()=> setIsMenuOpen(false)} className="custom-link" to="/carpentry">Ács munka</Link>
                        </MenubarItem>
                        <MenubarItem>
                            <Link onClick={()=> setIsMenuOpen(false)} className="custom-link" to="/tinning">Bádogozás</Link>
                        </MenubarItem>
                        <MenubarItem>
                            <Link onClick={()=> setIsMenuOpen(false)} className="custom-link" to="/roofInsulation">Tetőszigetelés</Link>
                        </MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger>
                        <Link onClick={()=> setIsMenuOpen(false)} className="custom-link" to="/about">Kik vagyunk?</Link>
                    </MenubarTrigger>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger>
                        <Link onClick={()=> setIsMenuOpen(false)} className="custom-link" to="/gallery">Galéria</Link>
                    </MenubarTrigger>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger>
                        <Link onClick={()=> setIsMenuOpen(false)} className="custom-link" to="/contact">Kapcsolat</Link>
                    </MenubarTrigger>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger>
                        <Switch onClick={toggleTheme} />
                    </MenubarTrigger>
                </MenubarMenu>
            </Menubar>
        </div>
    );
};

export default Menu;
