import { useState } from "react";
import { Table } from "react-bootstrap";

const SearchProducts = () => {
    const [data,setData] = useState([]);
   async function search(key){
      console.log(key);
      let result =await fetch('http://localhost:8000/api/search/'+key);
       result = await result.json();
       setData(result)
       console.log(result);
    }
    return (
      <div>
        <h1 style={{textAlign:'center'}}>Search Product</h1><br/>
        <div className='col-sm-6 offset-sm-3' ><br/>
              <input className='form-control' onChange={(e)=>search(e.target.value)} type="text" placeholder='search'/><br/>
             
              <Table>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Price</th>
                <th>Description</th>
                <th>Image</th>
                
            </tr>
            {
            data.map((item)=>(
                
                <>
                   <tr style={{fontSize:'large'}}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.description}</td>
                        <img style={{width:'100px'}} src={'http://localhost:8000/'+item.file_path}alt="" />          
                   </tr>

                </>
            ))
               }
            
           
           </Table>
        </div>
      </div>
    );
};

export default SearchProducts;