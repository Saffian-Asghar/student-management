import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:5000/api', // Change this to your actual API base URL
});
