import React, { ReactElement } from 'react';

type FlipperProps = {
    front: ReactElement,
    back: ReactElement,
    flip: string,
};

export const Flipper: React.FC<FlipperProps> = ({ front, back, flip }) => {
    return (
        <div className="block">
            <div className={'flip-container ' + flip}>
                <div className="flipper">
                    <div className="front">{front}</div>
                    <div className="back">{back}</div>
                </div>
            </div>
        </div>
    );
};
