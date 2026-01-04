import { Link } from 'react-router-dom';
const ProductCard = ({ item }) => {
    return (
        <div class="flex flex-col items-center overflow-hidden bg-white">

            <Link to={`/product/${item._id}`}>
                <div class="w-full flex-grow overflow-hidden bg-gray-100  rounded-sm">
                    <img
                        src={`/${item.images[0]}`}
                        alt="产品图"
                        class="w-full aspect-square object-cover"
                    />
                </div>
                <div class="w-full py-1 px-1  bg-white">
                    <span class="text-2xl sm:text-sm font-bold text-gray-800 truncate">
                        {item.title}
                    </span>
                </div>
                <div class="w-full py-1 px-1  bg-white">
                    <span class="text-3xl font-bold sm:text-sm text-gray-800 truncate block">
                        ${item.price}
                    </span>

                </div>
                <div class="w-full flex pt-4 px-1  bg-white gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-suitcase-lg-fill" viewBox="0 0 16 16">
                        <path d="M7 0a2 2 0 0 0-2 2H1.5A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14H2a.5.5 0 0 0 1 0h10a.5.5 0 0 0 1 0h.5a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2H11a2 2 0 0 0-2-2zM6 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1zM3 13V3h1v10zm9 0V3h1v10z" />
                    </svg>
                    <span class="text-xs sm:text-sm font-medium text-gray-800 truncate block">
                        New Arrival
                    </span>

                </div>
                <div class="w-full py-0 px-1  bg-white">
                    <span class="text-xs sm:text-sm font-medium text-gray-800 truncate block">
                        Free Returns in USA
                    </span>

                </div>
            </Link>
        </div>
    )
};
export default ProductCard;