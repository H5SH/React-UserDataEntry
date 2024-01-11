import {createSlice, configureStore, current} from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: "user",
    initialState:{
        user: []
    },
    reducers: {
        addUser: (state, user)=>{
            // let id = 0
            // if(state.user.length === 0){
            //     id = 0
            // }else{
            //     id = current(state).user[state.user.length - 1].id
            // }
            
            state.user = [...state.user, user]
        },
        deleteUser: (state, deleteduser)=>{
            state.user = current(state).user.filter(us=>{
                if(us.payload.id !== deleteduser.payload.id){
                    return us
                }
            })
        },
        updateUser: (state, user)=>{
            state.user = current(state).user.map(us=>{
                if(us.payload.id === user.payload.id){
                    return user
                }
                return us
            })
            console.log(state.user)
        }
    }
})

export const {addUser, deleteUser, updateUser} = userSlice.actions

const userStore = configureStore({
    reducer: userSlice.reducer
})

export default userStore