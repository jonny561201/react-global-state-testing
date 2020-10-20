import React from 'react';

export default function Step(props) {

    return (
        <div>
            <button data-testid='button' onClick={props.func}>Click</button>
        </div>
    )
}