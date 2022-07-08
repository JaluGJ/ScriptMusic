import {createSlice} from '@reduxjs/toolkit';

export const paginationSlice = createSlice({
    name: "pagination",
    initialState: {
        page: 1
    },
    reducers: {
        setPage: (state, action) => {
            state.page = action.payload
        }
    }
})

export const { setPage } = paginationSlice.actions;

export default paginationSlice.reducer;

export const setCurrentPage = (payload) => (dispatch) => {
    console.log(payload)
    dispatch(setPage(payload));
}
// export const setCurrentPage = (payload) => {
//     setPage(payload)
// }
