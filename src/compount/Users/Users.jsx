import 'bootstrap/dist/css/bootstrap.min.css';

import Card from 'react-bootstrap/Card';
import './Users.css'
import { useEffect, useState } from "react";


function Users ()
{



    
    const [products,setproducts ]=useState([]);



    useEffect(()=>
{
 getproduct();
},[]);

const getproduct = ( )=>
{
    fetch('http://localhost:8080')
    .then(res=>res.json())
    .then(json=>setproducts(json))

}



return (

<div>

    <h1>Users</h1>
<div className="d">
    {products.map(item=>
        {
              return(  
           <div key={item.id} className="card">
                <Card  style={{ width: '18rem' }}>
                
                <Card.Body>
                    
                <Card.Title>Id : {item.id}</Card.Title>
                  <Card.Title>Name : {item.name}</Card.Title>
                  <Card.Title>email: {item.email}</Card.Title>
                  <Card.Title>Gender : {item.gender}</Card.Title>
                  

                  
                </Card.Body>
              </Card>
              </div>
              
              )

        } )}
        </div>

</div>

)





}

export default Users; 