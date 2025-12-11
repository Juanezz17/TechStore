import { useState } from 'react';
import { IoAddCircleOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { TableProduct } from '../../components/dashboard';

export const DashboardProductsPage = () => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="h-full flex flex-col gap-4">

            {/* Buscador */}
            <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar producto..."
                className="border border-gray-300 rounded-md px-3 py-2 text-sm
                           focus:outline-none focus:ring-2 focus:ring-black w-full"
            />

            {/* Botón Nuevo Producto */}
            <Link
                to="/dashboard/productos/new"
                className="bg-black text-white flex items-center self-end py-[6px] px-2 
                           rounded-md text-sm gap-1 font-semibold"
            >
                <IoAddCircleOutline className="inline-block" />
                Nuevo Producto
            </Link>

            {/* Tabla con el parámetro de búsqueda */}
            <TableProduct searchTerm={searchTerm} />
        </div>
    );
};
