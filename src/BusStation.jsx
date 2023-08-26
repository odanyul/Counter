import Bus from "./Bus.jsx";

function BusStation({ name, buses }) {
    return (
        <div>
            <h1>{name}</h1>
            {buses.map((bus) => (
                <Bus bus={bus} />
            ))}
        </div>
    );
}

export default BusStation;
