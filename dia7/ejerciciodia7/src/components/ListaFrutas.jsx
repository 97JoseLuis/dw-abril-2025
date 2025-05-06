function frutas ({frutas}) {
        
    const frutas = ["fresa","sandia","melon"];

    const frutas = () => (
        <ul>
            {frutas.map((frutas, index) => (
                <li key = {index}>{frutas}</li>
            ))}

        </ul>
    )
    const totalFrutas = frutas.length;

  return (
    <>
    <div>
      <p>Hay {totalFrutas} frutas en la lista.</p>
    </div>
    </>
  );
    

}

export default frutas