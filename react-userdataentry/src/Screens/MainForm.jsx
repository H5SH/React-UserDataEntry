import {Formik, Field, ErrorMessage, Form} from "formik"
import pad from "../pad"
import userStore, { addUser } from "../Redux/userReducer"
import * as Yup from 'yup'
import { useState } from "react"
import { useLocation } from "react-router-dom"

function MainForm(){
    const date = new Date()
    const [refresh, Refresh] = useState(false)
    const [response, setResponse] = useState('')
    const user = useLocation()
    console.log(user)
    let count = 0
    const profesions = [
        "None",
        "Computer Scientist",
        "Doctor",
        "Fedrel employee",
        "Chef",
        "Pilot",
        "UnEmployed"
    ]
    // const formik = useFormik({
    //     initialValues:{
    //         id: ++id,
    //         firstName: '',
    //         lastName: '',
    //         email: '',
    //         dateOfBirth: `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`,
    //         profesion: 'None',
    //     },
    //     validationSchema: Yup.object({
    //         id: Yup.number().positive().integer(),
    //         firstName: Yup.string().required("Please enter your First Name").min(2, "Top Short").max(50, "Too Long"),
    //         lastName: Yup.string().required("Please enter your Last Name").min(2, "Too Short").max(50, "Too Long"),
    //         email: Yup.string().email().required("Please enter your active email"),
    //         dateOfBirth: Yup.date(),
    //         profesion: Yup.string()
    //     }),
    //     onSubmit: (values, {resetForm}) => {
    //         userStore.dispatch(addUser(values))
    //         resetForm()
    //     }
    // })
    return(
        <div>
            <h3>{response}</h3>
            <Formik
            enableReinitialize
            initialValues={user.state === null ? {
                firstName: '',
                lastName: '',
                email: '',
                dateOfBirth: `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`,
                profesion: ''
            }: {
                firstName: user.state.firstName,
                lastName: user.state.lastName,
                email: user.state.email,
                dateOfBirth: user.state.dateOfBirth,
                profesion: user.state.profesion
            }}
            validationSchema={
                Yup.object({
                    firstName: Yup.string().required("Please enter your First Name").min(2, "Top Short").max(50, "Too Long"),
                    lastName: Yup.string().required("Please enter your Last Name").min(2, "Too Short").max(50, "Too Long"),
                    email: Yup.string().email().required("Please enter your active email"),
                    dateOfBirth: Yup.date(),
                    profesion: Yup.string()
                })
            }
            onSubmit={(values, {resetForm}, e) => {
                console.log(e.target)
                userStore.dispatch(addUser(values))
                setResponse("User Added")
                window.setTimeout(()=>{
                    setResponse('')
                },2000)
                resetForm()
            }}
            >
                <Form>
                    <label htmlFor="firstName">First Name</label>
                    <Field name="firstName" type="text" />
                    <ErrorMessage name="firstName" />

                    <label htmlFor="lastName">Last Name</label>
                    <Field name="lastName" type="text"/>
                    <ErrorMessage name="lastName" />

                    <label htmlFor="email">Email</label>
                    <Field name="email" type="email" />
                    <ErrorMessage name="email" />

                    <label htmlFor="dateOfBirth">Date of Birth</label>
                    <Field name="dateOfBirth" type="date" />
                    <ErrorMessage name="dateOfBirth"/>

                    <label htmlFor="profesion">Profesion</label>
                    <Field name="profesion" as="select" className="my-select">
                      {profesions.map(profesion=>(
                        <option key={++count} value={profesion}>{profesion}</option>
                      ))}  
                    </Field>
                    <ErrorMessage name="profession" />

                    {user.state === null ? 
                    <button type="submit">Add</button>:
                    <button onClick={}>Update</button>}
                    

                </Form>
            </Formik>
        </div>
    )
}

export default MainForm