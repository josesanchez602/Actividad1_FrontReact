import { Link } from 'react-router-dom'
import { useCart } from '../hooks/useCart.js'


export const Navbar = () => {
    const { totalItems } = useCart();
    return (
        <nav className="bg-neutral-primary fixed w-full z-20 top-0 start-0 border-b border-default">
            <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className="flex gap-4 items-center">
                    <Link to="/" className="font-bold">Home</Link>
                    <Link to="/catalog">Catálogo</Link>
                </div>
            
                <div className="flex items-center gap-2">
                    <i className="fa-solid fa-cart-shopping"></i>
                    <span className="text-sm">{totalItems}</span>
                </div>
            </div>
        </nav>

    )
}
