import { useState } from 'react'
import React from 'react'

function Register() {

  const [user,setUser]=useState(
    {
      username:" ",
      email:" ",
      password:" "
    }
  );

  const handleInput =(e)=>{
    // console.log(e);
    let name=e.target.name;
    let value=e.target.value;

    setUser({
      ...user,
      [name]: value,
    })
  };

  //handaling the form submission

const handleSubmit=(e)=>{
  e.preventDefault();
  console.log(user);
}

  return (
   <section>
    <main>
      <div className='section-registration'>
        <div className='container grid grid-two-cols'>
          <div className='registration-image'>
            <img src="/images/register.jpg" alt="this is registration"
            width="400"
            height="500" />
          </div>

          {/* let tackle registration form */}
          
          <div className='setcol'>
            <div className='row1'>

            </div>
            <div>
                <div className='registration-form'>
                <h1 className='main-heading mb-3'>registration form</h1>
                <br />

                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id='username'
                    placeholder='username'
                    required
                    autoComplete='off'
                    value={user.username}
                    onChange={handleInput}
                    className='data'
                    />
                  </div>

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
                  <button type='submit' className='btn btn-submit'>Register Now</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
   </section>
  )
}

export default Register
