import React from 'react';

const Registration = () => {
    return (
        <div>
            <h2>Join the Coffee Journal!</h2>
            <form>
                <div className="container">
                    <label>First Name</label>
                    <input type="text" placeholder="First Name" name="first_name" required />

                    <label>Last Name</label>
                    <input type="text" placeholder="Last Name" name="last_name" required />

                    <label>e-mail</label>
                    <input type="text" placeholder="e-mail" name="email" required />

                    <label>password</label>
                    <input type="password" placeholder="password" name="pw" required />

                    <label>City</label>
                    <input type="text" placeholder="City" name="city" required /> 
                </div>
                <div>
                    <button type="submit" className="registration_btn">Register</button>
                </div>
            </form>
        </div>
    );
};

export default Registration;