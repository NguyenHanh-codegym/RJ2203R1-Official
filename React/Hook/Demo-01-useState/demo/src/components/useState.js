import { useState } from "react";

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    return (
        <div>
            <form >
                <div>
                    <label>Email</label>
                    <input 
                    type="text" 
                     onChange={(e)=>{setEmail(e.target.value)}} 
                     placeholder="Enter your email" />
                </div>
                <div>
                    <label>Password</label>
                    <div>
                        <input 
                        type="text" 
                        onChange={(e)=>{setPassword(e.target.value)}}  
                        placeholder="Enter your Password" />
                    </div>
                </div>
                <div>
                    <button type="submit" 
                    onClick={(e)=>{
                        setEmail(e.target.value)
                        setPassword(e.target.value)
                    }}
                    consolelog = {email}
                    >Submit</button>
                </div>
                <hr></hr>
                <h2>Email : {email}</h2>
                <h2>Password : {password}</h2>
            </form>
        </div>
    );
}
export default LoginForm;