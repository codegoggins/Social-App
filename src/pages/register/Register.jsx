import './register.scss'

export default function Register() {
  return (
    <div className='register'>
         <div className='card'>
             <div className='left'>
                  <h1>Get Social</h1>
                  <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum minima alias iusto illum laudantium omnis mollitia voluptatum itaque sapiente nemo, aut, sed et tempore eveniet. Rem nihil aliquid eaque facilis.
                  </p>
                  <span>Do you have an account?</span>
                  <button>Login</button>
             </div>
             <div className='right'>
                  <h1>Register</h1>
                  <form>
                    <input type='text' placeholder='Username'/>
                    <input type='email' placeholder='Email'/>
                    <input type='password' placeholder='Password'/>
                    <input type='text' placeholder='Name'/>
                    <button>Register</button>
                  </form>
             </div>
         </div>
    </div>
  )
}
