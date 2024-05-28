import React, { createContext, useState, useEffect } from 'react';

// 새로운 컨텍스트 생성: 지출 데이터 전역으로 관리함
export const TextContext = createContext();

export const TextProvider = ({ children }) => {
    const [texts, setTexts] = useState(() =>
        localStorage.getItem('texts') ? JSON.parse(localStorage.getItem('texts')) : []
    );

    // 마운트 될때마다  'texts' 데이터가 변경될 때마다 localStorage에 저장
    useEffect(() => {
        localStorage.setItem('texts', JSON.stringify(texts));
    }, [texts]);

    // 'texts' 데이터와 해당 데이터를 변경하는 함수가 담긴 컨텍스트를 제공
    return <TextContext.Provider value={{ texts, setTexts }}>{children}</TextContext.Provider>;
};
