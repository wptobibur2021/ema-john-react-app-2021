import React from 'react'

export default function ReviewItem(props) {
    console.log(props)
    const {img, name, price, category, qty, url, stock, key} = props.product
    const {handle} = props
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
                            <p className="card-text">Quantity: {qty}</p>
                            <p className="card-text">Category: {category}</p>
                            <p className="card-text mb-3">Price: ${price}</p>
                        </div>
                        <div className="col-md-4">
                            <h5>Features</h5>
                        </div>
                    </div>
                    <button onClick= {()=> handle(key)} className='btn btn-primary'>Remove</button>
                    <a target='_blank' href={url} className='btn btn-success ml-3'>See Orginal Product</a>
                </div>
            </div>
        </div>
    </div>
    )
}
