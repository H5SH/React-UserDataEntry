import {createSlice, configureStore} from "@reduxjs/toolkit"

const idSlice = createSlice({
    name: "id",
    initialState: {
        id: 0
    },
    reducers: {
        incriment: state=> {
            state.id++
        }
    }
})

export const {incriment} = idSlice.actions

const idStore = configureStore({
    reducer: idSlice.reducer
})

export default idStore