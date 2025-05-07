import { faker } from '@faker-js/faker';
import { ProductEntity } from '../entities/product.entity';

export class ProductGenerator {
    public static generateProducts = (total: number): ProductEntity[] => {
        return Array.from(Array(total).keys(), (i) => {

            return {
                id: faker.string.uuid(),
                name: faker.commerce.productName(),
                price: faker.commerce.price({max: 1000, symbol: "R$"}),
                quantity: faker.number.int({min: 0, max: 100}),
                description: faker.lorem.sentence(),
                image: faker.image.url(),
                category: `Category ${i}`,
                createdAt: faker.date.recent(),
                updatedAt: faker.date.recent(),
            }
        });
    }
}