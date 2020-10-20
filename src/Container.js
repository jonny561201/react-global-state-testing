import React, { useState } from 'react';
import Step from './Step';

export default function Container() {
    const [step, setStep] = useState(4);

    const handleClick = () => {
        setStep(step - 1)
    }

    return (
        <div>
            <h1 data-testid='header-text' >{step}</h1>
            <Step func={handleClick}/>
        </div>
    )
}