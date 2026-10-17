import { generateOrders } from '../services/orders.service.js';

export function getOrders(req, res) {
  const count = Number(req.params.count);

  if (!Number.isInteger(count) || count < 1 || count > 100) {
    return res.status(400).json({ message: 'La cantidad debe ser un entero entre 1 y 100' });
  }

  return res.json(generateOrders(count));
}
