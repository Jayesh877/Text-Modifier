import React from 'react'

export default function Alert(props) {

    function capitalize(s)
    {
        return (s[0].toUpperCase() + s.slice(1));
    }
  return (
    <div style={{height:'50px'}}>
      {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
   <strong>{capitalize(props.alert.type)} {props.alert.msg}</strong>
  </div>}
    </div>
  )
}
