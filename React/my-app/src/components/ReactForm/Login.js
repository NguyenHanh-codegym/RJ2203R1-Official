import { render } from "@testing-library/react";
import React, { useState } from "react";
import "./App.css";

function LoginForm() {

const [form,setForm]=useState({});

const REGEX = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/
  };

  const MESSAGE_ERROR = {
    email: "Email error",
    password: "Password error"
  };

function handleChange(e){
setForm({...form,[e.target.name]: { value: e.target.value, error: error }})

let error = REGEX[e.target.name].test(e.target.value)
      ? ""
      : MESSAGE_ERROR[e.target.name];

}

function handleSubmit() {
    const isFilled =
      form.email && form.email.value && form.password && form.password.value;
    const isError = isFilled && (form.email.error || form.password.error);
    alert(
      isFilled && !isError
        ? "Login in successfully!!!"
        : "Please fill out all the fields!!!"
    );
    }
    
    render(
        <div className="container">
            <h1>Login Form</h1>
            <form>
                <div class="row mb-3">
                    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                        <input 
                        type="email"
                        name="email"
                        value={(form.email && form.email.value) || ""}
                        onChange={handleChange}
                         />
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                    <div class="col-sm-10">
                        <input 
                        type="password" 
                        name="password"
                        value={(form.password && form.password.value) || ""}
                        onChange={handleChange}
                         />
                    </div>
                </div>
                <button 
                type="submit" class="btn btn-primary"
                onClick={handleSubmit}
                >Sign in</button>
            </form>
        </div>
    );
}
export default LoginForm;