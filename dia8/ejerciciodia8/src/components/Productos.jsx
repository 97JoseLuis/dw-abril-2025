function Productos ({producto}) {

const productos = [
    { id: 1, nombre: "Laptop", precio: 1200 }, 
    { id: 2, nombre: "Celular", precio: 800 }, 
    { id: 3, nombre: "Tablet", precio: 500 }
]

const producto = ({ nombre, precio }) => {
    return (
        <div>
            <h1>{nombre}</h1>
            <p>precio: </p>
        </div>
    )

}
     
}