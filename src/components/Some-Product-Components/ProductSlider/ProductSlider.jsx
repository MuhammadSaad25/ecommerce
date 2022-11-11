import React, { useState, useEffect } from 'react'
// import './ProductSlider.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Sliderproductcard from '../Sliderproductcard/Sliderproductcard'
import { collection, query, onSnapshot, getDocs, QuerySnapshot } from 'firebase/firestore'
import { db } from '../../../firebaseConfigs/firebaseConfigs'


const ProductSlider = (props) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const getProducts = () => {
            const productsArray = [];
            const path = `products-${props.type.toUpperCase()}`;
            // console.log(path);
            getDocs(collection(db, path)).then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    productsArray.push({ ...doc.data(), id: doc.id })
                    console.log(doc.id, "=>", doc.data());
                })
                setProducts(productsArray)
            }).catch((error) => {
                console.log(error.message);
            })
        }
        getProducts()
    }, [])

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div>
            <Carousel responsive={responsive}>
               {products.map((product)=>
               (<Sliderproductcard key={product.id}product={product}/>))}
            </Carousel>;
        </div>
    );
}

export default ProductSlider