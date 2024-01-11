import { useLocation } from "react-router-dom"

function Details(){
    const user = useLocation()
    return (
        <div>
            <h3>Name: {user.state.firstName} {user.state.lastName}</h3>
            <h5>Email: {user.state.email}</h5>
            <h5>Date Of Birth: {user.state.dateOfBirth}</h5>
            <h5>profesion: {user.state.profesion}</h5>
        </div>
    )
}

export default Details