import React from 'react'
import "./Product.css"
import { useStateValue } from './StateProvider';


function Product({ id,title,image,price,rating }) {

const [{ basket },dispatch] = useStateValue();
const addToBasket= () =>{
  // dispatch an item into the data layer
  dispatch({
    type:"ADD_TO_BASKET",
    item:{
      id:id,
      title:title,
      image:image,
      price: price,
      rating: rating,
    },
  });
};



  return (
    <div className="product">
        <div className="product__info">
            <p>{title}</p>
            <p className="product__price">
                <small><i>Rs.</i></small>
                <strong><i>{price}</i></strong>
            </p>
            <div className="product__rating">
            {Array(rating)
            .fill()
            .map((_, i) => (
                <p>⭐</p>
            ))}
            </div>
        </div>
        <img src={image}
        alt="Product__IMG"
        />    
        <button onClick={addToBasket}>Add to basket</button>      
    </div>
  );
}

export default Product