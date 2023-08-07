import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const Register = () => {
    useEffect(() => {
        if(localStorage.getItem("user-info")){
            navigate('/add');
        }
    },[]);
    const [id,setId] = useState();
    const[name,setName] = useState();
    const[email,setEmail] = useState();
    const[password,setPassword] = useState();
    const navigate = useNavigate();
   async function signUp()
   {
    let user = {id,name,email,password}
      console.warn(user);
      let result = await fetch('http://localhost:8000/api/register',{
        method: "POST",
        body: JSON.stringify(user),
        headers:{
            "Content-Type":'application/json',
            "Accept": 'application/json'
        }

      })
      result = await result.json()
      localStorage.setItem("user-info", JSON.stringify(result))
      navigate('/add');

    //   console.warn("result:",result);

   }

    return (
        <>
        <Header/>
        <div className="col-sm-6 offset-sm-3 ">
            <h1>Register page</h1>
            <label htmlFor="">ID :</label>
            <input type="number" value={id} onChange={(e)=>setId(e.target.value)} className="form-control" placeholder="id" /><br/>
            <label htmlFor="">Name :</label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="name"/><br/>
            <label htmlFor="">Email :</label>
            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="e-mail"/><br/>
            <label htmlFor="">Password :</label>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="password"/><br/>
            <button className="btn btn-primary" onClick={signUp}>Sign up</button>
        </div>
        </>
    );
};

export default Register;