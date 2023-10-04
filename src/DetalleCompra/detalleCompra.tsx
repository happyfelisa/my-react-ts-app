import React, { useState, useEffect } from 'react';
import './detalleCompra.css';

function detalleCompra() {
  const [productos, setProductos] = useState<any[]>([]);

  useEffect(() => {
    // Carga los datos del JSON desde la carpeta public
    fetch('/datos.json')
      .then((response) => response.json())
      .then((data) => {
        setProductos(data);
      })
      .catch((error) => {
        console.error('Error al cargar los datos:', error);
      });
  }, []);

  return (
    <div className="detalleCompra">
      <div className="left-side">
        <div className="rectangle-top">
          <div className="header">
            <img src="/imagen/bolsa.png" alt="Imagen de una bolsa" className="product-image" />
            <p style={{ marginLeft: '10px', fontSize: '24px', fontWeight: 'bold', color: 'white' }}>
              Tus productos son:
            </p>
          </div>
          <ul style={{ marginLeft: '10px', color: 'white' }}>
            {productos.map((producto) => (
              <li key={producto.id}>
              <div className="product-name">
                {producto.id} {producto.nombre}
              </div>
              <div className="product-price">
                ${producto.precio.toFixed(2)}
              </div>
            </li>
            ))}
          </ul>
        </div>
        <div className="rectangle-bottom">
          <button className="button">Seguir comprando</button>
          <button className="button">Continuar con el pago</button>
        </div>
      </div>
      <div className="right-side">
        {/* Contenido para el lado derecho */}
        <h1>Lado Derecho</h1>
        <p>Este es el lado gris oscuro.</p>
      </div>
    </div>
  );
}

export default detalleCompra;
