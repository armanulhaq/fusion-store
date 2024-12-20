import ProductCard from "./ProductCard";

const Products = ({ result }) => {
    return (
        <div className="grid grid-cols-1  px-4 lg:px-10 md:px-0 md:grid-cols-3 lg:grid-cols-4  my-4 md:my-4 lg:my-5 gap-5">
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
