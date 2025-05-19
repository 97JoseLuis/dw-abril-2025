import React, { useState } from "react";

function TextInput() {
    const [text, setText] = useState("");

    return (
        <div>
            <input 
                type="text" 
                value={text} 
                onChange={(e) => setText(e.target.value)}
                placeholder="Escribe algo..."
            />
            <p>Texto ingresado: {text}</p>
        </div>
    );
}

export default TextInput;
