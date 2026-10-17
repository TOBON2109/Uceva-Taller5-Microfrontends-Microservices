import { generateSuppliers } from '../services/suppliers.service.js';

export function getSuppliers(req, res) {
  const count = Number(req.params.count);

  if (!Number.isInteger(count) || count < 1 || count > 100) {
    return res.status(400).json({ message: 'La cantidad debe ser un entero entre 1 y 100' });
  }

  return res.json(generateSuppliers(count));
}
