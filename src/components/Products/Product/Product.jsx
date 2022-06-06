import React, { useEffect } from "react";
import { useState } from "react";

const Product = () => {
  // Note: this id should come from api
  const [products,setProducts]=useState([]);
  useEffect(()=>{
    const fetchProducts=async()=>{
      fetch(" http://localhost:8080/products")
    .then((res)=>res.json())
    .then((d)=>{
      setProducts(d)
      console.log(d);

    })
    }
    fetchProducts();
  },[])
  const product = { id: 1 };
  return (
    <div >
      {products.map((el)=>(
        <div style={{boxShadow:"rgba(3, 102, 214, 0.3) 0px 0px 0px 3px",width:"25%",margin:"auto",marginTop:"30px",display:"grid",gridtemplateColumns:"1 4fr",padding:"10px"}}>
          <div data-cy={`product-${product.id}`}>
        <h3 data-cy="product-name">{el.name}</h3>
        <h6 data-cy="product-description">{el.description}</h6>
        <button data-cy="product-add-item-to-cart-button">Add to Cart</button>
        <div>
          <button data-cy="product-increment-cart-item-count-button">+</button>
          <span data-cy="product-count">
            {
              // Count here from CartItems
            }
          </span>
          <button data-cy="product-decrement-cart-item-count-button">-</button>
          <button data-cy="product-remove-cart-item-button">Remove from cart</button>
        </div>
      </div>
        </div>
      
      ))}
    </div>
   
  )
};

export default Product;

