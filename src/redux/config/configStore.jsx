import { configureStore } from '@reduxjs/toolkit';
import textDataReducer from '../modules/texts';

// Redux 스토어를 설정
const store = configureStore({
    reducer: {
        textData: textDataReducer,
    },
});

export default store;
