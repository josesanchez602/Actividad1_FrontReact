import { NavLink } from 'react-router-dom'
import { useState } from 'react';
import { useLocation } from 'react-router-dom'
import { SearchBar } from './SearchBar.jsx';
import CartButton from './CartButton'
import { useSearch } from '../context/SearchContext'; // Importa el hook
export const Navbar = () => {

    // const [searchTerm, setSearchTerm] = useState('');
    const { searchTerm, setSearchTerm } = useSearch(); // Usa el contexto global
    const location = useLocation();
    const isHome = location.pathname === '/';

    return (
        <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-500">
            <div className="max-w-7xl mx-auto p-2 flex items-center justify-between">

                <NavLink to="/catalog" className="nav-link">
                    <div className="flex items-center gap-2 cursor-pointer">
                        <i className="fa-solid fa-book" />
                        <span>Relatos de papel</span>
                    </div>
                </NavLink>

                {!isHome && (
                    <div className="flex-1 max-w-xl items-center">
                        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                       {/* // <SearchBar 
                           //searchTerm={searchTerm} 
                            //setSearchTerm={setSearchTerm} 
                            
                        /> */}
                    </div>
                )}

                <div className="flex items-center gap-6 nav__section">
                    <div className="flex items-center gap-2 cursor-pointer">
                        <i className="fa-solid fa-user"></i>
                        <span>Mi cuenta</span>
                    </div>

                    <CartButton />
                </div>

            </div>
        </nav>
    );
};

