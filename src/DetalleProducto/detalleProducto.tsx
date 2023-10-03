import React from 'react';
import { Product } from '../ProductTypes';

interface DetalleProductoProps {
    product: Product | null;
    onClose: () => void;
}

const DetalleProducto: React.FC<DetalleProductoProps> = ({ product, onClose }) => {
    if (!product) return null;

    return (
        <div className="modal" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <span className="close" onClick={onClose}>&times;</span>
                <img src={product.img} alt={product.nameProduct} />
                <h2>{product.nameProduct}</h2>
                <p>{product.descripcion}</p>
                <p>Puntuación: {product.puntuacion}</p>
                <p>${product.price}</p>
            </div>
        </div>
    );
};

export default DetalleProducto;
