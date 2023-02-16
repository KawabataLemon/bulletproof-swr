import axios from "axios";

const client = axios.create({
  baseURL: "https://swapi.dev/api/",
  headers: {
    'Content-Type': 'application/json'
  }
});

const fetcher = <T>(url: string) => client.get<T>(url).then((res) => res.data);
const poster = async <T, K>(url: string, dto: K) => await client.post<T>(url, dto).then((res) => res.data);

export {
  fetcher,
  poster
}