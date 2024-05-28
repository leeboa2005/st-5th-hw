import React from 'react';

function TextList({ texts }) {
    return (
        <ul>
            {texts.map((text, index) => (
                <li key={index}>{text}</li>
            ))}
        </ul>
    );
}

export default TextList;
