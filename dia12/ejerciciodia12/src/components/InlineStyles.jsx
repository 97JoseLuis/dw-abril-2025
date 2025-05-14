import React, { useState } from "react";

function InlineStyles() {
    const [hover, setHover] = useState(false);

    const buttonStyle = {
        backgroundColor: hover ? "#4CAF50" : "#008CBA",
        color: "white",
        padding: "10px 24px",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        transition: "background-color 0.2s",
    };

    return (
        <button
            style={buttonStyle}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            Hover me!
        </button>
    );
}

export default InlineStyles;