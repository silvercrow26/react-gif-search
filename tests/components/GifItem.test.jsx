import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"


describe('Testing a GifItem', () => { 

    const title = 'Kirino'
    const url = 'https://kirino.com/kirino.jpg'


     test('Debe hacer match con el snapshot', () => { 

        const {container} = render(<GifItem url={title} title={url}/>)
        expect(container).toMatchSnapshot();

    });

    test('Debe de mostrar la imagen con el URL y el ALT indicado', () => { 

        render(<GifItem url={url} title={title}/>)
        
        //Desestructurando propiedades de img
        const {src,alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
      
        // screen.debug();
        // // console.log(screen.getByRole('img').src)
        // expect(screen.getByRole('img').src).toBe(url);
        // expect((screen.getByTestId('hola').alt)).toBe(title);
    });

    // test('Debe de mostrar el título en el componente', () => { 

    //     render(<GifItem url={url} title={title}/>)

    //     expect(screen.getByText(title)).toBeTruthy();
    // })
})