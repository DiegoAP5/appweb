import '../../assets/styles/Label.css'
import '../../assets/styles/Input.css'

function LabelDate(){
    return(
        <label>Enter your birthday<input type="date" value="2022-09-30" max="2022-09-30"></input></label>
    )
}

export default LabelDate;