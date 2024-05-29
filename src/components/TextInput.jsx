import React, { useState, useContext } from 'react';
import { TextContext } from '../context/TextProvider';

function TextInput() {
    const [inputValue, setInputValue] = useState('');
    // TextContext를 사용하여 setTexts 함수 가져오기
    const { setTexts } = useContext(TextContext);

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            setTexts((prevTexts) => [...prevTexts, inputValue]);
            setInputValue('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputValue} onChange={handleChange} placeholder="Enter text" />
            <button type="submit">Add</button>
        </form>
    );
}

export default TextInput;
