import { data } from '../data';
import { Product, ProductListProps } from '../ProductTypes';
import DetalleProducto from '../DetalleProducto/detalleProducto';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const ProductList: React.FC<ProductListProps> = ({
    allProducts,
    setAllProducts,
    countProducts,
    setCountProducts,
    total,
    setTotal,
}) => {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    const onAddProduct = (product: Product): void => {
        if (allProducts.find(item => item.id === product.id)) {
            const products = allProducts.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
            setTotal(total + product.price * product.quantity);
            setCountProducts(countProducts + product.quantity);
            return setAllProducts([...products]);
        }

        setTotal(total + product.price);
        setCountProducts(countProducts + 1);
        setAllProducts([...allProducts, { ...product, quantity: 1 }]);
    };
    
    
    function closeProductDetail(): void {
        throw new Error('Function not implemented.');
    }

return (
    <div className='container-items'>
        {data.map(product => (
            <div className='item' key={product.id}>
                <figure>
                    <Link to={`/detalleproductos/${product.id}`}>
                        <img src={product.img} alt={product.nameProduct} />
                    </Link>
                </figure>
                <div className='info-product'>
                    <h2>{product.nameProduct}</h2>
                    <p className='price'>${product.price}</p>
                    <button onClick={() => onAddProduct(product)}>
                        Añadir al carrito
                    </button>
                </div>
            </div>
        ))}
    </div>
);
};
