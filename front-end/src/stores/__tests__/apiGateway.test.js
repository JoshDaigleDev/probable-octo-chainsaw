import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it } from "vitest";
import { useAPIGatewayStore } from '@/stores/apiGateway'

describe('API Gateway Store', () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    })

    const expectedData =  [
        {
            "age": 35,
            "name": "Josh",
        },
        {
            "age": 35,
            "name": "Josh",
        },
        {
            "age": 35,
            "name": "Josh",
        },
        {
            "age": 35,
            "name": "Josh",
        },
        {
            "age": 35,
            "name": "Josh",
        }] 

    it('Loads Data', async () =>{
        const apiGateway = useAPIGatewayStore();
        expect(apiGateway.currentData).toStrictEqual([]);
        await apiGateway.fetchData("list?prop")
        expect(apiGateway.currentData).toStrictEqual(expectedData);
    })
})