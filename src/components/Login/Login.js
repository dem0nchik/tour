import React, { useState } from 'react'
import './Login.css'
import { userLogin } from '../../actions/actionCreator.js'
import {connect} from 'react-redux'

const Login = (props) => {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const handleUser = e => setUser(e.currentTarget.value)
    const handlePass = e => setPass(e.currentTarget.value)

    const login = (e) => {
        e.preventDefault()
        if(user.toLowerCase().trim() === 'login' && pass.toLowerCase().trim() === '12345')
            props.userLogin()
    }
    return (
        <div className='login-wrapp'>
            <h2>Війти в акаунт</h2>
            <p className='login-hint'>login | 12345</p>
            <form>
                <input className='login-user'
                       type='text' 
                       placeholder='Юзернейм' 
                       value={user} 
                       onChange={handleUser}
                />
                <input 
                       className='login-pass' 
                       type='password' 
                       placeholder='Пароль'
                       value={pass} 
                       onChange={handlePass}
                />
                <button onClick={login}>Війти в акаунт</button>
                {props.tour.isLogin && <p className='login-logined'>Ви вже війшли</p>}
            </form>
        </div>
    )
}
export default connect(state => ({
    tour: state.tour,
}), {userLogin})(Login)