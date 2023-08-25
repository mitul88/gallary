import axios from "axios";

export default axios.create({
    baseURL: 'http://loclhost:4000'
})