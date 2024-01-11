import {Formik, Field, ErrorMessage, Form, useFormik} from "formik"
import pad from "../pad"
import userStore, { addUser, updateUser } from "../Redux/userReducer"
import * as Yup from 'yup'
import { useState } from "react"
import { useLocation } from "react-router-dom"
import idStore, { incriment } from "../Redux/idReducer"
import "./MainForm.css"

function MainForm(){
    const date = new Date()

    const [updateButton, setUpdateButton] = useState(false)
    const [response, setResponse] = useState('')
    const user = useLocation()

    let id = 0
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

    function handleUpdate(values){
        console.log("handleUpdate")
        userStore.dispatch(updateUser(values))
        setResponse("User Updated")
        window.setTimeout(()=>{
            setResponse('')
        },2000)
    }
    // const formik = useFormik({
    //     enableReinitialize: true,
    //     initialValues: user.state === null ?
    //          {
    //                 id: idStore.getState().id,
    //                 firstName: '',
    //                 lastName: '',
    //                 email: '',
    //                 dateOfBirth: `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`,
    //                 profesion: ''
    //             }: {
    //                 id: user.state.id,
    //                 firstName: user.state.firstName,
    //                 lastName: user.state.lastName,
    //                 email: user.state.email,
    //                 dateOfBirth: user.state.dateOfBirth,
    //                 profesion: user.state.profesion
    //             },
    //     validationSchema: Yup.object({
    //         id: Yup.number().positive().integer(),
    //         firstName: Yup.string().required("Please enter your First Name").min(2, "Top Short").max(50, "Too Long"),
    //         lastName: Yup.string().required("Please enter your Last Name").min(2, "Too Short").max(50, "Too Long"),
    //         email: Yup.string().email().required("Please enter your active email"),
    //         dateOfBirth: Yup.date(),
    //         profesion: Yup.string()
    //     }),
    //     onSubmit: (values, {resetForm}) => {
    //         if(updateButton){
    //                     console.log("UpdateButton")
    //                     userStore.dispatch(updateUser(values))
    //                     setResponse("User Updated")
    //                 }else{
    //                     console.log("NotUpdateButton")
    //                     idStore.dispatch(incriment())
    //                     userStore.dispatch(addUser(values))
    //                     setResponse("User Added")
    //                     resetForm()
    //                 }
    //                 window.setTimeout(()=>{
    //                     setResponse('')
    //                 },2000)
    //     }
    // })
    return(
        <div>
            <h3>{response}</h3>
            <Formik
            enableReinitialize
            initialValues={user.state === null ? {
                id: idStore.getState().id,
                firstName: '',
                lastName: '',
                email: '',
                dateOfBirth: `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`,
                profesion: ''
            }: {
                id: user.state.id,
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
            onSubmit={(values, {resetForm}) => {
                if(updateButton){
                    console.log("UpdateButton")
                    userStore.dispatch(updateUser(values))
                    setResponse("User Updated")
                }else{
                    console.log("NotUpdateButton")
                    idStore.dispatch(incriment())
                    userStore.dispatch(addUser(values))
                    setResponse("User Added")
                    resetForm()
                }
                window.setTimeout(()=>{
                    setResponse('')
                },2000)
              
            }}
            >
                <Form>
                    <label htmlFor="firstName">First Name</label>
                    <Field name="firstName" type="text" />
                    <ErrorMessage name="firstName">
                        {msg => <div className="Error">{msg}</div>}
                    </ErrorMessage>

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
                    <button type="submit" onClick={()=> setUpdateButton(false)}>Add</button>:
                    <button type="submit" onClick={()=> setUpdateButton(true)}>Update</button>}
                </Form>
      
            </Formik>
        </div>
    )
}

export default MainForm