import { faker } from '@faker-js/faker';

export function generateCategories(count) {
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    name: faker.commerce.department(),
    description: faker.commerce.productDescription(),
    productsCount: faker.number.int({ min: 1, max: 200 }),
  }));
}
