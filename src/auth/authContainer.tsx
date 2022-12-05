import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import Login from './login';
import Signup from './signup';

const AuthContainer = () => {
    const navigate = useNavigate();
    useEffect(()=>{
        const token = localStorage.getItem('token')
        if(token){
            navigate('/todoPage')
        }
    },[]);
    const onLogin = (email:string, password:string)=>{
        console.log([email,password]);
        axios.post('http://localhost:8080/users/login',{
            email,
            password
        })
        .then(res=>{
            if(res.data.token){
                navigate('/todoPage');
                localStorage.setItem('token', res.data.token);
            }
        })
        .catch(e=>console.log('error on login'));
    }
    const onSignup = (email:string, password:string)=>{
        console.log([email,password]);
        axios.post('http://localhost:8080/users/create',{
            email,
            password
        })
        .then(res=>{
            if(res.data.token){
                navigate('/todoPage');
                localStorage.setItem('token', res.data.token);
            }
        })
        .catch(e=>console.log('error on signup'));
    }
    return <>
        <Login handleLogin={onLogin} />
        <Signup handleSignup={onSignup} />
    </>
}

export default AuthContainer;