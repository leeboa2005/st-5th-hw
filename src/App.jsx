import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addText } from './redux/modules/texts';
import TextInput from './components/TextInput';
import TextList from './components/TextList';

function App() {
    // TODO: texts 를 redux 로 리팩터링 하세요.

    // useDispatch 사용하기위해 선언함
    const dispatch = useDispatch();
    // 텍스트 목록을 선택해서 가져옴
    const texts = useSelector((state) => state.textData.items);

    useEffect(() => {
        localStorage.setItem('texts', JSON.stringify(texts));
    }, [texts]);

    const onAddText = (text) => {
        dispatch(addText(text)); // addText 액션을 디스패치함
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
