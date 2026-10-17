import { faker } from '@faker-js/faker';

export function generateOrders(count) {
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    customer: faker.person.fullName(),
    product: faker.commerce.productName(),
    quantity: faker.number.int({ min: 1, max: 20 }),
    total: faker.number.float({ min: 10, max: 5000, fractionDigits: 2 }),
  }));
}
