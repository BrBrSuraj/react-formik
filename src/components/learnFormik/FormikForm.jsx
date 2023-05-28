import { Field, Form, Formik } from 'formik'
import * as yup from 'yup'
import React from 'react'
import FormikInput from './FormikInput'

const FormikForm = () => {
    //each field has three properties, value,errors and touch
    let initialValues = {
        firstName: '',
        lastName: '',
        description: '',
    }
    let onSubmit = (value, other) => {
        console.log(value)
    }

    // validation will run if onChange,onSubmit and onBlure event is changed.
    let validationSchema = yup.object({
        firstName: yup.string("must be string").required("firstName is required"),
        lastName: yup.string().required("lastName is required"),
        description: yup.string().required("description is required"),
    })
    return (
        <div>
            <Formik 
            initialValues={initialValues} 
            onSubmit={onSubmit} 
            validationSchema={validationSchema}>
                {
                    (formik) => {
                        return <Form>
                            {/* <Field name="firstName">
                                {
                                    ({ field, form, meta }) => {
                                        return <div>
                                            <label htmlFor='fName'>First Name</label>
                                            <input {...field} value={meta.value} 
                                            // onChange={(e) => {
                                            //     formik.setFieldValue("firstName", e.target.value);
                                            // }} 
                                            onChange={field.onChange}
                                            id='fName' type='text' ></input>
                                            {meta.touched && meta.error?<div style={{color:"red",fontSize:"10px"}}>{meta.error}</div>:null}
                                        </div>
                                    }
                                }
                            </Field> */}
                            <FormikInput
                                name="firstName"
                                labelName="First Name"
                                type="text"
                                onChange={(e) => {
                                    formik.setFieldValue("firstName", e.target.value)
                                }}
                            ></FormikInput>
                            <br></br>

                            <FormikInput 
                            name="lastName" 
                            labelName="Last Name" 
                            type="text"
                            onChange={(e) => {
                                formik.setFieldValue("lastName", e.target.value)
                            }}
                            ></FormikInput>
                            <br></br>

                            <FormikInput 
                            name="description" 
                            labelName="Description" 
                            type="text"
                            onChange={(e) => {
                                formik.setFieldValue("description", e.target.value)
                            }}
                            ></FormikInput>
                            <br></br>

                            <button type='submit'>Submit</button>
                        </Form>
                    }
                }
            </Formik>
        </div>
    )
}

export default FormikForm
