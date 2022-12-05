import axios from 'axios';
import Login from './login';
import Signup from './signup';

const AuthContainer = () => {
    const onLogin = (email:string, password:string)=>{
        console.log([email,password]);
        axios.post('http://localhost:8080/users/login',
        {
            email,
            password
        }
        ).then(res=>console.log(res));
    }
    const onSignup = (email:string, password:string)=>{
        console.log([email,password]);
        axios.post('http://localhost:8080/users/create',
        {
            email,
            password
        }
        ).then(res=>{

            localStorage.setItem('token', res.data.token);
        });
    }
    return <>
        <Login handleLogin={onLogin} />
        <Signup handleSignup={onSignup} />
    </>
}

export default AuthContainer;