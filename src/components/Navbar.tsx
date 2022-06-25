import { NavLink, useNavigate } from "react-router-dom"

const classNameFunc = ({ isActive }: {isActive: boolean}) => (isActive ? "nav-link-active nav-link" : "nav-link");

export default function Navbar() {
    const history = useNavigate()

    return <div id="navbar">
        <NavLink  className={classNameFunc} to='/'>Home</NavLink>
        <NavLink  className={classNameFunc} to='/news'>News</NavLink>
        <NavLink  className={classNameFunc} to='/profile'>Profile</NavLink>
        
        
        <button onClick={() => {
            localStorage.setItem('isLoggedIn', JSON.stringify(false))
            history('/login')
        }}>Log out</button>
    </div>
}