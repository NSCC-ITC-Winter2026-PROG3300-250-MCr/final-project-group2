import request from 'supertest';
import { describe, expect, it } from 'vitest';
import app from '../app';

describe('GET /api/health', () => {
  it('returns 200', async () => {
    const response = await request(app).get('/api/health');

    expect(response.status).toBe(200);
  });

  it('returns JSON', async () => {
    const response = await request(app).get('/api/health');

    expect(response.headers['content-type']).toContain('application/json');
  });

  it('returns the expected body', async () => {
    const response = await request(app).get('/api/health');

    expect(response.body).toEqual({ ok: true });
  });
});