import React, { useContext } from 'react'
import addbutton from '../assets/images/imgProduct/addbutton.png'
import {ShopContext} from '../context/shop-context'

export const Product = (props) => {
  
  const {id, productName, price, productImage, productDesc} = props.data;
  const {addToCart} = useContext(ShopContext);

  return (
    <div className='product'>
        {""}

        <div className='img-container'>
          <img src={productImage} alt="Imagen producto" />
        </div>

        <div className='description'>
          <div className='name-container'>
            <p>
                <b className='name'>{productName}</b>
            </p>
          </div>

          <div className='horizontal-line'></div>

          <p className='prodDesc'>{productDesc}</p>

          <div className='price-container'>
            <p>
                      <b className='price'>${price}</b>
            </p>
            <button onClick={()=> addToCart(id)}><img src={addbutton} alt="anadir a carrito" className='addimg'/></button>
          </div>

          </div>
    
    </div>
  )
}