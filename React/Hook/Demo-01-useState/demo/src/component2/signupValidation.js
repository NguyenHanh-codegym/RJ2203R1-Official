import { useState } from "react";
import { useFormik } from "formik";

export default function signupValidation() {

    const initialValue = { username: "", email: "", password: "", confirmpassword: "" };
    const [formValue, setFormValue] = useState(initialValue);
    const [formErrors,setFormErrors] = useState({});
    const [isSubmit,setIsSubmit] = useState(false);



    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value });
        // console.log(formValue);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValue));
        setIsSubmit(true);
    }

    const validate = (value)=>{
        const errors = {};
        if (!value.username) {
            errors.username  = "Please enter your name!"
        }
        if (!value.email) {
            errors.email  = "Please enter your email!"
        }
        if (!value.password) {
            errors.password  = "Please enter your password!"
        }
        if (!value.confirmpassword) {
            errors.confirmpassword = "Please enter your confirm password!"
        }
        if (value.password!==value.confirmpassword) {
            errors.password  = "Password and confirm password are not same"
            errors.confirmpassword  = "Password and confirm password are not same"
        }
        return errors;
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1>Sign up Form</h1>
                <p>Username</p>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formValue.username}
                    onChange={handleChange}
                />
                <p>Email</p>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formValue.email}
                    onChange={handleChange}
                />
                <p>Password</p>
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formValue.password}
                    onChange={handleChange}
                />
                <p>Confirm Password</p>
                <input
                    type="confirm password"
                    name="confirm password"
                    placeholder="Confirm password"
                    value={formValue.confirmpassword}
                    onChange={handleChange}
                />
                <p></p>
                <button
                    type="submit"
                    value="submit"

                >Submit</button>
            </form>
            <h2 color="red" >Username: {formValue.username}</h2>
            <h2 color="red" >Email: {formValue.email}</h2>
            <h2 color="red" >Password: {formValue.password}</h2>
            <h2 color="red" >Confirmpassword: {formValue.confirmpassword}</h2>
        </div>
    );
};
