import { useNavigate } from "react-router-dom";
import userStore, { deleteUser } from "../Redux/userReducer";
import { useState } from "react";

function ListOfUser(){
    const [refresh, Refresh] = useState(false)

    console.log(userStore.getState().user)

    const navigate = useNavigate()

    function del(user){
        userStore.dispatch(deleteUser(user))
        Refresh(!refresh)
    }

    return(
        <div>
            <h1>LIST</h1>
            {userStore.getState().user.map(us=>(
                <div>
                    <div onClick={()=> navigate("/Details", {state: us.payload})} key={us.id}>
                        <h6>{us.payload.firstName} {us.payload.lastName}</h6>
                    </div>
                    <button onClick={()=> navigate("/", {state: us.payload})}>Edit</button>
                    <button onClick={()=> del(us.payload)}>Delete</button>
                </div>
            ))}
        </div>
    )
}

export default ListOfUser