import React from "react";
import './App.css'

const Login =({id})=>{
    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
        return passwordRegex.test (password);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const passwordInput = e.target.elements.password.value;

        if(validatePassword(passwordInput)) {
            console.log('Login 성공');
        } else {
            console.log('Login 실패');
        }
    };

    return (
      <div className="login-container">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="label-container">
            <label>ID:</label>
            <input type="text" className="input-field" value={id} />
          </div>
          <div className="label-container">
            <label>PASSWORD:</label>
            <input type="password" className="input-field" name="password" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
};

export default Login;