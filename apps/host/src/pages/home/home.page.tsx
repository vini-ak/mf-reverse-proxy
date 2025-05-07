'use client'
import { useMemo } from "react"
import { ProductEntity } from "../../entities/product.entity";
import { ProductGenerator } from "../../utils/product-generator";
import { CardComponent } from "../../components/card/card.component";
import styles from "./home.module.css";

const NUMBER_OF_PRODUCTS = 10;

export const HomePage = () => {
    const products = useMemo<ProductEntity[]>(() => ProductGenerator.generateProducts(NUMBER_OF_PRODUCTS), []);

    const onSelectProduct = (product: ProductEntity) => {
        localStorage.setItem("product", JSON.stringify(product));
        window.location = `${window.origin}/remote/add-product` as string & Location;
    }

    return (
        <div>
            <h1>Meus produtos</h1>
            <div className={styles.grid}>
                {
                    products.map((product) => (
                        <CardComponent key={product.id} product={product} onClick={() => onSelectProduct(product)} />
                    ))
                }
            </div>
        </div>
    )
}