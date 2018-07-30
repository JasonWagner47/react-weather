import axios from 'axios';

const instance = axios.create({
    baseURL: '..openweather'
});

instance.defaults.headers/common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';
export default instance; 
