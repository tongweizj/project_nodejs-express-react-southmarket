// src/features/products/components/HeroBanner.jsx
import { ad } from '@/config/ad';

export const HeroBanner = () => (
  <div className="w-full bg-black grid items-center justify-between mx-auto max-w-7xl px-4 sm:px-6 lg:px-0 rounded-sm">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-0">
                    <div className="flex flex-col lg:flex-row text-white">
                        {/* Left content */}
                        <div className="lg:w-1/3 p-8 md:p-12 flex flex-col justify-center">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                {ad.banner[0].title}
                            </h2>
                            <p className="text-lg mb-6 leading-relaxed">
                                {ad.banner[0].subtitle}
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <a href={ad.banner[0].url}>
                                    <button className="px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg">
                                        <i className="fas fa-rocket mr-2"></i> Shop Now
                                    </button>
                                </a>
                            </div>
                        </div>

                        {/* Right image */}
                        <div className="lg:w-2/3 flex items-center justify-center h-[400px] overflow-hidd">
                            <img
                                src= {ad.banner[0].image}
                                alt="Desk mat product showcase"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
);

