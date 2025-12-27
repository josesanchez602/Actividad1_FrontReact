import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from './app/components/Navbar'
import { Home } from './app/pages/Home'
import { Catalog } from './app/pages/Catalog'
import { Book_Description } from './app/pages/Book_Description'

export const AppRoutes = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/catalog' element={<Catalog />} />
                <Route path='/book_description' element={<Book_Description />} />
                <Route path='/*' element={<Navigate to="/"/>}/>
            </Routes>
        </div>
    )
}