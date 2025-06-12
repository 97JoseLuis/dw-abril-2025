import React, { useEffect, useState } from "react";

const EstilosResponsivos = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 600);
        };
        window.addEventListener("resize", handleResize);
        
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const style = {
        color: isMobile ? "red" : "green",
        fontSize: "2rem",
        textAlign: "center",
        marginTop: "2rem",
    };

    return (
        <div>
            <p style={style}>
                {isMobile
                    ? "La ventana es menor a 600px (color rojo)"
                    : "La ventana es mayor o igual a 600px (color verde)"}
            </p>
        </div>
    );
};

export default EstilosResponsivos;