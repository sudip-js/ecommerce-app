import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, clearCart, decreaseCart, getTotals, removeFromCart } from "../../redux/slices/cartSlice";
import { FiPlus, FiMinus } from "react-icons/fi";
import EmprtCartImage from "../../assets/images/empty-cart-image.webp"
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { stripeCheckout } from "./actions";

const ShoppingCart = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { cart, user } = useSelector((state) => {
        const cart = state?.cart || {};
        const user = state?.auth?.user || {};
        return { cart, user }
    });

    const { isPending: isPendingStripeCheckout, mutate: mutateStripeCheckout } = useMutation({
        mutationFn: stripeCheckout,
        onSuccess: (data) => {
            console.log({ data })
        }
    })

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
    const handleCheckout = async () => {
        if (!user?.access_token) return navigate('/sign-in')
        if (!cart?.cartItems?.length) return;
        mutateStripeCheckout({
            products: cart?.cartItems,
        });
    };


    useEffect(() => {
        dispatch(getTotals());
    }, [cart, dispatch]);

    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-white">
            {cart?.cartItems?.length > 0 ? (
                <>
                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                        <div className="flex  items-center justify-between">
                            <h1 className="text-4xl my-5 font-bold  text-gray-900">Shopping Cart</h1>
                            <p></p>
                            <p>
                                <button
                                    onClick={handleClearCart}
                                    type="button"
                                    class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                >
                                    Clear Cart
                                </button>
                            </p>
                        </div>
                        <div className="flow-root">
                            <div class="relative overflow-x-auto">
                                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th scope="col" class="px-6 py-3">
                                                Product
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Price
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Quantity
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Total Price
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cart?.cartItems?.map((product) => {
                                            const { _id = "", title = "", description = "", price = "", thumbnail = "", cartQuantity = 1, size = '', color = '' } =
                                                product || {};
                                            return (
                                                <tr key={_id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                        <div className="flex gap-5">
                                                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                                <img src={thumbnail} alt={title} className="h-full w-full object-cover object-center" />
                                                            </div>
                                                            <div className="space-y-1">
                                                                <p className="text-base font-medium text-gray-900">{title}</p>
                                                                <p className="text-sm text-gray-500">Size:&nbsp;{size}</p>
                                                                <p className="text-sm text-gray-500">Color:&nbsp;{color}</p>
                                                                <p className="text-sm text-gray-500 w-72 text-wrap">{description}</p>
                                                                <p
                                                                    className="text-sm text-red-500 cursor-pointer"
                                                                    onClick={() => handleRemoveFromCart(product)}
                                                                >
                                                                    Remove
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <td class="px-6 py-4">${price}</td>
                                                    <td class="px-6 py-4">
                                                        <div class="inline-flex rounded-md shadow-sm" role="group">
                                                            <button
                                                                onClick={() => handleDecreaseCart(product)}
                                                                type="button"
                                                                class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
                                                            >
                                                                <FiMinus />
                                                            </button>
                                                            <button
                                                                type="button"
                                                                class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
                                                            >
                                                                {cartQuantity}
                                                            </button>
                                                            <button
                                                                onClick={() => handleAddToCart(product)}
                                                                type="button"
                                                                class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
                                                            >
                                                                <FiPlus />
                                                            </button>
                                                        </div>
                                                    </td>
                                                    <td class="px-6 py-4">${price * cartQuantity}</td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                            <p>Subtotal</p>
                            <p>${cart?.cartTotalAmount}</p>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                        <div className="mt-6">
                            <a
                                className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                                onClick={handleCheckout}
                            >
                                {user?.access_token ? isPendingStripeCheckout ? 'Please wait...' : 'Checkout' : "Login to Checkout"}
                            </a>
                        </div>
                        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                            <p>
                                or{" "}
                                <button onClick={() => navigate('/')} type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                                    Continue Shopping
                                    <span aria-hidden="true"> &rarr;</span>
                                </button>
                            </p>
                        </div>
                    </div>
                </>
            ) : (
                <div className="flex items-center justify-center w-[100%] h-screen">
                    <div className="flex flex-col items-center space-y-2">
                        <img className="w-1/2" src={EmprtCartImage} alt="EmprtCartImage" />
                        <p className="font-medium text-2xl">Your cart is empty!</p>
                        <p>Add items to it now.</p>
                        <button onClick={() => navigate('/')} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-20 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Shop now</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ShoppingCart;
