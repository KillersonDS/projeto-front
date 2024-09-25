import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import {  Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Employees from '../pages/Employees';
// import Client from '../pages/Client';
// import Stock from '../pages/Stock';
// import Rent from '../pages/Rent';

import LayoutApp from '../layout/LayoutHome';
// import { useAuth } from '../context/AuthContext';

// Rota privada que verifica a autenticação antes de permitir o acesso
// const PrivateRoute: React.FC<{ element: JSX.Element }> = ({ element }) => {
//     const { isAuthenticated } = useAuth();
//     const token = localStorage.getItem('token');

//     return isAuthenticated && token ? element : <Navigate to="/login" />;
// };

const Router: React.FC = () => {
    return (
        <Routes>
            {/* Rota de login */}
            <Route path="/login" element={<Login />} />

            {/* Rota de registro */}
            <Route path="/register" element={<Register />} />

            {/* Layout principal da aplicação, que inclui as rotas protegidas */}
            <Route element={<LayoutApp />}>
                {/* Rota privada */}
                <Route path="/" element={<Home />} />
                <Route path="/employees" element={<Employees />} />
                {/* <Route path="/client" element={<Client />} /> */}
                {/* <Route path="/stock" element={<Stock />} /> */}
                {/* <Route path="/rent" element={<Rent />} /> */}
                {/* <Route path="/" element={<PrivateRoute element={<Home />} />} /> */}
            </Route>
        </Routes>
    );
};

export default Router;
