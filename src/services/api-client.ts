import axios, { AxiosRequestConfig } from "axios";
import { SANITY_DATASET, SANITY_PROJECT_ID } from "../config"

interface FetchResponse<T> {
    ms: number;
    result: T[];
}

const axiosInstance = axios.create({
    baseURL: `https://${SANITY_PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${SANITY_DATASET}`
})

class APIClient<T>{
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getByConfig = (config: AxiosRequestConfig) => axiosInstance.get<FetchResponse<T>>(this.endpoint, config).then((res) =>
        res.data
    );


}


export default APIClient;