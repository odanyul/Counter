function Category(props) {
    const alertCategoryName = () => {
        alert(props.name);
    };

    return (
        <button
            onClick={(event) => {
                console.log(event);
                props.printName();
                alertCategoryName();
            }}
            onMouseDown={() => console.log("mousedown")}
        >
            {props.name}
        </button>
    );
}

export default Category;
