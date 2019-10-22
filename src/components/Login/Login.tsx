import React from 'react'
import { Link } from 'react-router-dom'

const Login: React.FC = () => {
    return (
        <section>
            <div className="form">
                <input type="text" name="login" required />
                <label htmlFor="login"> Login</label>
            </div>
            <div className="form">
                <input type="text" name="password" required />
                <label htmlFor="password"> Password</label>
            </div>
            <button type="submit" id="send_form">Send</button>
        </section>
    )
}

export default Login