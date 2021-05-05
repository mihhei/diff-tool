import React from 'react';
type ButtonProps = {
    clickHandler(): void,
    text: string,
};

export const Button: React.FC<ButtonProps> = ({ clickHandler, text }) => {
    return (
        <div className="button" onClick={clickHandler}>
            {text}
        </div>
    );
};
