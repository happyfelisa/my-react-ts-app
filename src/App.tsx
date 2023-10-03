import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import { Header } from './Checkout/Heder';
import { ProductList } from './Navegacion/productList';
import { Product, ProductListProps } from './ProductTypes';
import { data} from	'./data'
import Login from './Login/Login';
import Registro from './Login/registro';
import DetalleProducto from './DetalleProducto/detalleProducto';

const App: React.FC = () => {
    const [allProducts, setAllProducts] = useState<Product[]>([]);
    const [total, setTotal] = useState<number>(0);
    const [countProducts, setCountProducts] = useState<number>(0);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };
	interface DetalleProductoProps {
		product: Product | null;
		onClose: () => void;
	}
	
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login onLoginSuccess={handleLogin} />} />
                <Route path="/registro" element={<Registro />} />
                <Route path="/" element={
                    <>
                        <Header
                            allProducts={allProducts}
                            setAllProducts={setAllProducts}
                            total={total}
                            setTotal={setTotal}
                            countProducts={countProducts}
                            setCountProducts={setCountProducts}
                        />
                        <ProductList
                            allProducts={allProducts}
                            setAllProducts={setAllProducts}
                            total={total}
                            setTotal={setTotal}
                            countProducts={countProducts}
                            setCountProducts={setCountProducts}
                        />
                    </>
                } />
                <Route path="/detalleproductos/:productId" element={<DetalleProductoComponent />} />
            </Routes>
        </Router>
    );
}

const DetalleProductoComponent: React.FC = () => {
    const { productId } = useParams();
    const product: Product | undefined = data.find(p => p.id === Number(productId));

    const handleClose = () => {
        // Implementar lógica para cerrar el modal o regresar a la página anterior
    };

    if (!product) {
        return <p>Error: Producto no encontrado</p>;
    }

    return <DetalleProducto product={product} onClose={handleClose} />;
}

export default App;
