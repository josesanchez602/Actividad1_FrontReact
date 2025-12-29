import { Link } from 'react-router-dom'
import CartButton from './CartButton'

export const Navbar = () => {

    return (
        <nav className="bg-black fixed w-full z-20 top-0 start-0 border-b border-default">
            <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div>
                    <Link to='/'>Home</Link>
                </div>

                <div>
                    <Link to='/catalog'>Catálogo</Link>
                </div>

                <CartButton />
            </div>
        </nav>

    )
}
