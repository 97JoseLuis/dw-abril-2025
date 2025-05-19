import { useState, useEffect } from "react";

function UsuarioGitHub() {
    const [usuario, setUsuario] = useState(""); 
    const [usuarioBuscado, setUsuarioBuscado] = useState("");
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!usuarioBuscado.trim()) return; 

        const fetchUsuario = async () => {
            setLoading(true);
            setError(null);
            setData(null); 

            try {
                const response = await fetch(`https://api.github.com/users/${usuarioBuscado}`);
                if (!response.ok) {
                    throw new Error("Usuario no encontrado");
                }
                const data = await response.json();
                setData(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUsuario();
    }, [usuarioBuscado]);

    return (
        <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif" }}>
            <h1>Buscar Usuario de GitHub</h1>
            <input 
                type="text" 
                placeholder="Ingresa un usuario de GitHub" 
                value={usuario} 
                onChange={(e) => setUsuario(e.target.value)}
            />
            <button 
                onClick={() => {
                    if (usuario.trim()) { 
                        setUsuarioBuscado(usuario);
                    } else {
                        setError("Por favor ingresa un usuario válido");
                    }
                }}
            >
                Buscar
            </button>

            {loading && (
                <div>
                    <p>Cargando...</p>
                    <div style={{ 
                        width: "30px", 
                        height: "30px", 
                        border: "4px solid #000", 
                        borderTopColor: "transparent",
                        borderRadius: "50%", 
                        animation: "spin 1s linear infinite"
                    }} />
                    <style>{`
                        @keyframes spin {
                            from { transform: rotate(0deg); }
                            to { transform: rotate(360deg); }
                        }
                    `}</style>
                </div>
            )}

            {error && <p style={{ color: "red" }}>{error}</p>}

            {data && (
                <div>
                    <h2>{data.name || data.login}</h2>
                    <p>Ubicación: {data.location || "No especificada"}</p>
                    <p>Repositorios públicos: {data.public_repos}</p>
                    <img src={data.avatar_url} alt={data.login} width={100} />
                </div>
            )}
        </div>
    );
}

export default UsuarioGitHub;