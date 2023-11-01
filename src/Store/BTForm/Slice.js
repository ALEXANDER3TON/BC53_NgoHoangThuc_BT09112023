import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productList:[],
    productEdit: undefined,
}

const BTFormSlice = createSlice({
    name: "BTForm",
    initialState,
    reducers:{
        addProduct: (state, {payload}) => {
            state.productList.push(payload)
        },
        deleteProduct: (state, {payload}) => {
            state.productList = state.productList.filter((value) => value.id !== payload)
        },
        setProductEdit: (state, {payload}) => {
            state.productEdit = payload
        },
        updateProduct: (state, {payload}) => {
            const index = state.productList.findIndex((item) => item.id === payload.id);
            if(index !== -1){
                state.productList[index] = payload;
            };
            state.productEdit = undefined;
        }
    }
});

export const {reducer: btFormReducer} = BTFormSlice;
export const {addProduct, deleteProduct, setProductEdit, updateProduct} = BTFormSlice.actions;