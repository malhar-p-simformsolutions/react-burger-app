import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-62511-default-rtdb.firebaseio.com/'
});

export default instance;