import React from 'react'
import './PlaceOrder.css'
import img from '../../images/giphy.gif'
import { Image } from 'react-bootstrap'

export default function PlaceOrder() {
    return (
        <div className="place-order-section text-center">
            <Image src={img} fluid />
        </div>
    )
}
