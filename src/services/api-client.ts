import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '8f8ba71e8b694eeea09a7d38558ac6a8'
    }
})