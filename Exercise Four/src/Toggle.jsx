import {useState} from 'react';
const Toggle = () =>{
    const [isOn, setIsOn] = useState();
    const handleChange = ()=> {
        setIsOn(!isOn)
    }
    return(
        <>
        <label>The Button Is {isOn ? 'ON' : 'OFF'}</label> <br />
        <button onClick={handleChange}>Turn {isOn ? 'OFF' : 'ON'}</button>
        </>
    )
}
export default Toggle;