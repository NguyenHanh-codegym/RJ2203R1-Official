import { render } from "@testing-library/react";
import { useState } from "react";

function ValidateForm() {

    const [form,setForm] = useState({});

    const handleChange = (e)=>{
        setForm({
            ...form,[e.target.value]:e.target.value
        })
        console.log(setForm);
    }

    function handleSubmit() {
        const isValid =
          form.username && form.email && form.password && form.confirmPassword;
        alert(isValid ? "Sign in success!!!" : "Please fill out all the fields!!!");
      }

    render(
        <div>
            <form>
                <h2>Sign up Form</h2>
                <p>Username</p>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    onChange={handleChange}
                    value={form.usename || ''}
                />
                <p>Email</p>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    value={form.email || ''}
                />
                <p>Password</p>
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    value={form.password || ''}
                />
                <p>Confirm password</p>
                <input
                    type="confirm password"
                    name="confirm password"
                    placeholder="Confirm password"
                    onChange={handleChange}
                    value={form.confirmPassword || ''}
                />
                <hr></hr>
                <button type="submit" 
                class="btn btn-primary mb-2"
                onClick={handleSubmit}
                >Submit </button>
            </form>
            <h1>Username: {form.usename}</h1>
            <h1>Email: {form.email}</h1>
            <h1>Password: {form.password}</h1>
            <h1>Confirm password: {form.confirmPassword}</h1>
        </div>
    );

};
export default ValidateForm;
