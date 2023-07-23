"use client";
import React, { memo, useState } from "react";

const ProductDetails = ({ product, reviews }) => {
    const { sizes, colors } = product;
    const [productImg, setProductImg] = useState(product.images[0]);

    const imageChange = (id) => {
        setProductImg(product.images[id]);
    };

    return (
        <div>
            <div className="container mx-auto mt-4 p-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* product product.images */}
                    <div className=" flex flex-col justify-center items-center gap-4">
                        <img
                            src={productImg}
                            className=" md:h-[300px] w-full h-full object-contain hover:scale-100"
                            alt=""
                        />
                        <div className=" w-full flex gap-4 bg-slate-50 p-4">
                            {" "}
                            {product.images.map((image, id) => (
                                <button
                                    className={`${
                                        productImg === image &&
                                        "border-4 border-green-500 "
                                    }`}
                                    key={id}
                                    onClick={() => imageChange(id)}
                                >
                                    <img
                                        src={image}
                                        width={40}
                                        height={40}
                                        alt=""
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Product Information */}
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-bold mb-2">
                            {product.title}
                        </h2>
                        <p className="text-lg font-semibold mb-2">
                            {product.price}
                        </p>
                        <div className="mb-2">
                            <p className="text-gray-600 font-semibold">Size:</p>
                            {sizes.map((size, index) => (
                                <span key={index} className="mr-2 inline-block">
                                    {size}
                                </span>
                            ))}
                        </div>
                        <div className="mb-4">
                            <p className="text-gray-600 font-semibold">
                                Color:
                            </p>
                            {colors.map((color, index) => (
                                <span key={index} className="mr-2 inline-block">
                                    {color}
                                </span>
                            ))}
                        </div>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
                            Add to Cart
                        </button>
                    </div>
                </div>

                {/* Product Description */}
                <div className="mt-6">
                    <h3 className="text-xl font-bold border-b-2 py-1">
                        Product Description
                    </h3>
                    <p>{product.description}</p>
                </div>

                {/* Product Reviews */}
                <div className="mt-6">
                    <h3 className="text-xl font-bold border-b-2 py-1">
                        Reviews
                    </h3>
                    <div className=" flex flex-col gap-5">
                        {reviews.map((review, index) => (
                            <div key={index} className=" flex flex-col">
                                <p className="text-lg font-semibold">
                                    {review.username}
                                </p>
                                <p>{review.comment}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(ProductDetails);
