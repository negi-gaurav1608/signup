import React, { useState } from 'react'

function Login() {
  const [user,setUser]=useState({
    email:"",
    password:"",
  });

const handleInput =(e)=>{
  let name= e.target.name;
  let value = e.target.value;

  setUser({
    ...user,
    [name]:value,
  });
};

const handleSubmit =(e)=>{
  e.preventDefault();
  // console.log(user.email);
  // console.log(user.password);
  console.log(user);
}

  return (
    <>
    <section>
    <main>
      <div className='section-registration'>
        <div className='container grid grid-two-cols'>
          <div className='registration-image'>
            <img src="/images/register.jpg" alt="this is login"
            width="400"
            height="500" />
          </div>

          {/* let tackle registration form */}
          
          <div className='setcol'>
            <div className='row1'>

            </div>
            <div>
                <div className='registration-form'>
                <h1 className='main-heading mb-3'>Login form</h1>
                <br />

                <form onSubmit={handleSubmit}>
                  

                  <div>
                    <label htmlFor="email">email</label>
                    <input type="email" name="email" id='email'
                    placeholder='enter your email'
                    required
                    autoComplete='off'
                    value={user.email}
                    onChange={handleInput}
                    className='data'
                    />
                  </div>

                  <div>
                    <label htmlFor="password">password:</label>
                    <input type="password" name="password" id='password'
                    placeholder='enter your password'
                    required
                    autoComplete='off'
                    value={user.password}
                    onChange={handleInput}
                    className='data'
                    />
                  </div>

                  <br />
                  <button type='submit' className='btn btn-submit'>Please Login</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
   </section>
   </>
  )
}

export default Login
