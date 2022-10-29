import React from 'react'
import {Field} from 'formik'
const Input = ({as , name , type , placeholder , autocomplete , id , cols , rows , className , children}) => {
  return (
    <Field 
        id={id}
        as={as}
        name={name}
        type={type}
        className={className}
        placeholder={placeholder}
        autocomplete={autocomplete}
        cols={cols}
        row={rows}
    >
      {children}
    </Field>
  )
}

export default Input