import axios from 'axios';

const API_URL = 'http://localhost:8080/v1/sort';

export const bubbleSort = async (array) => {
    const response = await axios.post(`${API_URL}/bubble`, {array});
    return response.data;
};

export const mergeSort = async (array) => {
    const response = await axios.post(`${API_URL}/merge`, {array});
    return response.data;
};

export const quickSortFirstPivot = async (array) => {
    const response = await axios.post(`${API_URL}/quick/firstpivot`,{array});
    return response.data;
}
export const quickSortLastPivot = async (array) => {
    const response = await axios.post(`${API_URL}/quick/lastpivot`,{array});
    return response.data;
}

export const quickSortRndPivot = async (array) => {
    const response = await axios.post(`${API_URL}/quick/rndpivot`,{array});
    return response.data;
}

export const insertionSort = async (array) => {
    const response = await axios.post(`${API_URL}/insertion`,{array});
    return response.data;
}