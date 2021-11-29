import React from 'react'

import { useNavigate, useLocation } from 'react-router-dom';

import { useAuth } from '../auth/hooks/useAuth';

const Login = () => {

    let navigate = useNavigate();
    let location = useLocation();
    let auth = useAuth();

    let from = location.state?.from?.pathname || '/';

    let handleSubmit = async (event) => {
        event.preventDefault();

        let formData = new FormData(event.currentTarget);
        let data = {
            username: formData.get('username').toString(),
            password: formData.get('password').toString()
        }
        
        try{
            let loginData = await auth.signin(data)
            if (loginData === true){
                navigate(from, { replace: true });
            } else{
                alert(loginData)
            }
        } catch (e){
            console.log(e)
            auth.setToken(null)
        }
    }

    return (
        <div>
            {
                auth.token ?
                <></>
                :
                <>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Username: <input name="username" type="text" />
                        </label>
                        <label>
                            Password: <input name="password" type="password" />
                        </label>
                        <button type="submit">Login</button>
                    </form>
                </>
            }
        </div>
    );
}

export default Login
