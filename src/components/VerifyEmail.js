import React from 'react'

const VerifyEmail = () => {
  return (
    <div className='container'>
        <h1>verify email</h1>
        <input type='email' placeholder='email' /><br/>
        <input type='password' placeholder='passcode' /><br/>
        <button>verify</button>
        <a href='/login'>login</a>
    </div>
  )
}

export default VerifyEmail