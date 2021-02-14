import React from 'react'

export const LoginScreen = ({history}) => {
  
  const handleLogin = ()=>{
    // console.log('Click')
    // history.push('/') // deja el historial de volver
    history.replace('/') // Quita el historial de volver
  }

  return (
    <div className="container mt-5">
      <h1>LoginScreen</h1>
      <hr />

      <button
        className="btn btn-dark"
        onClick={ handleLogin }
      >
        Login
      </button>
    </div>
  );
}
