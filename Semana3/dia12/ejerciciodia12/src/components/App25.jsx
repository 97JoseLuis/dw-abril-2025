import React, { useState } from "react";

function App() {
    const [count, setCount] = useState(0);

    const titleStyle = {
        color: "blue",
    };

    const buttonStyle = {
        backgroundColor: "green",
        color: "white",
        border: "none",
        padding: "10px 20px",
        cursor: "pointer",
        fontSize: "16px",
    };

    return (
        <div>
            <h1 style={titleStyle}>Título Azul</h1>
            <button style={buttonStyle} onClick={() => setCount(count + 1)}>
                Haz clic ({count})
            </button>
        </div>
    );
}

export default App;