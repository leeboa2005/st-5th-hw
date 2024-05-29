import React, { useContext } from 'react';
import { TextContext } from '../context/TextProvider';

export default function TextList() {
    // TextContext를 사용하여 texts 데이터 가져오기
    const { texts } = useContext(TextContext);

    return (
        <ul>
            {texts.map((text, index) => (
                <li key={index}>{text}</li>
            ))}
        </ul>
    );
}
