import '../../assets/styles/Button.css'

function Button({type, textbtn}){
    return (
        <button type={type}>{textbtn}</button>
    );
}

export default Button;