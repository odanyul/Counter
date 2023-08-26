import Category from "./Category";

function CategoryList({ categories }) {
    return (
        <div>
            <h3>Kategóriák</h3>
            {categories.map((categoryName) => (
                <Category
                    name={categoryName}
                    printName={() => console.log(categoryName)}
                />
            ))}
        </div>
    );
}

export default CategoryList;
