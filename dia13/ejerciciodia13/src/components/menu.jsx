import React, { useState } from "react";

const menuItems = [
    { name: "Inicio", path: "/" },
    { name: "Servicios", path: "/servicios", submenu: [{ name: "web", path: "/web" }] }
];

function Menu() {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <nav style={{ fontFamily: "Segoe UI, Arial, sans-serif" }}>
            <ul style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                background: "#2d3748",
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
            }}>
                {menuItems.map((item, index) => (
                    <li
                        key={index}
                        style={{
                            position: "relative",
                            margin: 0,
                            padding: 0
                        }}
                        onMouseEnter={() => setOpenIndex(index)}
                        onMouseLeave={() => setOpenIndex(null)}
                    >
                        <a
                            href={item.path}
                            style={{
                                display: "block",
                                padding: "14px 24px",
                                color: "#fff",
                                textDecoration: "none",
                                fontWeight: 500,
                                borderRadius: "8px 8px 0 0",
                                transition: "background 0.2s",
                                background: openIndex === index ? "#4a5568" : "transparent"
                            }}
                        >
                            {item.name}
                        </a>
                        {item.submenu && (
                            <ul
                                style={{
                                    listStyle: "none",
                                    padding: "8px 0",
                                    margin: 0,
                                    position: "absolute",
                                    left: 0,
                                    top: "100%",
                                    background: "#fff",
                                    boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                                    borderRadius: "0 0 8px 8px",
                                    minWidth: "160px",
                                    opacity: openIndex === index ? 1 : 0,
                                    maxHeight: openIndex === index ? "400px" : "0px",
                                    overflow: "hidden",
                                    pointerEvents: openIndex === index ? "auto" : "none",
                                    transition: "opacity 0.3s, max-height 0.3s"
                                }}
                            >
                                {item.submenu.map((subitem, subindex) => (
                                    <li key={subindex}>
                                        <a
                                            href={subitem.path}
                                            style={{
                                                display: "block",
                                                padding: "10px 24px",
                                                color: "#2d3748",
                                                textDecoration: "none",
                                                borderRadius: "4px",
                                                transition: "background 0.2s",
                                            }}
                                            onMouseEnter={e => e.target.style.background = "#f7fafc"}
                                            onMouseLeave={e => e.target.style.background = "transparent"}
                                        >
                                            {subitem.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Menu;