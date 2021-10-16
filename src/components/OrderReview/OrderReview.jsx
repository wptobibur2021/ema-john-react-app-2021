import React from 'react'
import './OrderReview.css'
import useProducts from '../../hooks/useProducts'
import useCarts from '../../hooks/useCarts'
import Cart from '../Cart/Cart'
import ReviewItem from './ReviewItem'
import { deleteFromDb, clearTheCart } from '../../utilities/fakedb'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router'

export default function OrderReview() {
    const [products, setProducts] = useProducts()
    //console.log('Product length: ', products.length)
    const [cart, setCart] = useCarts(products)
    //console.log('Products Cart: ', cart.length)

    const history = useHistory()

    const handleRemoveItem = (key) =>{
        const newCart = cart.filter(c => c.key !== key)
        console.log('New Cart: ', newCart)
        setCart(newCart)
        deleteFromDb(key)
    }

    const handlePlaceOrder = () =>{
        history.push('/place-order')
        setCart([])
        clearTheCart()
    }

    return (
        <React.Fragment>
            <div className="order-review-sections">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            {
                                cart.map(p => <ReviewItem key={p.key} handle={handleRemoveItem} product={p}></ReviewItem>)
                            }
                        </div>
                        <Cart cart={cart}>
                            <Button onClick={handlePlaceOrder} className="btn btn-danger mt-3">Place Order</Button>
                        </Cart>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
