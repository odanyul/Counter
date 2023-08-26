function Bus({ bus }) {
    return (
        <div className="bus">
            <ol>
                <li>Rendszám: {bus.licensePlateNumber}</li>
                <li>Típus: {bus.type}</li>
                <li>Ülőhelyek száma: {bus.places.seated}</li>
                <li>Állóhelyek száma: {bus.places.standing}</li>
            </ol>
        </div>
    );
}

export default Bus;
