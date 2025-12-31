import { ad } from '@/config/ad';
const TopSales = () => {
    return (
        <>
            <div className="w-full bg-white grid items-center justify-between mx-auto max-w-7xl px-4 mt-5 sm:px-6 lg:px-0">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-0">
                    <div className="flex flex-col lg:flex-row text-white">

                        {ad.topsale.map((item) => (
                            <div className="relative w-1/2 h-[420px] overflow-hidden rounded-lg  mr-6 ">
                                <img
                                    src={item.image}
                                    alt="Desk mat product showcase"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/30"></div>
                                <div className="absolute inset-0 flex flex-col items-center justify-start p-6">
                                    <h2 className="text-white text-3xl font-bold text-center mt-6">{item.name}</h2>
                                    <div className="flex flex-wrap gap-4 justify-center mt-6">
                                        <a href={ad.banner[0].url}>
                                            <button className="px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-blue-700 hover:text-white transition-colors shadow-md hover:shadow-lg">
                                                <i className="fas fa-rocket mr-2"></i> Shop Now
                                            </button>
                                        </a>
                                        
                                    </div>
                                </div>
                            </div>
                        ))}


                    </div>
                </div>
            </div>
        </>
    )
}
export default TopSales;