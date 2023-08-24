function Header() {
    const ulClassName = "feature-list-from-variable";
    const greeting = "Hey";

    const pStyle = {
        color: "red",
        backgroundColor: "black",
    };

    return (
        <>
            <h1 id="header-text">{greeting}, React!</h1>
            <p style={pStyle}>Ezért jó a React:</p>
            <br />
            <ul className={ulClassName}>
                <li>Moduláris</li>
                <li>Gyors</li>
                <li>Korszerű</li>
                <li>Menő</li>
                <li>Kék</li>
            </ul>
        </>
    );
}

export let num = 3;

export default Header;
