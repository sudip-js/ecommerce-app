import { useLocation, useNavigate } from "react-router-dom";
import { fetchCategory } from "./actions";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";

const removeSpaceFromURL = (url) => url?.replaceAll(' ', '-');
const removeSlashFromURL = (url) => url.replaceAll('/', '');


const ProductList = ({ setApiResponse = () => { } } = {}) => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const category_id = pathname.replace('/', '');
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
        const { category = '', title = '' } = product || {};
        navigate(`/${removeSpaceFromURL(removeSlashFromURL(category))}/${removeSpaceFromURL(removeSlashFromURL(title))}`, {
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
                        const { _id = '', thumbnail = "", title = '', price = '', rating = 5 } = product || {};
                        return (
                            <div key={_id} className="group relative cursor-pointer" onClick={() => handleNavigate(product)}>
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
                                        <p className="mt-1 text-sm text-gray-500">{rating || 5} Star(Rating)</p>
                                    </div>
                                    <p className="text-sm font-medium text-gray-900">${price}</p>
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
