import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, clearCart, decreaseCart, getTotals, removeFromCart } from '../../redux/slices/cartSlice';


const ShoppingCart = () => {
    const [quantity, setQuantity] = useState([])
    const [open, setOpen] = useState(true);
    const dataCartItems = {}

    const handleRemoveItem = (product_id) => {
        console.log({ product_id })
    }



    const handleChangeQty = (e, idx) => {
        console.log({ e, idx })
    }


    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTotals());
    }, [cart, dispatch]);

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };
    const handleDecreaseCart = (product) => {
        dispatch(decreaseCart(product));
    };
    const handleRemoveFromCart = (product) => {
        dispatch(removeFromCart(product));
    };
    const handleClearCart = () => {
        dispatch(clearCart());
    };






    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-white">
            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                <h1 className="text-4xl my-5 font-bold tracking-tight text-gray-900">Cart</h1>

                <div className="flow-root">
                    <ul role="list" className="-my-6 divide-y divide-gray-200">
                        {cart?.cartItems?.map((product, idx) => (
                            <li key={product._id} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                    <img
                                        src={product.thumbnail}
                                        alt={product.title}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                    <div>
                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                            <h3>
                                                <a>{product.title}</a>
                                            </h3>
                                            <p className="ml-4">${product.price}</p>
                                        </div>
                                        <p className="mt-1 text-sm text-gray-500">{product.color || 'RED'}</p>
                                    </div>
                                    <div className="flex flex-1 items-end justify-between text-sm">
                                        <div className="text-gray-500">
                                            <label className="inline-block mr-5 text-sm font-medium leading-6 text-gray-900">
                                                Qty
                                            </label>
                                            <select onChange={(e) => handleChangeQty(e, idx)} value={quantity?.[idx]?.quantity}>
                                                {new Array(10).fill('').map((_, index) => <option value={index + 1} key={index + 1}>{index + 1}</option>)}
                                            </select>
                                        </div>

                                        <div className="flex">
                                            <button
                                                type="button"
                                                className="font-medium text-indigo-600 hover:text-indigo-500"
                                                onClick={() => handleRemoveItem(product?._id)}
                                            >Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>${dataCartItems?.data?.sub_total}</p>
                </div>
                <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                <div className="mt-6">
                    <a
                        href="#"
                        className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                    >
                        Checkout
                    </a>
                </div>
                <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>
                        or{' '}
                        <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={() => setOpen(false)}
                        >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                        </button>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCart;
