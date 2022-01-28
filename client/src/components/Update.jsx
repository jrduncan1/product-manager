import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

const Update = (props) => {
    let history = useHistory();

    // grabs id variable from url
    const { id } = useParams();

    // STATE VARIABLES
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id)
            .then(res => {
                console.log(res.data)
                setTitle(res.data.title)
                setPrice(res.data.price)
                setDescription(res.data.description)
            })
            .catch(err => console.log(err))
    }, [])

    const updateProduct = (e) => {
        e.preventDefault();
        // updates object with data from form
        const newProduct = {
            title,
            price,
            description
        }

        // updates database with the updated object
        axios.put("http://localhost:8000/api/products/" + id, newProduct)
            .then(res => {
                console.log(res.data)
                history.push("/")
            })
            .catch(err => console.log(err))
    }

    return (
        <div class="mb-5">
            <form onSubmit={updateProduct} class="form-control">
                <h5>Update Product:</h5>
                <div class="d-flex flex-column">
                    <div>
                        <label for="title">Title</label>
                        <input onChange={e => setTitle(e.target.value)} value={title} type="text" class="ms-3" />
                    </div>
                    <div class="mt-2">
                        <label for="price">Price</label>
                        <input onChange={e => setPrice(e.target.value)} value={price} type="text" class="ms-3" />
                    </div>
                    <div class="mt-2">
                        <label for="description">Description</label>
                        <input onChange={e => setDescription(e.target.value)} value={description} type="text" class="ms-3" />
                    </div>
                </div>
                <button className="btn btn-warning mt-3">Update!</button>
            </form>
        </div>
    )
}

export default Update;