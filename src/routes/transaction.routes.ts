import { Router } from 'express';

import TransactionsRepository from '../repositories/TransactionsRepository';
import CreateTransactionService from '../services/CreateTransactionService';

const transactionRouter = Router();
const transactionsRepository = new TransactionsRepository();

// transactionRouter.get('/', (req, res) => {
//   try {
//     // TODO
//   } catch (err) {
//     return res.status(400).json({ error: err.message });
//   }
// });

transactionRouter.post('/', (req, res) => {
  try {
    const { title, value, type } = req.body;

    const createTransactionService = new CreateTransactionService(
      transactionsRepository,
    );

    const transaction = createTransactionService.execute({
      title,
      value,
      type,
    });

    return res.json(transaction);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

export default transactionRouter;
