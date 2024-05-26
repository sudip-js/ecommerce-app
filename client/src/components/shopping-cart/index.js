import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react'
import { fetchCartsItems } from './actions';
import { useSelector } from 'react-redux';


const ShoppingCart = () => {
    const queryClient = useQueryClient();
    const { user } = useSelector(({ auth }) => auth);
    const [quantity, setQuantity] = useState([])
    const [open, setOpen] = useState(true);
    const { isLoading: isLoadingCartItems, data: dataCartItems = {} } = useQuery({
        queryKey: ['fetchCartsItems'],
        queryFn: () => fetchCartsItems({ user_id: user?._id }),
        enabled: !!user?._id,
        select: data => data?.data
    });

    const handleRemoveItem = (product_id) => {
        console.log({ product_id })
    }



    const handleChangeQty = (e, idx) => {
        let tempArr = [...quantity];
        tempArr[idx].quantity = +e?.target?.value;
        setQuantity([...tempArr])
    }

    useEffect(() => {
        let tempArr = [];
        if (dataCartItems?.data) {
            dataCartItems?.data?.items?.forEach((item) => {
                tempArr.push({
                    id: item?._id,
                    quantity: item?.quantity
                })
            })
        }
        setQuantity([...tempArr])
    }, [])



    console.log({ dataCartItems, quantity })

    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-white">
            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                <h1 className="text-4xl my-5 font-bold tracking-tight text-gray-900">Cart</h1>

                <div className="flow-root">
                    <ul role="list" className="-my-6 divide-y divide-gray-200">
                        {dataCartItems?.data?.items?.map((product, idx) => (
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
