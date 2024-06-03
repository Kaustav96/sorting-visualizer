import React from 'react';
import './SortingAlgorithmSelector.css';


const SortingAlgorithmSelector = ({ onSort }) => {
    const handleSort = (algorithm) => {
        onSort(algorithm);
    };

    return (
        <div className="selector-container">
            <br />
            <button onClick={() => handleSort('bubble')}>Bubble Sort</button>
            <button onClick={() => handleSort('merge')}>Merge Sort</button>
            <button onClick={() => handleSort('insert')}>Insertion Sort</button>
            <button onClick={() => handleSort('quickFirstPivot')}>Quick Sort (First Element Pivot)</button>
            <button onClick={() => handleSort('quickLastPivot')}>Quick Sort (Last Element Pivot)</button>
            <button onClick={() => handleSort('quickRndPivot')}>Quick Sort (Random Element Pivot)</button>
        </div>
    );
};

export default SortingAlgorithmSelector;
