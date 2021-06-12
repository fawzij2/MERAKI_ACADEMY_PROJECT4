import react from 'react';
import './header.css'
import logo from './logo.png'


const Header = ()=>{
    return(
        <div className="Logo">
            <img src={logo}/><h1>BLISS</h1>
        </div>
    )
}

export default Header;