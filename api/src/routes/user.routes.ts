import { Router } from 'express';

const appointmentsRouter = Router();

appointmentsRouter.get('/', async (req, res) => {
  return res.json({ message: 'ok' });
});

appointmentsRouter.post('/', async (request, response) => {
  try {
    return response.send();
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default appointmentsRouter;
