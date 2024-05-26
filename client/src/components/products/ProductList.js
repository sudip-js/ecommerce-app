import { useLocation, useNavigate } from "react-router-dom";
import { fetchCategory } from "./actions";
import { useQuery } from "@tanstack/react-query";

const removeSpaceFromURL = (url) => url?.replaceAll(' ', '-')

const ProductList = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const category_id = pathname.replace('/', '');
    const { data: productsData = {} } = useQuery({
        queryKey: ['fetchCategory', category_id],
        queryFn: () => fetchCategory({ category_id }),
        select: data => data?.data,
        enabled: !!category_id
    });
    const handleNavigate = (product) => {
        const { category = '', title = '' } = product || {};
        console.log({ product })
        navigate(`/${removeSpaceFromURL(category)}/${removeSpaceFromURL(title)}`, {
            state: {
                product
            }
        })
    }

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-0 sm:px-6 sm:py-0 lg:max-w-7xl lg:px-8">
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                    {productsData?.data?.map((product) => {
                        const { _id = '', thumbnail = "", title = '', price = '' } = product || {};
                        return (
                            <div key={_id} className="group relative" onClick={() => handleNavigate(product)}>
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                    <img
                                        src={thumbnail}
                                        alt={title}
                                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                    />
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-sm text-gray-700">
                                            <a>
                                                <span aria-hidden="true" className="absolute inset-0" />
                                                {title}
                                            </a>
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">RED</p>
                                    </div>
                                    <p className="text-sm font-medium text-gray-900">{price}</p>
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
