import './Cart.css'
import { Card, ListGroup } from 'react-bootstrap';
const Cart = (props) => {
    // console.log('Props: ',props)
    const {cart} = props
    console.log('Cart:', props)
    let totalQty = 0;
    let total=0;
    for(const product of cart){
        if(!product.qty){
            product.qty = 1
        }
        total =  total+ product.price * product.qty
        totalQty = totalQty + product.qty
    }
    const shipping = total > 0 ? 15 : 0;
    const tax = (shipping + total) * 0.10
    const grandTotal = total + shipping + tax

    return (
        <div className="col-md-3">
            <div className="cart-items-list">
                <Card style={{ width: '18rem' }}>
                    <Card.Header>Order Summary</Card.Header>
                    <Card.Title>Items ordered: {totalQty}</Card.Title>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Shipping: ${shipping}</ListGroup.Item>
                        <ListGroup.Item>Total before tax: ${total.toFixed(2)}</ListGroup.Item>
                        <ListGroup.Item>Estimated Tax: ${tax.toFixed(2)}</ListGroup.Item>
                        <ListGroup.Item>Grand Total: ${grandTotal.toFixed(2)}</ListGroup.Item>
                    </ListGroup>
                    
                </Card>
                {props.children}
            </div>
        </div>
    )
}
export default Cart 
