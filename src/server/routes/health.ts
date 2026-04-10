import { Router } from 'express';

const router = Router();

// CHANGED: simple health route for testing
router.get('/', (_req, res) => {
  res.status(200).json({ ok: true });
});

export default router;