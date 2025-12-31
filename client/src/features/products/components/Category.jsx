import { categories } from '/src/config/categories';

const Category = () => {
    return (
        <>
            <div class="mx-auto max-w-7xl py-6">
                <h2 className='text-3xl font-bold mb-6'>ShOP BY CATEGORY</h2>
                <div class="grid grid-cols-6 gap-4">
                    {categories.map((categorie) => (
                        <div class="flex flex-col items-center overflow-hidden bg-white">
                            <a
                                key={categorie.id}
                                href={categorie.url}
                                className=""
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={categorie.name}
                            >
                                <div class="w-full flex-grow overflow-hidden bg-gray-100  rounded-sm">
                                    <img
                                        src={categorie.image}
                                        alt="产品图"
                                        class="w-full aspect-square object-cover"
                                    />
                                </div>
                                <div class="w-full py-2 px-1  bg-white">
                                    <span class="text-xs sm:text-sm font-medium text-gray-800 truncate block">
                                        {categorie.name}
                                    </span>
                                </div>
                            </a>
                        </div>
                    ))}


                </div>
            </div>
        </>
    )
}
export default Category