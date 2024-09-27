import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-toastify';

const PrivateRoute: React.FC<{ element: JSX.Element }> = ({ element }) => {
    const { isAuthenticated } = useAuth();
    const [loading, setLoading] = useState(true);
    const [hasShownToast, setHasShownToast] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return null;
    }

    if (!isAuthenticated) {
        if (!hasShownToast) {
            toast.error("Você não tem acesso à página home.");
            setHasShownToast(true);
        }
        return <Navigate to="/login" />;
    }

    return element;
};

export default PrivateRoute;
