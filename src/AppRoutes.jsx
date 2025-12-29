import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from './app/components/Navbar'
import { Home } from './app/pages/Home'
import { Checkout } from './app/pages/Checkout'
import { Catalog } from './app/pages/Catalog'
import { BookDetail } from './app/pages/BookView'

export const AppRoutes = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/checkout' element={<Checkout />} />

                <Route path='/*' element={<Navigate to="/checkout"/>}/>
                <Route path='/catalog' element={<Catalog />} />
                <Route path="/books/:id" element={<BookDetail />} />
                <Route path='/*' element={<Navigate to="/"/>}/>
            </Routes>
        </div>
    )
}