import React, { useState } from 'react';
import { Product, ProductListProps } from '../ProductTypes'
import { CartIcon, CloseIcon } from './IconComponents';

export const Header: React.FC<ProductListProps> = ({
    allProducts,
    setAllProducts,
    total,
    countProducts,
    setCountProducts,
    setTotal,
}) => {
    const [active, setActive] = useState<boolean>(false);

    const onDeleteProduct = (product: Product): void => {
        const results = allProducts.filter(item => item.id !== product.id);

        setTotal(total - product.price * product.quantity);
        setCountProducts(countProducts - product.quantity);
        setAllProducts(results);
    };

    const onCleanCart = (): void => {
        setAllProducts([]);
        setTotal(0);
        setCountProducts(0);
    };

    return (
        <header>
            <h1>Tienda</h1>
            <div className="container-icon">
                <div
                    className="container-cart-icon"
                    onClick={() => setActive(!active)}
                >
                    <CartIcon />
                    <div className="count-products">
                        <span id="contador-productos">{countProducts}</span>
                    </div>
                </div>

                <div
                    className={`container-cart-products ${
                        active ? '' : 'hidden-cart'
                    }`}
                >
                    {allProducts.length ? (
                        <>
                            <div className="row-product">
                                {allProducts.map(product => (
                                    <div className="cart-product" key={product.id}>
                                        <div className="info-cart-product">
                                            <span className="cantidad-producto-carrito">
                                                {product.quantity}
                                            </span>
                                            <p className="titulo-producto-carrito">
                                                {product.nameProduct}
                                            </p>
                                            <span className="precio-producto-carrito">
                                                ${product.price}
                                            </span>
                                        </div>
                                        <CloseIcon onClick={() => onDeleteProduct(product)} />
                                    </div>
                                ))}
                            </div>
                            <div className="cart-total">
                                <h3>Total:</h3>
                                <span className="total-pagar">${total}</span>
                            </div>
                            <button className="btn-clear-all" onClick={onCleanCart}>
                                Vaciar Carrito
                            </button>
                        </>
                    ) : (
                        <p className="cart-empty">El carrito está vacío</p>
                    )}
                </div>
            </div>
        </header>
    );
};
