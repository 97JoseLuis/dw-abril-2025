import React, { useState, useRef, useEffect } from 'react';

const ChatEnVivo: React.FC = () => {
    const [mensajes, setMensajes] = useState<string[]>([]);
    const [input, setInput] = useState('');
    const chatEndRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [mensajes]);

    const handleEnviar = (e: React.FormEvent) => {
        e.preventDefault();
        if (input.trim() === '') return;
        setMensajes([...mensajes, input]);
        setInput('');
    };

    return (
        <div style={{ maxWidth: 400, margin: '0 auto' }}>
            <div
                style={{
                    border: '1px solid #ccc',
                    borderRadius: 8,
                    height: 300,
                    overflowY: 'auto',
                    padding: 16,
                    background: '#fafafa',
                    marginBottom: 8,
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                {mensajes.map((msg, idx) => (
                    <div key={idx} style={{ margin: '4px 0' }}>
                        <span>{msg}</span>
                    </div>
                ))}
                <div ref={chatEndRef} />
            </div>
            <form onSubmit={handleEnviar} style={{ display: 'flex', gap: 8 }}>
                <input
                    type="text"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    style={{ flex: 1, padding: 8, borderRadius: 4, border: '1px solid #ccc' }}
                    placeholder="Escribe un mensaje..."
                />
                <button type="submit" style={{ padding: '8px 16px', borderRadius: 4 }}>
                    Enviar
                </button>
            </form>
        </div>
    );
};

export default ChatEnVivo;