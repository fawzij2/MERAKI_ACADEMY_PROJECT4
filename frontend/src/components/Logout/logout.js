import react from 'react'
import {useHistory} from 'react-router-dom'

const Logout =()=>{
    const History = useHistory();
    localStorage.clear()
    History.push('/login')
}

export default Logout;