import './Product.css'
import Rating from "react-rating";
import { FaCartPlus } from 'react-icons/fa';
const Product = (props) => {
    const {img, name, price, category, features, seller, url, stock, star} = props.SingleProduct
    
    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4 p-4">
                    <img src={img} className="img-fluid rounded-start" alt={name} />
                </div>
                <div className="col-md-8 p-4">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <div className="row">
                            <div className="col-md-8">
                                <p className="card-text">Seller: {seller}</p>
                                <p className="card-text">Category: {category}</p>
                                <p className="card-text">Price: ${price}</p>
                                <p className="card-text mb-2">only {stock} left in stock - order soon</p>
                            </div>
                            <div className="col-md-4">
                                <Rating
                                    readonly
                                    initialRating={star}
                                    emptySymbol="far fa-star rating-color"
                                    fullSymbol="fas fa-star rating-color"
                                ></Rating>
                                <h5>Features</h5>
                            </div>
                        </div>
                    <button onClick={() => props.addToCartHandle(props.SingleProduct)} className='btn btn-primary'>Add to cart <FaCartPlus/></button>
                        <a target='_blank' href={url} className='btn btn-success ml-3'>See Orginal Product</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Product
