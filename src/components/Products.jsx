import ProductCard from "./ProductCard";

const Products = ({ result }) => {
    if (result.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center h-[50vh]">
                <h2 className="text-2xl font-bold mb-4">No Products Found</h2>
                <p className="text-gray-500">
                    Try adjusting your filters or search query
                </p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 px-4 lg:px-10 md:px-0 md:grid-cols-3 lg:grid-cols-4 my-4 md:my-4 lg:my-5 gap-5">
            {result.map((product, index) => (
                <ProductCard
                    key={index}
                    img={product.img}
                    title={product.title}
                    reviews={product.reviews}
                    prevPrice={product.prevPrice}
                    newPrice={product.newPrice}
                    company={product.company}
                    color={product.color}
                    category={product.category}
                    discount={product.discount}
                />
            ))}
        </div>
    );
};

export default Products;
