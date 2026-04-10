import request from 'supertest';
import { beforeEach, describe, expect, it } from 'vitest';
import app from '../app';
import { resetTestUsers } from '../data/testUsers';

describe('Users routes', () => {
  beforeEach(() => {
    // CHANGED: reset fake users before each test
    resetTestUsers();
  });

  describe('GET /api/users', () => {
    it('returns an empty array when there are no users', async () => {
      const response = await request(app).get('/api/users');

      expect(response.status).toBe(200);
      expect(response.body).toEqual([]);
    });
  });

  describe('POST /api/users', () => {
    it('creates a user when the name is valid', async () => {
      const response = await request(app)
        .post('/api/users')
        .send({ name: 'Aaron' });

      expect(response.status).toBe(201);
      expect(response.body).toEqual({
        id: 1,
        name: 'Aaron',
      });
    });

    it('trims the user name before saving', async () => {
      const response = await request(app)
        .post('/api/users')
        .send({ name: '   Aaron   ' });

      expect(response.status).toBe(201);
      expect(response.body.name).toBe('Aaron');
    });

    it('returns 400 when name is missing', async () => {
      const response = await request(app)
        .post('/api/users')
        .send({});

      expect(response.status).toBe(400);
      expect(response.body).toEqual({
        error: 'Name is required',
      });
    });

    it('returns 400 when name is too short', async () => {
      const response = await request(app)
        .post('/api/users')
        .send({ name: 'A' });

      expect(response.status).toBe(400);
      expect(response.body).toEqual({
        error: 'Name must be at least 2 characters long',
      });
    });
  });

  describe('GET /api/users/:id', () => {
    it('returns 404 when the user does not exist', async () => {
      const response = await request(app).get('/api/users/999');

      expect(response.status).toBe(404);
      expect(response.body).toEqual({
        error: 'User not found',
      });
    });

    it('returns the created user when the id exists', async () => {
      await request(app).post('/api/users').send({ name: 'Aaron' });

      const response = await request(app).get('/api/users/1');

      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        id: 1,
        name: 'Aaron',
      });
    });
  });
});