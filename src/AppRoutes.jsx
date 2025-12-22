import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from './app/components/Navbar'
import { Home } from './app/pages/Home'

export const AppRoutes = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />

                <Route path='/*' element={<Navigate to="/"/>}/>
            </Routes>
        </div>
    )
}