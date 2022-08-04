import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Pruebas en AddCategory.jsx', () => {


    test('Debe cambiar el valor de la caja de texto', () => {

        render(<AddCategory onNewCategory={() => {}}/>)
        const input = screen.getByRole('textbox');

        //Si borramos la funcion onInputChange esta prueba falla, ya que el value no cambia.      
        fireEvent.input( input, {target:{value:'saitama'}} )
        // screen.debug();
        expect(input.value).toBe('saitama');
    })


    test('debe de llamar onNewCategory si el input tiene un valor', () => {

        const inputValue = 'Kirino';
        const onNewCategory = jest.fn(); //Un mock es una simulación de una funcion
        
        render(<AddCategory onNewCategory={ onNewCategory }/>)
        
        const input = screen.getByRole('textbox');     
        const form = screen.getByRole('form');
        
        fireEvent.input(input,{target:{value: inputValue}})
        fireEvent.submit(form);
        
        expect( input.value ).toBe('');
        expect( onNewCategory ).toHaveBeenCalled(); //Comprobando que la función ha sido llamada
        expect( onNewCategory ).toHaveBeenCalledTimes(1); //Comprobando que la función se llamo una sola vez
        expect( onNewCategory ).toHaveBeenCalledWith(inputValue); //Comprobando que la función se llamó con el valor de la caja de texto
    })


    test('No debe llamar el onNewCategory si el input está vacío', () => {

        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={ onNewCategory }/>)

        const form = screen.getByRole('form');
        fireEvent.submit(form);

        expect(onNewCategory).toHaveBeenCalledTimes(0);
        // expect(onNewCategory).not.toHaveBeenCalled();

    })
})