import { ProductEntity } from "../../entities/product.entity";
import styles from "./card.module.css";

type CardComponentProps = {
    key: string, 
    product: ProductEntity,
    onClick?: () => void,
};
export const CardComponent = ({key, product, onClick}: CardComponentProps) => {
    return (
        <div className={styles.card} key={key} onClick={onClick}>
            <img src={product.image} alt={product.name} />
            <div className={styles.wrapper}>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <div className={styles.values}>
                    <div className={styles.priceWrapper}>
                        <p>Preço</p>
                        <p>{product.price}</p>
                    </div>
                    <div className={styles.quantityWrapper}>
                        <p>Quantidade</p>
                        <p>{product.quantity}</p>
                    </div>
                </div>
                <p className={styles.category}><span className={styles.label}>Categorias: </span>{product.category}</p>
            </div>
        </div>
    );
}