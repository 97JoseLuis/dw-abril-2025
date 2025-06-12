import React, { useRef } from 'react';

const ButtonTextField: React.FC = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleButtonClick = () => {
        inputRef.current?.focus();
    };

    return (
        <div>
            <input ref={inputRef} type="text" placeholder="Escribe aquí..." />
            <button onClick={handleButtonClick}>Enfocar campo de texto</button>
        </div>
    );
};

export default ButtonTextField;