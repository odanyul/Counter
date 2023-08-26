import ProductHeader from "./ProductHeader";

function Product({ image, title, category, price, description, id }) {
    return (
        <div>
            <img src={image} width={200} />
            <div>
                <ProductHeader>
                    <p>{id}</p>
                    <h4>{title}</h4>
                    <h3>child</h3>
                </ProductHeader>
                <ul>
                    <li>category: {category}</li>
                    <li>price: ${price}</li>
                    <li>description: {description}</li>
                </ul>
            </div>
        </div>
    );
}

export default Product;
