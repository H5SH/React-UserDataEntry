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
            console.log(deleteUser)
            state.user = current(state).user.filter(us=>{
                console.log(us)
                if(us.payload.firstName !== deleteduser.payload.firstName || us.payload.lastName !== deleteduser.payload.lastName){
                    return us
                }
            })
        },
        updateUser: (state, user)=>{
            current(state).user.forEach(us=>{
                if(us.payload.firstName === user.payload.firstName && us.payload.lastName === user.payload.lastName){
                    us.payload = user.payload
                    return 
                }
            })
        }
    }
})

export const {addUser, deleteUser, updateUser} = userSlice.actions

const userStore = configureStore({
    reducer: userSlice.reducer
})

export default userStore