import '../../assets/styles/Input.css'
import '../../assets/styles/Label.css'

function Checkbox({id, value, text, name}){
    return(
        <>
            <input type="checkbox" id={id} value={value} name={name}></input>
            <label for={value}>{text}</label>
        </>
    )
}

export default Checkbox