import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const SignUp = ()=>{
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

     const navigate = useNavigate('');
    // userHandler function
    const userHandler = ()=>{
       
        //create an object for storing data in localstorae 
        let obj = {
            name,
            email,
            password
        }
        console.log(obj)
        // handling localstorage 
        let getUser = JSON.parse(localStorage.getItem('user'))||null;
        if(!getUser){
            localStorage.setItem('user',JSON.stringify(obj));
            alert('succefully signup')
        }
        else{
            alert('user already existed');
            navigate('/login');
           
            
        }
        console.log(getUser)

        //clear all inputs;
        setName('');
        setEmail('');
        setPassword('');
    }
    
    return(
        
        <div>
            <h1>I am sign up page</h1>
            <div>
                <label htmlFor="Name">Name</label>
                <input type="text" placeholder="Enter your name" 
                onChange={(e)=>setName(e.target.value)}
                value={name}/>
            </div>
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
            <button onClick={userHandler}>signup</button>
        </div>
    )
}
export default SignUp;