"use client";
import React from "react";
import Link from "next/link";
import NavMenu from "./NavMenu";
import Search from "./Search";

const Navbar = ({ currentCategory }) => {
    return (
        <nav className="bg-gray-800 text-white p-4 w-full fixed top-0 z-10 ">
            <div className="container mx-auto flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
                <Link href="/">
                    <h2 className=" text-2xl font-bold">PROduCT</h2>
                </Link>

                <Search />
                <NavMenu />
            </div>
        </nav>
    );
};

export default Navbar;
