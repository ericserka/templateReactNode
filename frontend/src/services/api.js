//api de comunicação do frontend com o backend
import axios from 'axios'
import { BACKEND_URL } from '../env'
const api = axios.create({
  baseURL: BACKEND_URL,
})
export default api
