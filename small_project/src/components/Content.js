import React from 'react'

function Content({title}) {
  return (
    <div style = {{
      
      textAlign: 'center',
      height: "100vh",
      display: "flex",
      justifyContent: 'center',
      alignItems: 'center'
    }}>{title} Page</div>
  )
}

export default Content