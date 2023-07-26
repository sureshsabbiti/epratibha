import React from 'react'

const Login = () => {
  return (
    <div className='container'>
      <Tabs
  value={value}
  onChange={handleChange}
  textColor="secondary"
  indicatorColor="secondary"
  aria-label="secondary tabs example"
>
  <Tab value="one" label="Item One" >
    <h1>Login</h1>
        <input type='text' placeholder='username' /><br/>
        <input type='password' placeholder='password' /><br/>
        <div>
        <button>login now</button>
        <a href='/VerifyEmail'>forget password</a>
        </div>
  </Tab>
  <Tab value="two" label="Item Two" />
  <Tab value="three" label="Item Three" />
</Tabs>   
    </div>
    
  )
}

export default Login