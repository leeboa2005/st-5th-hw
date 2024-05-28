import React, { useContext } from 'react';
import TextInput from './components/TextInput';
import TextList from './components/TextList';
import { TextContext } from './context/TextProvider';

function App() {
    // TODO: texts 를 context api 로 리팩터링 하세요.

    // textProvider에서 제공한 컨텍스트 사용 선언
    const { texts, setTexts } = useContext(TextContext);

    const onAddText = (text) => {
        setTexts((prevTexts) => [...prevTexts, text]);
    };

    return (
        <div>
            <h1>Text Input and Listing</h1>
            <TextInput onAddText={onAddText} />
            <TextList texts={texts} />
        </div>
    );
}

export default App;
