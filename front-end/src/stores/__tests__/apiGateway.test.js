import { createPinia, setActivePinia } from 'pinia';
import { beforeEach, describe, expect, it } from 'vitest';
import { useAPIGatewayStore } from '@/stores/apiGateway'

describe('API Gateway Store', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    const expectedData =  [
        { 'id': 1, 'name': 'John' },
        { 'id': 2, 'name': 'Marry' }] 

    const route = {name:'test', path:'v1/users'}
    const badRoute = {name:'bad', path:'not/real'}
    
    it('Proper State After INIT', async () => {
        const apiGateway = useAPIGatewayStore();
        expect(apiGateway.recentResponseStatus).toBe(undefined);
        expect(apiGateway.currentData).toStrictEqual([]);
        expect(apiGateway.currentRoute).toStrictEqual({name: 'Users', path:'random-users'});
        expect(apiGateway.isLoading).toStrictEqual(false);
    });

    it('Proper State After Successful GET', async () => {
        const apiGateway = useAPIGatewayStore();
        apiGateway.setRoute(route);
        expect(apiGateway.currentRoute).toStrictEqual({name:'test', path:'v1/users'});
        await apiGateway.getData();
        expect(apiGateway.currentData).toStrictEqual(expectedData);
        expect(apiGateway.recentResponseStatus.status).toBe(200);
        expect(apiGateway.currentRoute).toStrictEqual({name:'test', path:'v1/users'});
    });

    it('Proper State After Successful POST', async () => {
        const apiGateway = useAPIGatewayStore();
        apiGateway.setRoute(route);
        expect(apiGateway.currentRoute).toStrictEqual({name:'test', path:'v1/users'});
        await apiGateway.getData();
        await apiGateway.postData({'payload':'test payload'});
        expect(apiGateway.recentResponseStatus.status).toBe(201);
    });

    it('Proper State After Failed GET', async () => {
        const apiGateway = useAPIGatewayStore();
        apiGateway.setRoute(badRoute);
        expect(apiGateway.currentRoute).toStrictEqual({name:'bad', path:'not/real'});
        await apiGateway.getData();
        expect(apiGateway.recentResponseStatus.status).toBe(404);
    });

    it('Proper State After Failed POST', async () => {
        const apiGateway = useAPIGatewayStore();
        apiGateway.setRoute(badRoute);
        expect(apiGateway.currentRoute).toStrictEqual({name:'bad', path:'not/real'});
        await apiGateway.postData({'payload':'test payload'});
        expect(apiGateway.recentResponseStatus.status).toBe(404);
    });
});