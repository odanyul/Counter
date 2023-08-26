import Hero from "./Hero.jsx";
import CardsGrid from "./CardsGrid.jsx";
import capIcon from "./assets/cap.svg";

const cards = [
    {
        title: "Progmatic",
        description: "Lorem ipsum dolor sit amet consectetur.",
        icon: capIcon,
    },
    {
        title: "Progmatic",
        description: "Lorem ipsum dolor sit amet consectetur.",
        icon: capIcon,
    },
    {
        title: "Progmatic",
        description: "Lorem ipsum dolor sit amet consectetur.",
        icon: capIcon,
    },
    {
        title: "Progmatic",
        description: "Lorem ipsum dolor sit amet consectetur.",
        icon: capIcon,
    },
    {
        title: "Progmatic",
        description: "Lorem ipsum dolor sit amet consectetur.",
        icon: capIcon,
    },
    {
        title: "Progmatic",
        description: "Lorem ipsum dolor sit amet consectetur.",
        icon: capIcon,
    },
];

function TopComponent() {
    return (
        <section>
            <div className="main-container">
                <Hero />
                <CardsGrid cards={cards} />
            </div>
        </section>
    );
}

export default TopComponent;
