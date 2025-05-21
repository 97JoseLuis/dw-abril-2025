import React, { useRef } from "react";

const ScrollAlFinal: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const endRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        endRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div>
            <button onClick={scrollToBottom} style={{ marginBottom: 16 }}>
                Ir al final
            </button>
            <div
                ref={containerRef}
                style={{
                    height: 300,
                    width: 350,
                    overflowY: "auto",
                    border: "1px solid #ccc",
                    padding: 16,
                    background: "#fafafa",
                }}
            >
                {[...Array(20)].map((_, i) => (
                    <div key={i} style={{ margin: "12px 0" }}>
                        Elemento #{i + 1}
                    </div>
                ))}
                <div ref={endRef} />
            </div>
        </div>
    );
};

export default ScrollAlFinal;