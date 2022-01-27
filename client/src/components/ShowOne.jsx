import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ShowOne = (props) => {
    // grab var name from url
    const {id} = useParams();

    const [thisProduct, setThisProduct] = useState({});

    useEffect( () => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                console.log(res.data)
                setThisProduct(res.data)
            })
            .catch(err => console.log(err))
    },[])

    return (
        <div>
            <h3>{thisProduct.title}</h3>
            <p><strong>Price:</strong> {thisProduct.price}</p>
            <p><strong>Description:</strong> {thisProduct.description}</p>
        </div>
    )
}

export default ShowOne;