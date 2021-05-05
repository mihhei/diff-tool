import React, { useState } from 'react';
import { InputField } from './InputField';
import { Button } from './Button';
import parse from 'html-react-parser';
import { getTemplate } from '../functions/getTemplate';
import { Flipper } from './Flipper';

export const Container: React.FC = () => {
    const [flip, setFlip] = useState<string>('');
    const [oldText, setOldText] = useState<string>('');
    const [newText, setNewText] = useState<string>('');
    const [diff, setDiff] = useState<string>('');

    const getText = (tag: string, text: string) => {
        if (tag === 'old') {
            setOldText(text);
        } else {
            setNewText(text);
        }
    };

    const resetButton = () => {
        setFlip('');
        setOldText('');
        setNewText('');
        setDiff('');
    };

    const showDiff = () => {
        if (!oldText || !newText) {
            alert('Both input are required!!!');
        } else {
            setFlip('flip');
            setDiff('<ol>' + getTemplate(oldText, newText) + '</ol>');
        }
    };

    return (
        <div className="container">
            <InputField tag="old" getText={getText} value={oldText} />
            <Flipper
                front={<Button clickHandler={showDiff} text={'Show DIFF'} />}
                back={<div className="result">{parse(diff)}</div>}
                flip={flip}
            />
            <InputField tag="new" getText={getText} value={newText} />
            <Flipper front={<></>} back={<Button clickHandler={resetButton} text={'Try again!'} />} flip={flip} />
        </div>
    );
};
