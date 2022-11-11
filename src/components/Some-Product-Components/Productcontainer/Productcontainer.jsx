import React from 'react'
import './Productcontainer.css'

const Productcontainer = (product) => {
    let overalltax = 10 / 100;
    let overcommission = 10 / 100;
    let extraforfun = 10 / 100;

    let mrp = parseInt(product.product.price);
    mrp = mrp + overalltax * mrp + overcommission * mrp + extraforfun * mrp
    const saleprice = mrp - extraforfun * mrp
    return (
        <div className='product-container'>
            <img src={product.product.productimage} alt="" />
            <div className='product-details'>
                <p className='producttitle'>{product.product.productTitle}</p>
                <div className='price-container'>
                    <span className='mrp'>MRP: <p className='rate'>Rs.{mrp}</p> </span>
                    <span className='saleprice'>Discount <p className='rate'>Rs.{saleprice}</p> </span>
                    <span className='yousave'>You Save: Rs.{mrp - saleprice} </span>
                </div>
                <div className='buy-cart'>
                    <button className='btn'>Buy Now</button>
                    <button className='btn'>Add to cart</button>
                </div>
            </div>


        </div >
    )
}

export default Productcontainer