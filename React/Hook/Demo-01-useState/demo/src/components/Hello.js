import { useState, useEffect } from "react";
function Hello() {
    const [intValue, setIntValue] = useState("")

    useEffect(() => {

    }, [intValue]);
    return (
        <div>
            <input type="text" onKeyUp={(e) => { setIntValue(e.target.value) }} /> 
            <h1>Hello : {intValue}</h1>
        </div>
    )
}
export default Hello;