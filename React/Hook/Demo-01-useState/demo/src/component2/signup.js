import { useState } from "react";
 function signup() {
    const [username, setUserName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmpassword, setConfirmPassword] = useState();

    return (

        <div className="container">
            <form>
                <h1>Sign up Form</h1>
                <p>Username</p>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    onChange={(e) => { setUserName(e.target.value) }}
                />
                <p>Email</p>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={(e) => { setEmail(e.target.value) }}
                />
                <p>Password</p>
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={(e) => { setPassword(e.target.value) }}
                />
                <p>Confirm Password</p>
                <input
                    type="confirm password"
                    name="confirm password"
                    placeholder="Confirm password"
                    onChange={(e) => { setConfirmPassword(e.target.value) }}
                />
                <p></p>
                <button
                    type="submit"
                    value="submit"

                >Submit</button>
            </form>
            <h2 color="red" >Username: {username}</h2>
            <h2 color="red" >Email: {email}</h2>
            <h2 color="red" >Password: {password}</h2>
            <h2 color="red" >Confirmpassword: {confirmpassword}</h2>
        </div>
    );
}
export default signup;