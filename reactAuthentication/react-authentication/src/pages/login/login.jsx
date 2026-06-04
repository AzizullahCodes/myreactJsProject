import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = ()=>{
    const navigate = useNavigate('');
    const [name,setName] = useState('');
        const [email,setEmail] = useState('');
        const [password,setPassword] = useState('');
        // loginHandler
        const loginHandler = ()=>{
            let getData = JSON.parse(localStorage.getItem('user'))||null;
            if(getData){
                console.log(getData)
                if(email === getData.email && password === getData.password){
                    alert('login successful');
                    navigate('/')
                }
                else{
                    alert('wrong password and email')
                }
            }
            else{
                alert('user not existed');
                navigate('/signup')
            }
            setPassword('');
            setEmail('')
        }
    return(
<div>
            <h1>I am login page</h1>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="Enter your email" 
                 onChange={(e)=>setEmail(e.target.value)}
                 value={email}/>
            </div>
            <div>
                <label htmlFor="password">password</label>
                <input type="password" placeholder="Enter your password" 
                 onChange={(e)=>setPassword(e.target.value)} 
                 value={password}/>
            </div>
            <button onClick={loginHandler} >login</button>
            

</div>    )
}
export default Login;