import React, { useState } from 'react';
import ArrayVisualizer from './ArrayVisualizer';
import SortingAlgorithmSelector from './SortingAlgorithmSelector';
import { bubbleSort, insertionSort, mergeSort, quickSortFirstPivot, quickSortLastPivot, quickSortRndPivot } from '../services/sortingService';

const originalArray = [50, 40, 30, 20, 10, 60, 70, 80];

const SortingVisualizer = () => {
    const [array, setArray] = useState(originalArray);
    const [isLoading, setIsLoading] = useState(false);
    const [sortingTime, setSortingTime] = useState(null);
    const [newValue, setNewValue] = useState("");

    const handleSort = async (algorithm) => {
        setIsLoading(true);
        const startTime = performance.now();
        let sortedArray;
        if (algorithm === 'bubble') {
            sortedArray = await bubbleSort(array);
        } else if (algorithm === 'merge') {
            sortedArray = await mergeSort(array);
        } else if (algorithm === 'quickFirstPivot') {
            sortedArray = await quickSortFirstPivot(array);
        } else if (algorithm === 'quickLastPivot') {
            sortedArray = await quickSortLastPivot(array);
        } else if (algorithm === 'quickRndPivot') {
            sortedArray = await quickSortRndPivot(array);
        } else if (algorithm === 'insert'){
            sortedArray = await insertionSort(array);
        }
        const endTime = performance.now(); // Stop measuring time
        const totalTime = endTime - startTime;
        setSortingTime(totalTime.toFixed(2)); 
        animateSorting(sortedArray);
        setArray(sortedArray);
        setIsLoading(false);
    };
    const animateSorting = (sortedArray) => {
        const delay = 100; // Delay between each step (adjust as needed)
        let index = 0;
        const interval = setInterval(() => {
            if (index < sortedArray.length) {
                setArray(sortedArray.slice(0, index + 1)); // Update the array up to the current index
                index++;
            } else {
                clearInterval(interval); // Stop the interval when sorting is complete
                setIsLoading(false);
            }
        }, delay);
    };

    const resetArray = () => {
        setArray(originalArray);
        setSortingTime(null); // Reset sorting time
    };
    const handleAddNumber = () => {
        const num = parseInt(newValue, 10);
        if (!isNaN(num)) {
            setArray(prevArray => [...prevArray, num]);
            setNewValue(""); // Clear the input field
        }
    };


    return (
        // <div>
        //     <SortingAlgorithmSelector onSort={handleSort} />
        //     <ArrayVisualizer array={array} />
        //     <div>
        //         <button onClick={resetArray}>Reset</button>
        //         {isLoading && <div>Sorting...</div>}
        //         {sortingTime && <div>Total sorting time: {sortingTime} ms</div>}
        //     </div>
        // </div>
        <div>
            <SortingAlgorithmSelector onSort={handleSort} />
            <div>
                <input
                    type="number"
                    value={newValue}
                    onChange={(e) => setNewValue(e.target.value)}
                    placeholder="Add a number"
                />
                <button onClick={handleAddNumber}>Add Number</button>
            </div>
            <ArrayVisualizer array={array} />
            <div>
                <br></br>
                <button onClick={resetArray}>Reset</button>
                {isLoading && <div>Sorting...</div>}
                {sortingTime && <div>Total sorting time: {sortingTime} ms</div>}
            </div>
            <div>
                <h2>Time Complexity</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Algorithm</th>
                            <th>Worst Case</th>
                            <th>Best Case</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Bubble Sort</td>
                            <td>O(n^2)</td>
                            <td>O(n)</td>
                        </tr>
                        <tr>
                            <td>Merge Sort</td>
                            <td>O(n log n)</td>
                            <td>O(n log n)</td>
                        </tr>
                        {/* Add more rows for other sorting algorithms if needed */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SortingVisualizer;
