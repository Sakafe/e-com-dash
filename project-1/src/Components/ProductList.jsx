import { useEffect, useState } from "react";
import Header from "./Header";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductList = () => {
    const [data,setData] = useState([]);
      function getData(){
        fetch('http://localhost:8000/api/list')
        .then(response => response.json())
        .then(result => setData(result))
      }

    useEffect(()=>{
       getData();
    },[]);
    console.log("result:",data);

    const deleteProduct =async (id) =>{
       let result = await fetch("http://localhost:8000/api/delete/"+id,{
        method: 'DELETE',
       })
       result =  await result.json();
       getData();
       console.log(result);
    }
 
    return (
        <div style={{background:"#c44569"}}>
           <Header/> 
           <div className="d-flex m-3">
           <input type="text" className='form-control' placeholder='Search product' />
                <button className='btn btn-success'>Search</button>
           </div>
           <h1 style={{textAlign:'center'}}>product List</h1>
           <div className="col-sm-6 offset-sm-3">
           <Table>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Price</th>
                <th>Description</th>
                <th>Image</th>
                <th>Operation</th>
            </tr>
            {
            data.map((item)=>(
                
                <>
                   <tr style={{fontSize:'large',color:'white'}}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.description}</td>
                        <img style={{width:'100px'}} src={'http://localhost:8000/'+item.file_path}alt="" />
                        <td><span onClick={()=>deleteProduct(item.id)} style={{

                                         backgroundColor:'#c0392b',
                                         color:'white',
                                         borderRadius:'5px',
                                         marginLeft:'15px',
                                         cursor:'pointer',

                                         }}>Delete</span></td>
                        <td><Link to={"/updateProduct/"+item.id}
                             style={{

                                backgroundColor:'#27ae60',
                                textDecoration:'none',
                                color:'white',
                                borderRadius:'5px',
                                marginLeft:'15px',
                                cursor:'pointer',

                                }}
                        ><span>Update</span></Link></td>                 
                   </tr>

                </>
            ))
               }
            
           
           </Table>
           </div>
           
        </div>
    );
};

export default ProductList;