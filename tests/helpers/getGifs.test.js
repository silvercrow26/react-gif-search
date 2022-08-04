import { getGifs } from "../../src/helpers/getGifs"

describe('Testing a getGifs', () => { 

    test('Debe retornar un array de gifs', async() => {
        
        const gifs = await getGifs('One punch');
        // console.log(gifs);

        expect(gifs.length).toBeGreaterThan(0);

        //Evaluando el gif 0 que contenga la siguiente estructura.
        expect( gifs[0] ).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        })
    })
})