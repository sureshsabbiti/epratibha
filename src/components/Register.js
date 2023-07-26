import React from 'react'
import './Register.css'

const Register = () => {
function onChangeFunc(e){
    console.log(e.target.value);
  }
  return (
    <div className='container'>
        <form>
                <div>
                    <h1>sign-up</h1>
                </div>
                <div>
                    <input type='text' placeholder='name' name='text' id='text' onChange={onChangeFunc} /><br/>
                    <input type='email' placeholder='email' name='email' id='email' /><br/>
                    <input type='password' placeholder='password' name='password' id='password' /><br/>
                    <input type='password' placeholder='confirm password' /><br/>
                    <input type='phone' placeholder='phone' name='phone' id='phone' />
                </div>
                <div>
                    <button>Register now</button>
                    <a href='/Login'>Login</a>
                </div>
        </form>
    </div>
  )
}

export default Register