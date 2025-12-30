import { NavLink, useLocation } from 'react-router-dom'
import  {SearchBar}  from './SearchBar.jsx'
import CartButton from './CartButton'
import { useSearch } from '../context/SearchContext'
import "../../styles/Navbar.css";


export const Navbar = () => {
    const { searchTerm, setSearchTerm } = useSearch()
    const location = useLocation()
    const isHome = location.pathname === '/'

    return (
        <nav className="navbar navbar--fixed">
            <div className="navbar__container">

                <NavLink to="/catalog" className="navbar__logo">
                    <div className="navbar__brand">
                        <i className="navbar__icon fa-solid fa-book" />
                        <span className="navbar__title">Relatos de papel</span>
                    </div>
                </NavLink>

                {!isHome && (
                    <div className="navbar__search">
                        <SearchBar
                            searchTerm={searchTerm}
                            setSearchTerm={setSearchTerm}
                        />
                    </div>
                )}

                <div className="navbar__actions">
                    <div className="navbar__account">
                        <i className="navbar__icon fa-solid fa-user"></i>
                        <span className="navbar__text">Mi cuenta</span>
                    </div>

                    <CartButton />
                </div>

            </div>
        </nav>
    )
}