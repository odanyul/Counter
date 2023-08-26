import Product from "./Product";

function ProductsList(props) {
    return (
        <div>
            <h3>Termékek</h3>
            {props.products.map((product) => (
                <Product {...product} />
            ))}
        </div>
    );
}

export default ProductsList;
