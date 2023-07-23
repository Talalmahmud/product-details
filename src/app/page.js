"use client";

import ProductDetails from "@/app/(components)/ProductDetails";

const product = {
    product: {
        title: "Product Name",
        description:
            "A flash diffuser is an accessory that helps spread the light out to avoid hard product photography lighting. One of the best product photography techniques, using a flash diffuser can help ensure that your product photography is well lit. Good diffusers help illuminate a product or person without a washed out look. They also help create a more natural light look. In general, a flash diffuser helps make pictures look better. When it comes to using the camera’s built-in flash and a flash diffuser, your best bet is almost always a diffuser.",
        price: "$19.99",
        images: [
            "https://www.oberlo.com/media/1603969893-productphotog-12.jpg?fm=webp&w=1824&fit=max",
            "https://www.oberlo.com/media/1603969900-productphotog-2.jpg?w=1824&fit=max",
            "https://www.oberlo.com/media/1603969901-productphotog-1.jpg?fit=max&fm=webp&w=1824",
        ],
        category: "Men",
        colors: ["Red", "Blue", "Green"],
        sizes: ["Small", "Medium", "Large"],
    },
    reviews: [
        {
            username: "User1",
            rating: 4,
            comment: "Great product! Highly recommended.",
        },
        {
            username: "User2",
            rating: 5,
            comment: "Excellent quality and fast shipping.",
        },
        {
            username: "User3",
            rating: 3,
            comment: "Average product. Could be better.",
        },
    ],
};
export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <ProductDetails
                product={product.product}
                reviews={product.reviews}
            />
        </main>
    );
}
