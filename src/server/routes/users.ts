import { Router } from 'express';
import {
  createTestUser,
  getAllTestUsers,
  getTestUserById,
} from '../data/testUsers';
import { isValidUserName, normalizeUserName } from '../utils/validation';

const router = Router();

// CHANGED: get all users
router.get('/', (_req, res) => {
  const users = getAllTestUsers();
  res.status(200).json(users);
});

// CHANGED: get one user by id
router.get('/:id', (req, res) => {
  const userId = Number(req.params.id);
  const user = getTestUserById(userId);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  return res.status(200).json(user);
});

// CHANGED: create one user
router.post('/', (req, res) => {
  const rawName = req.body?.name;

  if (typeof rawName !== 'string') {
    return res.status(400).json({ error: 'Name is required' });
  }

  const normalizedName = normalizeUserName(rawName);

  if (!isValidUserName(normalizedName)) {
    return res
      .status(400)
      .json({ error: 'Name must be at least 2 characters long' });
  }

  const newUser = createTestUser(normalizedName);

  return res.status(201).json(newUser);
});

export default router;