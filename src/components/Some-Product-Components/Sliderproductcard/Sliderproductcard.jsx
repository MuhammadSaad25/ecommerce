import React from 'react'
import './Sliderproductcard.css'

const Sliderproductcard = (product) => {
    let overalltax = 10 / 100;
    let overcommission = 10 / 100;
    let extraforfun = 10 / 100;

    let mrp = parseInt(product.product.price);
    mrp = mrp + overalltax * mrp + overcommission * mrp + extraforfun * mrp
    const saleprice = mrp - extraforfun * mrp
    return (
        <div className='mini-product-container'>
            <div className='mini-img-container'>
                <img src={product.product.productimage} alt="" />
            </div>
            <div className='mini-product-details'>
                <p className='mini-producttitle'>{product.product.productTitle}</p>
                <div className='mini-price-container'>
                    <span className='mrp'>MRP: <p className='rate'>Rs.{mrp}</p> </span>
                    <span className='saleprice'>Discount Price: <p className='rate'>Rs.{saleprice}</p> </span>
                    <p className='yousave'>You Save: Rs.{mrp - saleprice} </p>
                </div>
                <button className='showmore-btn'>Show More &gt;</button>
            </div>
        </div>
    );
}

export default Sliderproductcard