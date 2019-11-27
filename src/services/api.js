import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/FabricioRgs/rsxp-hackathon',
});

export default api;
