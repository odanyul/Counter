// Functional Component

// PascalCase
function Image({ width, height }) {
    return (
        <img src={`http://placekitten.com/${width}/${height}`} alt="cicus" />
    );
}

export const CUTEST_CAT = "mine";
export const CUTEST_DOG = "also mine";

export default Image;
