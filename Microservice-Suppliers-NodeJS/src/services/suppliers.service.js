import { faker } from '@faker-js/faker';

export function generateSuppliers(count) {
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    company: faker.company.name(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    city: faker.location.city(),
  }));
}
