import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FrindsPage {
    page: number;
}

const initialState: FrindsPage = { 
    page: 1
}

export const pageSlice = createSlice({
name: 'pages',
initialState,
reducers: {
setNumPage: (state, action: PayloadAction<number> ) => {
    state.page = action.payload
}
}
})

export const {setNumPage} = pageSlice.actions
export default pageSlice.reducer

