import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Employees from '../pages/Employees';
// import StartScreen from '../pages/StartScreen';
import Client from '../pages/Client';
import Stock from '../pages/Stock';
import Rent from '../pages/Rent';

import LayoutApp from '../layout/LayoutHome';
import { useAuth } from '../context/AuthContext';

const PrivateRoute: React.FC<{ element: JSX.Element }> = ({ element }) => {
    const { isAuthenticated } = useAuth();
    const token = localStorage.getItem('access_token');

    return isAuthenticated && token ? element : <Navigate to="/login" />;
};

const Router: React.FC = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route element={<LayoutApp />}>
                <Route path="/funcionarios" element={<PrivateRoute element={<Employees />} />} />
                {/* <Route path="/comeco" element={<PrivateRoute element={<StartScreen />} />} /> */}
                <Route path="/cliente" element={<PrivateRoute element={<Client />} />} />
                <Route path="/estoque" element={<PrivateRoute element={<Stock />} />} />
                <Route path="/aluguel" element={<PrivateRoute element={<Rent />} />} />
                <Route path="/" element={<PrivateRoute element={<Home />} />} />
            </Route>
        </Routes>
    );
};

export default Router;
