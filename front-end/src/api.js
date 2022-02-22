
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
});

export default api;


/*import axios from "axios";
const baseUrl = 'http://localhost:8080';

axios.defaults.baseURL=baseUrl;


export default axios;

*/