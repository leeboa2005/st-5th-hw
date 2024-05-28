import { createSlice } from '@reduxjs/toolkit';

// 텍스트 슬라이스 생성함
const textsSlice = createSlice({
    name: 'textData',
    initialState: {
        items: [], // 초기 상태는 빈 배열
    },
    reducers: {
        // 텍스트를 추가하는 리듀서
        addText: (state, action) => {
            state.items.push(action.payload);
        },
    },
});

// addText 액션 내보내기
export const { addText } = textsSlice.actions;
// 기본 리듀서 내보내기
export default textsSlice.reducer;
