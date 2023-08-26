function ProductHeader(props) {
    console.log(props.children);

    return (
        <div className="product-header">
            {props.children.map((child) => (
                <article>{child}</article>
            ))}
        </div>
    );
}

export default ProductHeader;
