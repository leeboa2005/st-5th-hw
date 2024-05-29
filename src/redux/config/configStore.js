import { configureStore } from '@reduxjs/toolkit';
import textDataReducer from '../modules/textsSlice';

// Redux 스토어를 설정
const store = configureStore({
    reducer: {
        textData: textDataReducer, // textData 리듀서를 추가
    },
});

export default store;
