"use client";
import React from "react";
import { FiHeart, FiShoppingCart } from "react-icons/fi";

const NavMenu = () => {
    return (
        <>
            <div className=" hidden md:flex items-center space-x-6">
                <div className="flex items-center space-x-4">
                    {/* Search bar (you can customize the search functionality) */}

                    {/* Wishlist Icon */}
                    <div className=" flex">
                        <FiHeart
                            size={24}
                            className="text-white cursor-pointer hover:text-slate-300"
                        />
                        <p className=" text-sm">(0)</p>
                    </div>

                    {/* Cart Icon */}
                    <div className="flex">
                        <FiShoppingCart
                            size={24}
                            className="text-white cursor-pointer hover:text-slate-300"
                        />
                        <p className=" text-sm">(0)</p>
                    </div>

                    {/* Login/Logout Option */}
                    {/* You can add the logic for login/logout here */}
                    <p className="cursor-pointer bg-slate-900 rounded-sm shadow-md px-2 py-1 hover:bg-slate-700">
                        Login
                    </p>
                </div>
            </div>
            {/* mobile view */}
            <div className="flex fixed md:hidden bottom-0 left-0 w-full items-center justify-between z-10 px-10 bg-slate-700 py-2">
                {/* Search bar (you can customize the search functionality) */}

                {/* Wishlist Icon */}
                <div className=" flex">
                    <FiHeart
                        size={24}
                        className="text-white cursor-pointer hover:text-slate-300"
                    />
                    <p className=" text-sm">(0)</p>
                </div>

                {/* Cart Icon */}
                <div className="flex">
                    <FiShoppingCart
                        size={24}
                        className="text-white cursor-pointer hover:text-slate-300"
                    />
                    <p className=" text-sm">(0)</p>
                </div>

                {/* Login/Logout Option */}
                {/* You can add the logic for login/logout here */}
                <p className="cursor-pointer bg-slate-900 rounded-sm shadow-md px-2 py-1 hover:bg-slate-700">
                    Login
                </p>
            </div>
        </>
    );
};

export default NavMenu;
