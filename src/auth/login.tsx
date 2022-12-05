import React, { ChangeEvent, useEffect, useRef, useState } from 'react';

type LoginProps = {
    handleLogin:(email:string, password:string)=>void
}
const Login = ({handleLogin}:LoginProps) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const checkConditions = () =>{
        if(checkEmail(email) && checkPassword(password)){
            buttonRef.current!.disabled = false;
        }else{
            buttonRef.current!.disabled = true;
        }
    }
    const checkEmail = (checkEmail:string) =>{
        const splited = checkEmail.split('');
        let [conditionA, conditionB] = [false, false];
        for(const word of splited){
            if(word === '@') conditionA = true
            if(word === '.') conditionB = true;
        }
        if(conditionA && conditionB){
            return true;
        }else{
            return false;
        }
    }
    const checkPassword = (checkPassword:string) => {
        if(checkPassword.length >= 8) {
            return true;
        }else{
            return false;
        }
    }
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        handleLogin(email, password);
        setEmail('');
        setPassword('');
    }
    useEffect(()=>{
        checkConditions();
    },[email, password])

    return(<>
        <h1>log in</h1>
        <form onSubmit={handleSubmit} >
            <label >email</label>
            <input 
                type="text" 
                value={email} 
                onChange={(e)=>{
                    setEmail(e.target.value);
                }}
                placeholder='email' />
            <label >password</label>
            <input 
                type="text" 
                value={password}
                placeholder='password'
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                 />
            <button ref={buttonRef} type='submit'>login</button>
        </form>
    </>)
}

export default Login;