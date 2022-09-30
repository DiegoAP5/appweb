import Input from "../atoms/Input";
import '../../assets/styles/Input.css'
import '../../assets/styles/Label.css'

function Label({text, type, placeholder}){
    return(
        <label>{text}<Input type={type} placeholder={placeholder}/></label>
    )
}

export default Label;