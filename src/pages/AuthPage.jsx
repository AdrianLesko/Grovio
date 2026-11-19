import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext.js'
import { useState } from 'react'

import ErrorToast from '../components/publicUI/errorToast.jsx'

export default function AuthPage () {
  const { login, register, error} = useAuthContext()
  const navigate = useNavigate()

  const [isLogin, setIsLogin] = useState(true)
  const [showPass, setShowPass] = useState(false)

  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleRegister = async (e) => {
    e.preventDefault()
    const success = await register(name, surname, email, password)
    if (success) {
      navigate('/dashboard')
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    const success = await login(email, password)
    if (success) {
      navigate('/dashboard')
    }
  }

  return (
  <>
    <div className='h-full w-full bg-base-100 flex flex-col items-center justify-center'>
      <div className='px-10 py-14 bg-base-200 rounded-2xl shadow-xl'>
        <div id='auth-switcher' className='flex flex-row'>
          <button type='button' className={`btn btn-xs ${isLogin === true && 'btn-primary'}`} onClick={() => setIsLogin(true)}> prihlasenie</button>
          <button type='button' className={`btn btn-xs ${isLogin === false && 'btn-primary'}`} onClick={() => setIsLogin(false)}> registracia</button>
        </div>
        <form onSubmit={e => isLogin ? handleLogin(e) : handleRegister(e)}>
          <fieldset className='fieldset rounded-box w-xs p-4'>
            <legend className='fieldset-legend'>{isLogin ? 'Prihlásenie' : 'Registrácia'}</legend>
            <ErrorToast error={error} />
            {!isLogin && (
              <>
                <label className='label'>Name</label>
                <input type='text' className='input' placeholder='your name' value={name} onChange={e => setName(e.target.value)}/>
                <label className='label'>Surname</label>
                <input type='text' className='input' placeholder='your surname' value={surname} onChange={e => setSurname(e.target.value)} />
              </>
            )}
            <label className='label'>Email</label>
            <input type='email' className='input' placeholder='email' autoComplete='email' value={email} onChange={e => setEmail(e.target.value)} />
            <label className='label'>Password</label>
            <input type={showPass ? 'text' : 'password'} className='input'
              placeholder='password'
              autoComplete={isLogin ? 'current-password' : 'new-password'}
              value={password}
              onChange={e => setPassword(e.target.value)}
              />
        
            <div className='flex flex-row'>
              <input type='checkbox' checked={showPass} onChange={ () => setShowPass(prev => !prev)} />
              <label className='label'>Show password</label>
            </div>
            <button type="submit" className='btn btn-wide btn-primary ml-auto mr-auto'>{isLogin ? 'prihlasit' : 'registrovat'}</button>
          </fieldset>
        </form>
      </div>

    </div>
    
  
  </>
  
  )
}