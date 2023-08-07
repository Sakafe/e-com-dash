import { useNavigate, useParams } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";


const UpdateList = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [data,setData] = useState([]);

    const [name,setName] = useState();
    const [file,setFile] = useState();
    const [price,setPrice] = useState();
    const [description,setDescription] = useState();
    
    useEffect(()=>{
       axios.get('http://localhost:8000/api/product/'+ id)
       .then(res=> {setData(res.data), console.log('product',res)})
       .catch(err => console.log(err));
       setName(data.name)
       setPrice(data.price)
       setDescription(data.description)
       setFile(data.file_path)
    },[]);

    async function updateProduct(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('file',file);
        formData.append('name',name);
        formData.append('price',price);
        formData.append('description',description);
        let result = await fetch("http://localhost:8000/api/updateproduct/"+id,{
            method: 'POST',
            body: formData 
            
        });
        console.log(result);
        alert('Data has been updated.')
        navigate('/productList')
        console.log('pdct1:',name,price,description)
    }
        
      
    
    return (
        <div>
            <Header/>
            <h1 style={{textAlign:"center"}}>Updated Form</h1>
            <div className="col-md-6 offset-sm-3">
                {/* <input type="text" defaultValue={data.id} name="id" onChange={(e)=>setName(e.target.value)}
                className="form-control" /><br/> */}

                <input type="text" defaultValue={data.name} name="name" onChange={(e)=>setName(e.target.value)}
                className="form-control" placeholder="name" /><br/>

                <input type="text" defaultValue={data.price} name="price" onChange={(e)=>setPrice(e.target.value)}
                className="form-control" /><br/>

                <input type="text" defaultValue={data.description} name="description" onChange={(e)=>setDescription(e.target.value)}
                className="form-control" /><br/>

                <input type="file" defaultValue={data.file_path} name="file_path" onChange={(e)=>setFile(e.target.files[0])}
                className="form-control" /><br/>
                 
                 <img style={{width:'100px'}} src={'http://localhost:8000/'+data.file_path}alt="" />

                <button onClick={updateProduct} className="btn btn-info">Update</button>
            </div>
        </div>
    );
};

export default UpdateList;