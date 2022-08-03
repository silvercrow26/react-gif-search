import { useState } from "react"



export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setinputValue] = useState('');

    const onInputChange = ({target}) => {
        setinputValue(target.value);
    }

    const onSubmit = (event) => {

        event.preventDefault();
        const newInputValue = inputValue.trim();

        if(newInputValue.length <= 1) return setinputValue('');
            // onNewCategory(cat => [inputValue, ...cat])
            onNewCategory(newInputValue);
            setinputValue('');
        
    }

  return (
    <form onSubmit={onSubmit}>
        <input
            type="text"
            placeholder="Buscar gif"
            value={ inputValue }
            onChange={onInputChange}
        />
    </form>
  )
}
