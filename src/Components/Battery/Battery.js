import React, { useEffect, useState } from 'react';

const Battery = () => {
    const [battery, setBattery] = useState(100);

    const downBattery = () => {
        if (battery >= 10 && battery <= 100) {
            const newBattery = battery - 10;
            setBattery(newBattery);
        }
    }
    const batterUp = () => {
        if (battery >= 0 && battery <= 90) {
            setBattery(battery + 10)
        }
    }


    return (
        <div>
            <h1>Hello world</h1>
            <h3 >Current Battery Status {battery}</h3>

            <button class='btn btn-outline-success me-3' onClick={batterUp}>BATTERY UP </button>
            <button class='btn btn-outline-danger ' onClick={downBattery}>BATTERY DOWN</button>
        </div>
    );
};

export default Battery;