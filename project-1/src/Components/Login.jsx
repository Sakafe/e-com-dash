import Header from "./Header";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login= () => {
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const navigate = useNavigate();
    useEffect(() => {
        if(localStorage.getItem("user-info")){
            navigate('/add');
        }
    },[]);
    async  function login(){
        let item = {email,password}
        let result = await fetch('http://localhost:8000/api/login',{
        method: "POST",
        body: JSON.stringify(item),
        headers:{
            "Content-Type":'application/json',
            "Accept": 'application/json'
        }

      })
      result = await result.json()
      localStorage.setItem("user-info", JSON.stringify(result))
      navigate('/add');
        console.log('Data :',email,password)
    }

    return (
        <>
        <Header/>
        
        <div className="col-sm-6 offset-sm-3 ">
            
            <h1>Login</h1>
            <label htmlFor="">Email :</label>
            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="e-mail"/><br/>
            <label htmlFor="">Password :</label>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="password"/><br/>
            <button onClick={login} className="btn btn-primary" >Log in</button>
        </div>
        </>
    );
};

export default Login;