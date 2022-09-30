import Label from "../molecules/Label";
import Button from "../atoms/Button";
import Checkbox from "../molecules/Checkbox";
import LabelDate from "../atoms/LabelDate";
import '../../assets/styles/Body.css'

function Body(){
    return(
        <div className="container">
            <div className="form_container">
<h2>Register</h2>
            <form action="" id="form">
                <Label text={"Enter your name"} type={"text"} placeholder={"Write your name"}/>
                <Label text={"Enter yout password"} type={"password"} placeholder={"Write your password"}/>
                <Label text={"Enter your email"} type={"email"} placeholder={"example@gmail.com"}/>
                <Label text={"Enter your last name"} type={"text"} placeholder={"Last name"}/>
                <Label text={"Enter your registration code"} type={"number"} placeholder={"example: 213475"}/>
                <Label text={"Enter your engineering"} type={"text"} placeholder={"IDS"}/>
                <LabelDate/>
                <h5>Select your gender</h5>
                <Checkbox text={"Male"} value={"male"} id={"male"} name={"gender"}/>
                <Checkbox text={"Female"} value={"female"} id={"female"} name={"gender"}/>
                <Checkbox text={"Other"} value={"not_specified"} id={"not_specified"} name={"gender"}/>
                <Button textbtn={"Success"} type={"success"}/>
                <Button textbtn={"Delete"} type={"delete"}/>
            </form>
            </div>
        </div>
    )
}

export default Body;