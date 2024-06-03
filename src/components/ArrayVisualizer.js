import React from 'react';
import './ArrayVisualizer.css';

const ArrayVisualizer = ({ array }) => {
    const maxValue = Math.max(...array);

    return (
        <div className="array-visualizer-box">
            <div className="array-container">
                {array.map((value, index) => (
                    <div
                        className="array-bar"
                        key={index}
                        style={{
                            height: `${(value / maxValue) * 100}%`, // Normalize height
                            width: `calc(${100 / array.length}% - 2px)` // Adjust width based on array size
                        }}
                    >
                        {value}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ArrayVisualizer;
