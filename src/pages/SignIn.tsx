import React from "react";

function SignIn(){
    return(
        <div>
            <form>
                <h2>Sign In</h2>
                <label htmlFor="email">email</label>
                <input type="email" placeholder="email" id="email" name="email"/>
                <label htmlFor="password">password</label>
                <input type="password" placeholder="***********" id="password" name="password"/>
            </form>
        </div>
    )
}

export default SignIn