import { useNavigate } from "react-router-dom"

function NavBar(){
    const navigate = useNavigate()

    return(
        <div>
            <button onClick={()=> navigate('/')}>ADD USER</button>
            <button onClick={()=> navigate('/List-of-User')}>List Of User</button>
        </div>
    )
}

export default NavBar