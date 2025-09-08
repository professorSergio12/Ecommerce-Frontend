import "./Products.scss";
import Product from "./Product/Product";

const Products = ({ products, innerPage, headingText }) => {
    // if (!products || !products.data || !Array.isArray(products.data)) {
        // return null; // or render a loading indicator or error message
    // }

    return (
        <div className="products-container">
            {!innerPage && <div className="sec-heading">{headingText}</div>}
            <div className="products">
                {products?.data?.map((item) => (
                    <Product key={item.id} id={item.id} data={item.attributes} />
                ))}
            </div>
        </div>
    );
};

export default Products;
