'use client'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './add-product.module.css';
import { ProductEntity } from '../entities/product.entity';

export const AddProductPage = () => {
    const [product, setProduct] = useState<ProductEntity | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Recuperar o produto do localStorage
        const storedProduct = localStorage.getItem('product');
        
        if (storedProduct) {
            try {
                const parsedProduct = JSON.parse(storedProduct);
                setProduct(parsedProduct);
            } catch (error) {
                console.error('Erro ao processar dados do produto:', error);
            }
        }
        
        setLoading(false);
    }, []);

    if (loading) {
        return (
            <div className={styles.container}>
                <div className={styles.loading}>Carregando informações do produto...</div>
            </div>
        );
    }

    if (!product) {
        return (
            <div className={styles.container}>
                <div className={styles.noProduct}>
                    <h2>Produto não encontrado</h2>
                    <p>Não foi possível encontrar as informações do produto selecionado.</p>
                    <Link to="/" className={styles.backButton}>Voltar para a página inicial</Link>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Detalhes do Produto</h1>
                <h2 className={styles.subtitle}>Visualize as informações completas do produto selecionado</h2>
            </header>

            <div className={styles.productContainer}>
                <div className={styles.productInfo}>
                    <div className={styles.productHeader}>
                        <h2 className={styles.productName}>{product.name}</h2>
                    </div>

                    {product.image && (
                        <img 
                            src={product.image} 
                            alt={product.name} 
                            className={styles.productImage} 
                        />
                    )}

                    <div className={styles.productDescription}>
                        <p>{product.description}</p>
                    </div>

                    <div className={styles.productMeta}>
                        <div className={styles.metaItem}>
                            <p className={styles.metaLabel}>Preço</p>
                            <p className={styles.metaValue}>{product.price}</p>
                        </div>

                        <div className={styles.metaItem}>
                            <p className={styles.metaLabel}>Quantidade em Estoque</p>
                            <p className={styles.metaValue}>{product.quantity}</p>
                        </div>
                    </div>

                    {product.category && (
                        <div>
                            <span className={styles.category}>{product.category}</span>
                        </div>
                    )}
                </div>

                <Link to="/" className={styles.backButton}>
                    Voltar para a página inicial
                </Link>
            </div>
        </div>
    );
};