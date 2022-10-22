import './login.scss'

export default function Login() {
  return (
    <div className='login'>
         <div className='card'>
             <div className='left'>
                  <h1>Hello World</h1>
                  <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum minima alias iusto illum laudantium omnis mollitia voluptatum itaque sapiente nemo, aut, sed et tempore eveniet. Rem nihil aliquid eaque facilis.
                  </p>
                  <span>Don't have an account?</span>
                  <button>Register</button>
             </div>
             <div className='right'>
                  <h1>Login</h1>
                  <form>
                    <input type='text' placeholder='Username'/>
                    <input type='password' placeholder='Password'/>
                  <button>Login</button>
                  </form>
             </div>
         </div>
    </div>
  )
}
