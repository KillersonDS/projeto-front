import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import { AuthProvider } from '../context/AuthContext';

const NavigationRoutes: React.FC = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Router />
            </AuthProvider>
        </BrowserRouter>
    );
};

export default NavigationRoutes;
