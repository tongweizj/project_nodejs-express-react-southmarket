import { useNavigate, NavLink, Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
const Header = () => {
    const { isAuthenticated, user, logout } = useAuth();
    const handleLogout = () => {
    logout();
    navigate("/");
  };
    return (
        <>
            <div>
                {/* 顶部横幅 */}
                <div id="top_banner" className="flex items-center justify-center bg-black w-full h-12">
                    <div className="text-center py-4 lg:px-4">
                        <div className="p-2 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex" role="alert">
                            <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">New</span>
                            <span className="font-semibold mr-2 text-left flex-auto">Get the coolest t-shirts from our brand new store</span>
                            <svg className="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* 导航栏 - 简化版 */}
                <nav className="w-full bg-white flex justify-center">
                    <div className="w-full max-w-7xl px-4">
                        <div className="grid grid-cols-6  items-center h-16">
                            {/* 左侧logo */}

                            <NavLink
                                to="/"
                                className=""
                                activeClassName="active"
                            ><div className="flex items-center mr-1">
                                    <svg className="h-8 w-8 text-black mr-2" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
                                    </svg>
                                    <span className="font-semibold text-xl tracking-tight">Drop</span>
                                </div>
                            </NavLink>



                            {/* 桌面导航菜单 */}
                            <div className="col-span-3 md:flex items-center  justify-start  space-x-8">
                                <a href="#" className="text-black hover:text-gray-700 font-bold">WHAT'S NEW</a>
                                <NavLink
                                    to="/category/Keyboards"
                                    className="px-4 py-2 text-black hover:text-gray-700 font-bold"
                                    activeClassName="active"
                                >
                                    Keyboards
                                </NavLink>
                                <a href="#" className="text-black hover:text-gray-700 font-bold">SALE</a>
                                <a href="#" className="text-black hover:text-gray-700 font-bold">COMMUNITY</a>
                            </div>

                            {/* 右侧图标和按钮 */}
                            <div className="flex  col-span-2 items-center justify-end space-x-4">


                                <NavLink
                                    to="#"
                                    className="text-black hover:text-gray-700"
                                    activeClassName="active"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                    </svg>
                                </NavLink>
                                <NavLink
                                    to="#"
                                    className="text-black hover:text-gray-700"
                                    activeClassName="active"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                                    </svg>
                                </NavLink>

                                {isAuthenticated ? (
                                    <>
                                        <Link to="/user/favorites">Favorite</Link>
                                        <Link to="/user/profile">profile</Link>
                                        <Link to="/user/myListings">My Listing</Link>
                                        
                                        <button onClick={handleLogout}>Logout</button>
                                    </>
                                ) : (
                                    <>
                                        <Link
                                            to="/login"
                                            className="px-4 py-2 text-black hover:text-gray-700 font-bold"

                                        >
                                            LOG IN
                                        </Link>

                                        <Link
                                            to="/signup"
                                            className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 font-bold"

                                        >Sign Up
                                        </Link>
                                    </>
                                )}


                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}
export default Header;