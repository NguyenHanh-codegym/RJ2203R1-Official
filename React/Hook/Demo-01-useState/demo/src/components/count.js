import { useState } from "react";
function Count() {
    const [number, setNumber] = useState(0)
    let increase = () => {
        setNumber(number + 1);
    }
    return (
        < div >
            <h1>{number}</h1>
            <button onClick={increase}> Increase</button>
        </div >
    );
}
export default Count;
