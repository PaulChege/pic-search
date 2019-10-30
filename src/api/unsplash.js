import axios from "axios";
import Axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 1041db3dd75566e4c7d434140eb61a9dc3565118a5eeee5e923f2f2875e92342"
  }
});
