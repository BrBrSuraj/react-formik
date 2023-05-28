import { Field, Formik } from 'formik'
import React from 'react'

const FormikInput = ({name,labelName,type,onChange}) => {
  return (
    <div>
       <Field name={name}>
                                {
                                    ({ field, form, meta }) => {
                                        return <div>
                                            <label htmlFor={name}>{labelName}</label>
                                            <input 
                                            {...field} 
                                            value={meta.value} 
                                            id={name}
                                             type={type}
                                            // onChange={field.onChange}
                                            onChange={!!onChange?onChange:field.onChange} 
                                            ></input>
                                            {meta.touched && meta.error?<div style={{color:"red",fontSize:"10px"}}>{meta.error}</div>:null}
                                        </div>
                                    }
                                }
                            </Field>
    </div>
  )
}

export default FormikInput
