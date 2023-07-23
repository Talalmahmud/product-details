import React from "react";

const Search = () => {
    return (
        <>
            <div className=" flex ">
                <select className="">
                    <option>Catagory-1</option>
                    <option>Catagory-2</option>
                    <option>Catagory-3</option>
                    <option>Catagory-4</option>
                </select>
                <input
                    type="text"
                    placeholder="Search"
                    className="px-2 py-1 bg-gray-700 rounded-sm md:w-fit outline-none"
                />
            </div>
        </>
    );
};

export default Search;
