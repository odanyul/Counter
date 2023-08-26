function Card({ icon, title, description }) {
    return (
        <div className="card">
            <div className="svg-container">
                <img src={icon} />
            </div>

            <h2>{title}</h2>

            <p>{description}</p>
        </div>
    );
}

export default Card;
