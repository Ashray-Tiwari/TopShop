import axios from "axios";

const instance = axios.create({
    baseURL:'https://us-central1-ecommerce-3b845.cloudfunctions.net/api' // THE API URL
});

export default instance ;


// http://localhost:5001/ecommerce-3b845/us-central1/api