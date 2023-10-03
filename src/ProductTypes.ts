export interface Product {
    id: number;
    nameProduct: string;
    descripcion: string;
    ingredientes: string[];
    price: number;
    quantity: number;
    puntuacion: number;
    img?: string; // Opcional: Para la imagen de la hamburguesa
}
export interface ProductListProps {
    allProducts: Product[];
    setAllProducts: React.Dispatch<React.SetStateAction<Product[]>>;
    total: number;
    countProducts: number;
    setCountProducts: React.Dispatch<React.SetStateAction<number>>;
    setTotal: React.Dispatch<React.SetStateAction<number>>;
    avgPuntuacion?: number; // Opcional: Si necesitas un promedio de puntuaciones.
}
