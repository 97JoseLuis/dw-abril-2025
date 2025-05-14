const menuItems = [
    {name: "Inicio", path: "/"},
    {name: "Servicios", path: "/servicios", submenu: [{ name: "web", path: "/web"}] }
];

function Menu() {
    return (
        <ul>
            {menuItems.map((item, index) => (
            <li key={index}>{item.name}</li>
            ))}
        </ul>
    );
}

export default Menu;