import { useLocation, useNavigate } from "react-router-dom";
import { fetchCategory } from "./actions";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";

const ProductList = ({ setApiResponse = () => { } } = {}) => {
    const navigate = useNavigate();
    const { state, pathname } = useLocation();
    const category_id = state?.category_id;
    const { sortOption = {} } = useSelector(({ common }) => common)
    const { data: productsData = {} } = useQuery({
        queryKey: ['fetchCategory', category_id, sortOption?.sort, sortOption?.sort_by],
        queryFn: () => fetchCategory({ category_id, sort_by: sortOption?.sort_by || undefined, sort: sortOption?.sort || undefined }),
        select: (data) => {
            setApiResponse(data?.data?.data);
            return data?.data
        },
        enabled: !!category_id
    });
    const handleNavigate = (product) => {
        const url = product?.title?.trim()?.toLowerCase()?.replace(/ /g, '-');
        navigate(`${pathname}/${url}`, { state: { product } })
    }


    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-0 sm:px-6 sm:py-0 lg:max-w-7xl lg:px-8">
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                    {productsData?.data?.map((product) => {
                        const { _id = '', thumbnail = "", title = '', brand = '', discounted_price = '', total_price = '', discount_percentage = '' } = product || {};
                        return (
                            <div key={_id} className="group relative cursor-pointer" onClick={() => handleNavigate(product)}>
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                    <img
                                        src={thumbnail}
                                        alt={title}
                                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                    />
                                </div>
                                <div className="mt-1 flex justify-between">
                                    <div>
                                        <p className="font-semibold text-gray-500">{brand}</p>
                                        <p className="font-medium text-gray-800">{title}</p>
                                        <div className="space-x-3">
                                            <span className="text-black font-semibold">${discounted_price}</span>
                                            <del className="text-gray-500">${total_price}</del>
                                            <span className="text-green-600 font-medium text-sm">{discount_percentage}% off</span>
                                        </div>
                                        <span className="text-sm font-medium text-black">Free delivery</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default ProductList;
