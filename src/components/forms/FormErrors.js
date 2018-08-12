import React from 'react'

const FormErrors = ({ formErrors }) => (
  <div className="form-errors">
    {Object.keys(formErrors).map((fieldName, index) => {
      return !!formErrors[fieldName].length > 0 ? (
        <p style={{ color: '#FF3333' }} key={index}>
          {fieldName} {formErrors[fieldName]}
        </p>
      ) : (
        ''
      )
    })}
  </div>
)

export default FormErrors
