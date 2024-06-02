import axios from "axios";
// import process from "process";

const api = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API_URL
})

class InfoService {
  static async getAll() {
    const {data} = await api.get('getAll')
    return data
  }
}

export default InfoService