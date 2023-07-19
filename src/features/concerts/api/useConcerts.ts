import { useQuery } from "react-query";
import APIClient from "../../../services/api-client";



const apiClient = new APIClient<Concert>("");


const useConcerts = () => useQuery("concerts", () => apiClient.getByConfig({ params: { query: '*[_type == "concert"]' } }));

export default useConcerts;