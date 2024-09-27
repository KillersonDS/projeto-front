import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Employees from '../pages/Employees';
import Client from '../pages/Client';
import Stock from '../pages/Stock';
import Rent from '../pages/Rent';
import StartScreen from '../pages/StartScreen';

import LayoutApp from '../layout/LayoutHome';
import PrivateRoute from './privateRoute';


const Router: React.FC = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Register />} />

            <Route path="/" element={<PrivateRoute element={<StartScreen />} />} />
            <Route element={<LayoutApp />}>
                <Route path="/funcionarios" element={<PrivateRoute element={<Employees />} />} />
                <Route path="/cliente" element={<PrivateRoute element={<Client />} />} />
                <Route path="/estoque" element={<PrivateRoute element={<Stock />} />} />
                <Route path="/aluguel" element={<PrivateRoute element={<Rent />} />} />
                <Route path="/home" element={<PrivateRoute element={<Home />} />} />
            </Route>
        </Routes>
    );
};

export default Router;
