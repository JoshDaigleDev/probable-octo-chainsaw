import { makeGETRequest, makePOSTRequest } from '../apiService.js'; 
import { describe, expect, it } from 'vitest';

describe('API Requests', () => {
    const GOOD_ENDPOINT = 'v1/users'
    const BAD_ENDPOINT = 'some/garbage';
    const payload = {'Something':'Something'};

    it('Successful GET', async () => {
        const result = await makeGETRequest(GOOD_ENDPOINT);
        expect(result.status).toBe(200); 
    });

    it('Successful POST', async () => {
        const result = await makePOSTRequest(GOOD_ENDPOINT, payload);
        expect(result.status).toBe(201); 
    });

    it('Handle bad GET', async () => {
        await expect(makeGETRequest(BAD_ENDPOINT)).rejects.toThrow();
    });

    it('Handle bad POST', async () => {
        await expect(makePOSTRequest(BAD_ENDPOINT, payload)).rejects.toThrow();
    });
});