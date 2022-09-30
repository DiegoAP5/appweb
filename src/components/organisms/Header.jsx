import Logo from "../atoms/Logo";
import '../../assets/styles/Header.css'

function Header(){
    return(
       <header className="header">
        <Logo/>
        <h1>Historias cortas</h1>
    </header> 
    )
    
}

export default Header;