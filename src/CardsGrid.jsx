import Card from "./Card";

function CardsGrid(props) {
    return (
        <div className="column cards-container">
            {props.cards.map((card, index) => (
                <Card
                    title={card.title}
                    description={card.description}
                    icon={card.icon}
                    key={`card-${index}`}
                />
            ))}
        </div>
    );
}

export default CardsGrid;
