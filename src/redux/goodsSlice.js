import { createSlice } from '@reduxjs/toolkit';

export const goodsSlice = createSlice({
    name: 'goods',
    initialState: {
        selectedCategory: "ВСЕ ТОВАРЫ"
    },

    reducers: {
        filterType: (state, action) => {
            state.selectedCategory = action.payload;
        }
    }
})

export const getSelectedCategory = state => state.goods.selectedCategory;
export const { filterType } = goodsSlice.actions;
export default goodsSlice.reducer;