import react from 'react';
import './header.css'
import logo from './logo.png'


const Header = ()=>{
    return(
        <div className="Logo">
            <img src={logo}/>
        </div>
    )
}

export default Header;