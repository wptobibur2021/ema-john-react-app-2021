import './Shop.css'
import {useState, useEffect} from 'react'
import Product from '../Product/Product'
import Cart from '../Cart/Cart'
import {addToDb, getStoredCart} from "../../utilities/fakedb";
import {Button, FormControl, InputGroup} from "react-bootstrap";
import useCart from '../../hooks/useCarts';
import { NavLink } from 'react-router-dom';

const Shop = () =>  {
    /* Products UseState */
    const [products, setProducts] = useState([])

    /* Cart UseState */
    const [cart, setCart] = useCart(products)

    /* Filter Product UseState */
    const [searchProduct, setSearchProduct] = useState([])

    useEffect(()=>{
        fetch('./products.JSON')
        .then(res=>res.json())
        .then(data=>{
            setProducts(data)
            setSearchProduct(data)
        })
    }, [])

    /* Add To  Cart Product Handle Function */
    const handleAddToCart = (product) =>{
        const exit = cart.find(c => c.key === product.key)
        let newCart = []
        if(exit){
            const rest = cart.filter(c => c.key !== product.key)
            exit.qty +=1
            newCart = [...rest, product]
        }else{
            product.qty = 1
            newCart = [...cart, product]
        }
        //const newCart = [...cart, product]
        setCart(newCart)
        addToDb(product.key)
        //console.log('Local Storage: ', )
    }

    const handleSearch = e =>{
        // console.log('Search Value: ', e.target.value)
        const searchText = e.target.value
        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()))
        if(matchedProducts.length > 0){
            /* Search Product Set to State */
            setSearchProduct(matchedProducts)
        }else{
            console.log('No Product Find')
        }
        /* Search Products Length */
        console.log('Search result Length: ', matchedProducts.length)
    }

    return (
        <>
            <div className="search-section">
                <div className="container p-5">
                    <div className="row">
                        <div className="col-md-8">
                            <div className='search-section'>
                                <InputGroup className="mb-3">
                                    <FormControl
                                        placeholder="Recipient's username"
                                        onChange={handleSearch}
                                    />
                                    <Button variant="outline-secondary" id="button-addon2">
                                        Button
                                    </Button>
                                </InputGroup>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="cart-product">
                                ready!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='shop-section'>
                <div className="container p-5">
                    <div className="row">
                        <div className='col-md-9'>
                            {

                                searchProduct.map(product => <Product
                                    key={product.key}
                                    SingleProduct={product}
                                    addToCartHandle={handleAddToCart}
                                >
                                </Product> )
                            }
                        </div>
                        {/* Cart Component Call Here */}
                        <Cart cart={cart}>
                            <NavLink to="/order-review" className="btn btn-secondary mt-3">Review Order</NavLink>
                        </Cart>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Shop
