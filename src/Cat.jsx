import Image from "./Image.jsx";

const Cat = ({ name, age, gender }) => {
    return (
        <div>
            <Image />
            <h3>{name}</h3>
            <p>Age: {age}</p>
            <p>Gender: {gender}</p>
        </div>
    );
};

export default Cat;
