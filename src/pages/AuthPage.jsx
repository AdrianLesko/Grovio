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
    <div className='flex-1 w-full px-4 py-8 bg-base-200 flex flex-col items-center justify-center'>
      <div className='p-6 md:p-8 border border-base-300 bg-base-100 rounded-xl shadow-xl w-full max-w-sm sm:max-w-md'>
        <div id='auth-switcher' className='flex flex-row mb-8'>
          <div className="join">
            <button type='button' className={`join-item btn ${isLogin === true && 'btn-primary'}`} onClick={() => setIsLogin(true)}>Prihlásenie</button>
            <button type='button' className={`join-item btn ${isLogin === false && 'btn-primary'}`} onClick={() => setIsLogin(false)}>Registrácia</button>
          </div>
        </div>

        <form onSubmit={e => isLogin ? handleLogin(e) : handleRegister(e)}>
          <fieldset className='fieldset rounded-box'>
            <legend className='fieldset-legend mb-4'>{isLogin ? 'Prihlásenie' : 'Registrácia'}</legend>
            <ErrorToast error={error} />
            {!isLogin && (
              <div className='mb-4'>
                <label className='label'>Meno</label>
                <input type='text' className='input w-full' placeholder='Vaše meno' value={name} onChange={e => setName(e.target.value)}/>
                <label className='label'>Priezvisko</label>
                <input type='text' className='input w-full' placeholder='Vaše priezvisko' value={surname} onChange={e => setSurname(e.target.value)} />
              </div>
            )}
            <div className='mb-8'>
              <div className="">
                <label className='label'>Email</label>
                <input type='email' className='input w-full' placeholder='email' autoComplete='email' value={email} onChange={e => setEmail(e.target.value)} />
              </div>
              <div>
                <label className='label'>Heslo</label>
                <input type={showPass ? 'text' : 'password'} className='input w-full mb-2'
                placeholder='heslo'
                autoComplete={isLogin ? 'current-password' : 'new-password'}
                value={password}
                onChange={e => setPassword(e.target.value)}
                />
                <div className='flex flex-row items-center gap-2'>
                  <input type='checkbox' className='checkbox checkbox-xs checkbox-primary' checked={showPass} onChange={ () => setShowPass(prev => !prev)} />
                  <label className='label'>Ukázať heslo</label>
                </div>
              </div>
            </div>
            
            
        
            
            <button type="submit" className='btn w-full btn-primary ml-auto mr-auto'>{isLogin ? 'prihlasit' : 'registrovat'}</button>
          </fieldset>
        </form>
      </div>

    </div>
    
  
  </>
  
  )
}