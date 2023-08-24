import Image from "./Image.jsx";

const Cat = () => {
    const catData = {
        name: "Rumli",
        age: 1,
        gender: "male",
    };

    return (
        <div>
            <Image />
            <h3>{catData.name}</h3>
            <p>Age: {catData.age}</p>
            <p>Gender: {catData.gender}</p>
        </div>
    );
};

export default Cat;
