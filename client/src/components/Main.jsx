import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link, useHistory} from 'react-router-dom';

const Main = (props) => {
    let history = useHistory();

    // STATE VARIABLES
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [products, setProducts] = useState([]);

    // (2) call the function
    useEffect( () => {
        retrieveAllProducts()
    },[])

    const retrieveAllProducts = () => {
        axios.get("http://localhost:8000/api/products")
            .then(res => {
                console.log(res.data)
                setProducts(res.data)
            })
            .catch(err => console.log(err))
    }

    const createProduct = (e) => {
        e.preventDefault();

        // create a new object from the form
        const newProduct = {
            title,
            price,
            description
        }

        // post to the database w/ created object
        axios.post("http://localhost:8000/api/products", newProduct)
            .then(res => {
                console.log(res.data)
                history.push("/")
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <div class="mb-5">
                <form onSubmit={createProduct} class="form-control">
                    <h5>Create Product:</h5>
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
                    <button className="btn btn-warning mt-3">Create!</button>
                </form>
            </div>
            <h4>All Products:</h4>
            {
                products.map((product, idx) => {
                    return (
                        <div>
                            <table class="table table-sm">
                                <tr>
                                    <td>
                                        <Link to={"/products/" + product._id}>{product.title}</Link>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Main;