import { FormEvent, useRef, useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [userName, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isValid, setIsValid] = useState(true)

    const history = useNavigate();

    type AuthData = {
        username: string,
        password: string
    }

    const admLogin: AuthData = {
        username: 'Admin',
        password: '12345'
    }

    const validMassage = <p style={{
        fontSize: '1rem'
    }}>Имя пользователя или пароль введены неверно!</p>

    function handleLoginSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        if(userName === 'Admin' && password === '12345') {
            setIsValid(true)
            localStorage.setItem('isLoggedIn', 'true')
            history('/profile')
        } else {
            setIsValid(false)
        }
        console.log({userName, password})
        return
    }

    return <div id="login-container">
        <p style={{
            boxSizing: 'border-box',
            borderBottom: 'solid 3px white'
        }}>Please log in</p>
        <form id="login-form" onSubmit={handleLoginSubmit}>
            <div className="input-container">
                <label className="input-label" htmlFor="username">Enter your username:</label>
                <input name='username' id='username' className="login-input" type='text' required placeholder='username' onChange={event => {
                    setUsername(event.target.value)
                }}/>
            </div>
            <div className="input-container">
                <label className="input-label" htmlFor="password">Enter your password:</label>
                <input name="password" id='password' className="login-input" type='text' required placeholder='password' onChange={event => {
                    setPassword(event.target.value)
                }}/>
            </div>
            <div className="input-container">
                <input name="login" value='Log in' type='submit' />
            </div>
        </form>
        {isValid || validMassage}
    </div>
}