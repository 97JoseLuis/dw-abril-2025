function frutas ({frutas}) {
        
    const frutas = ["Manzana", "Banana", "Cereza", "Durazno", "Fresa"];

    const frutas = () => (
        <ul>
            {frutas.map((frutas, index) => (
                <li key = {index}>{frutas}</li>
            ))}

        </ul>
    )
}