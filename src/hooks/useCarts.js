import { useState, useEffect } from "react"
import { getStoredCart } from "../utilities/fakedb"
const useCart = products =>{
    const [cart, setCart] = useState([])
    useEffect(() => {
        const savedCart = getStoredCart();
        const storedCart = [];
        if (products.length) {
            for (const key in savedCart) {
                const addedProduct = products.find(product => product.key === key);
                if (addedProduct) {
                    // set quantity
                    const quantity = savedCart[key];
                    addedProduct.qty = quantity;
                    storedCart.push(addedProduct);
                }
            }
            setCart(storedCart);
        }

    }, [products]);
    return [cart, setCart]
}

export default useCart