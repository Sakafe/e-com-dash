import { useState } from 'react';
import Header from './Header'
import { useNavigate } from 'react-router-dom';
const AddProduct = () => {
    const Navigate = useNavigate();
    const [name,setName] = useState();
    const [file,setFile] = useState();
    const [price,setPrice] = useState();
    const [description,setDescription] = useState();
    async function addproduct(){
        console.log(name,file,price,description)
        const formData = new FormData();
        formData.append('file',file);
        formData.append('name',name);
        formData.append('price',price);
        formData.append('description',description);
        let result = await fetch("http://localhost:8000/api/addproduct",{
            method: 'POST',
            body: formData 
            
        });
        console.log(result);
        alert('Data has been added.');
        Navigate('/productList')
    }
    return (
        <div>
            <Header/>
            <div className='col-sm-6 offset-sm-3' ><br/>
              <input className='form-control' onChange={(e)=>setName(e.target.value)} type="text" placeholder='name'/><br/>
              <input className='form-control' onChange={(e)=>setFile(e.target.files[0])} type="file" placeholder='file'/><br/>
              <input className='form-control' onChange={(e)=>setPrice(e.target.value)} type="text" placeholder='price'/><br/>
              <input className='form-control' onChange={(e)=>setDescription(e.target.value)} type="text" placeholder='Description'/><br/>
              <button className='btn btn-primary' onClick={addproduct}>Add Button</button>
            </div>
        </div>
    );
};

export default AddProduct;